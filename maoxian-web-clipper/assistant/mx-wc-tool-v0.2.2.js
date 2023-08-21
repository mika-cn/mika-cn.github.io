;
/*!
 * MaoXian Web Clipper Tool
 *   apply function is used to apply a plan. Plan describes some operators include hiding DOM element, picking DOM element etc.
 *   plan: {
 *     hideElem: [Selector, Selector..]
 *     pickElem: [Selector, Selector..]
 *     pickAction: 'focus' or 'confirm' or 'clip'
 *   }
 */

//=META version 0.2.2

var MxWc = (function(undefined){
  "use strict";
  let ready = false;
  let listeners = {};

  function listen(type, action) {
    const actions = getActions(type);
    actions.push(action);
    listeners[type] = actions;
    if(type == 'ready' && ready == true) {
      // MxWc is ready before we listen
      performWhenReady();
    }
  }

  function getActions(type) {
    return listeners[type] || [];
  }
  //=========================================
  // perform && undo
  //=========================================


  function bindListener() {
    document.addEventListener('mx-wc.ready', performWhenReady);
    document.addEventListener('mx-wc.selecting', performWhenSelecting);
    document.addEventListener('mx-wc.completed', performWhenCompleted);
    document.addEventListener('mx-wc.idle', performWhenIdle);
  }

  function unbindListener() {
    document.removeEventListener('mx-wc.ready', performWhenReady);
    document.removeEventListener('mx-wc.selecting', performWhenSelecting);
    document.removeEventListener('mx-wc.completed', performWhenCompleted);
    document.removeEventListener('mx-wc.idle', performWhenIdle);
  }

  function performWhenReady(e) {
    const detail = {};
    perform('ready', detail);
  }

  function performWhenSelecting(e) {
    const detail = {};
    perform('selecting', detail);
  }

  function performWhenCompleted(e) {
    const detail = JSON.parse(e.detail);
    perform('completed', detail);
  }

  function performWhenIdle(e) {
    const detail = {};
    perform('idle', detail);
  }

  function perform(msgType, detail) {
    const r = [];
    const actions = getActions(msgType);
    actions.forEach((action) => {
      action.perform(detail);
      if(action.isPerformOnce) {
        r.push(action);
      }
    });
    r.forEach((action) => {
      const idx = actions.indexOf(action)
      if(idx > -1) {
        actions.splice(idx, 1);
      }
    });
    listeners[msgType] = actions;
  }

  //=========================================
  // Actions
  //=========================================

  const Action = {};

  function createSetDisplayAction(params) {
    return function(selectorInput, contextNode) {
      return {
        name: params.name,
        isPerformOnce: false,
        selectorInput: selectorInput,
        contextNode: contextNode,
        perform: function(detail={}) {
          const This = this;
          const selectorStrs = toSelectorStrs(this.selectorInput);
          selectorStrs.forEach(function(it) {
            queryElemsBySelector(it, (This.contextNode || document))
              .forEach(function(elem) {
                const style = window.getComputedStyle(elem);
                if(style.display != params.display) {
                  elem.setAttribute("mx-original-display", style.display);
                  elem.style.display = params.display;
                }
              });
          })
        }
      }
    }
  }

  Action.showElem = createSetDisplayAction({
    name: 'showElem',
    display: 'block'
  });

  Action.hideElem = createSetDisplayAction({
    name: 'hideElem',
    display: 'none'
  });

  Action.undoDisplay = function(selectorInput, contextNode) {
    return {
      name: 'undoDisplay',
      isPerformOnce: false,
      selectorInput: selectorInput,
      contextNode: contextNode,
      perform: function(detail={}) {
        const This = this;
        const selectorStrs = toSelectorStrs(this.selectorInput);
        selectorStrs.forEach(function(it) {
          queryElemsBySelector(it, (This.contextNode || document))
            .forEach(function(elem) {
              const attrName = "mx-original-display";
              const originalValue = elem.getAttribute(attrName);
              if(originalValue) {
                elem.style.display = originalValue;
                elem.removeAttribute(attrName);
              }
            });
        })
      }
    }
  }

  /*
   * chAttr: [
   *   {
   *     pick: $selectorInput,
   *     attr: attributeName,
   *     type: 'parent.attr', 'self.attr', 'self.replace', 'self.add', 'self.remove'
   *     target: attrname or subStr
   *     value: newStr
   *     sep: ' '
   * ]
   *
   */

  function initChAttrActions(params) {
    const result = [];
    params.forEach(function(it) {
      if(['self.add', 'self.remove'].indexOf(it.type) > -1) {
        if(!it.attr) { it.attr = 'class' }
        if(!it.sep) { it.sep = ' ' }
      }
      result.push(it);
    });
    return result;
  }


  Action.chAttr = function(params, contextNode) {
    const actions = initChAttrActions(params);
    return {
      name: 'chAttr',
      isPerformOnce: false,
      actions: actions,
      contextNode: contextNode,
      perform: function(detail={}) {
        const This = this;
        this.actions.forEach(function(action) {
          This.changeAttr(action);
        })
        //console.debug("MxWcTool.changeAttr", document.location.href);
      },
      changeAttr: function(action) {
        const This = this;
        const selectorStrs = toSelectorStrs(action.pick);
        selectorStrs.forEach(function(it) {
          queryElemsBySelector(it, (This.contextNode || document))
            .forEach(function(elem) {
              const value = This.getValue(elem, action);
              if(value) {
                const attrName = ['mx-original-attr', action.attr].join(':');
                elem.setAttribute(attrName, elem.getAttribute(action.attr));
                elem.setAttribute(action.attr, value);
              }
            });
        })

      },
      getValue: function(elem, action) {
        switch(action.type) {
          case 'self.attr':
            return elem.getAttribute(action.tAttr);
            break;
          case 'parent.attr':
            if(elem.parentElement) {
              return elem.parentElement.getAttribute(action.tAttr);
            }
            break;
          case 'self.replace':
            const attr = elem.getAttribute(action.attr);
            const index = attr.lastIndexOf(action.subStr)
            if(index > -1) {
              const firstPart = attr.substring(0, index);
              const lastPart = attr.substring(index);
              return [
                firstPart,
                lastPart.replace(action.subStr, action.newStr)
              ].join('');
            }
            break;
          case 'self.add':
          case 'self.remove':
            let parts = [];
            const attrValue = elem.getAttribute(action.attr);
            if(attrValue) {
              parts = attrValue.trim().split(action.sep);
            }
            const idx = parts.indexOf(action.value);
            if(action.type == 'self.add' && idx == -1) {
              parts.push(action.value);
              return parts.join(action.sep);
            }
            if(action.type == 'self.remove' && idx > -1) {
              parts.splice(idx, 1);
              return parts.join(action.sep);
            }
            break;
        }
        return undefined;
      }
    }
  }

  Action.undoChAttr = function(params, contextNode) {
    const actions = initChAttrActions(params);
    return {
      name: 'undoChAttr',
      isPerformOnce: false,
      actions: actions,
      contextNode: contextNode,
      perform: function(detail={}) {
        const This = this;
        this.actions.forEach(function(action) {
          const selectorStrs = toSelectorStrs(action.pick);
          selectorStrs.forEach(function(it) {
            queryElemsBySelector(it, (This.contextNode || document))
              .forEach(function(elem) {
                const attrName = ['mx-original-attr', action.attr].join(':');
                const originalValue = elem.getAttribute(attrName);
                if(originalValue) {
                  elem.setAttribute(action.attr, originalValue);
                  elem.removeAttribute(attrName);
                }
              });
          });
        })
        //console.debug("MxWcTool.undoChangeAttr");
      }
    }
  }


  function createPickedElemAction(params) {
    return function(selectorInput) {
      return {
        name: params.name,
        isPerformOnce: true,
        selectorInput: selectorInput,
        perform: function(detail = {}) {
          const [elem, selector] = queryFirstElem(this.selectorInput, document);
          if(elem) {
            const msg = {
              qType: Selector.getTypeName(selector),
              q: selector.q
            };
            if(params.options) {
              msg.options = params.options
            }
            dispatchEvent(params.eventName, msg);
          }
        }
      }
    }
  }

  Action.focusElem = createPickedElemAction({
    name: 'focusElem',
    eventName: 'mx-wc.focus-elem'
  });

  Action.confirmElem = createPickedElemAction({
    name: 'confirmElem',
    eventName: 'mx-wc.confirm-elem',
    options: {}
  });

  Action.clipElem = createPickedElemAction({
    name: 'clipElem',
    eventName: 'mx-wc.clip-elem',
    options: {}
  });

  Action.setForm = function(inputs) {
    return {
      name: 'setForm',
      isPerformOnce: true,
      inputs: inputs,
      perform: function(detail={}) {
        dispatchEvent('mx-wc.set-form-inputs', {
          options: inputs
        });
      }
    }
  };

  Action.completed = function(fn) {
    return {
      name: 'completed',
      isPerformOnce: true,
      fn: fn,
      perform: function(detail={}) {
        fn(detail);
      }
    }
  }

  Action.init = function() {
    return {
      name: 'init',
      isPerformOnce: true,
      perform: function(detail={}) {
        ready = true;
      }
    }
  }

  function dispatchEvent(name, detail){
    const detailJson = JSON.stringify(detail)
    const ev = new CustomEvent(name, {detail: detailJson});
    console.debug('emitEvent', name, detail);
    document.dispatchEvent(ev);
  }

  //=========================================
  // query element relative
  //=========================================


  function toSelectorStrs(selectorInput) {
    if(typeof selectorInput === 'string') {
      return [selectorInput];
    } else {
      return selectorInput;
    }
  }

  function queryFirstElem(selectorInput, contextNode) {
    const selectorStrs = toSelectorStrs(selectorInput);
    let elem = undefined;
    let selector = undefined;
    for(let i = 0; i < selectorStrs.length; i++) {
      const selectorStr = selectorStrs[i];
      const elems = queryElemsBySelector(selectorStr, contextNode);
      const first = elems[0];
      if(first) {
        elem = first;
        selector = Selector.parse(selectorStr);
        break;
      }
    }
    return [elem, selector];
  }

  function queryElemsBySelector(selectorStr, contextNode) {
    const selector = Selector.parse(selectorStr);
    if(selector) {
      if(selector.type === 'C') {
        return queryElemsByCss(selector.q, contextNode);
      } else {
        return queryElemsByXpath(selector.q, contextNode);
      }
    } else {
      return [];
    }
  }

  function queryElemsByCss(cssSelector, contextNode = document) {
    const elems = [];
    [].forEach.call(contextNode.querySelectorAll(cssSelector), function(elem) {
      elems.push(elem)
    });
    return elems;
  }

  function queryElemsByXpath(xpath, contextNode = document) {
    const xpathResult = document.evaluate(
      xpath,
      contextNode,
      null,
      XPathResult.ORDERED_NODE_ITERATOR_TYPE,
      null
    )
    const elems = [];
    let elem = xpathResult.iterateNext();
    while(elem){
      elems.push(elem);
      elem = xpathResult.iterateNext();
    }
    return elems;
  }

  /*
   * Selector $type||$q
   *   $type => C(css selector) or X(xpath)
   *   $q    => css selector Or Xpath
   */
  const Selector = {
    parse: function(input) {
      const SEPARATOR = '||';
      const selector = input.trim();
      const r = selector.split(SEPARATOR);
      switch(r.length) {
        case 1: return {type: 'C', q: r[0]};
        case 2: return {type: q[0], q: r[1]};
        default:
          console.error("Invalid Selector: " + selector);
          return undefined;
      }
    },
    getTypeName: function(selector) {
      return selector.type === 'C' ? 'css' : 'xPath';
    }
  }

  function setFormInputs(inputs) {
    listen('selecting', Action.setForm(inputs));
  }

  function onClipCompleted(callback) {
    listen('completed', Action.completed(callback));
  }

  function isTopWindow() {
    return window.parent == window;
  }

  /*
   * plan{
   *   pickElem: $SelectorInput,
   *   pickAction: 'focus' or 'confirm', or 'clip'
   *   hideElem: $SelectorInput,
   *   showElem: $SelectorInput,
   *   chAttr: [$action, ...]
   * }
   * Selector: $type||$q
   */
  function apply(plan) {
    const {pickElem, pickAction = 'focus'} = plan;
    if(isTopWindow()) {
      if(hasSelector(pickElem)) {
        const selectorInput = pickElem;
        const [pickedElem, selector] = queryFirstElem(selectorInput, document)
        if(pickedElem) {
          handleNormalAttr(plan, pickedElem);
          switch(pickAction) {
            case 'clip'    : listen('ready', Action.clipElem(selectorInput)); break;
            case 'confirm' : listen('selecting', Action.confirmElem(selectorInput)); break;
            case 'focus'   : listen('selecting', Action.focusElem(selectorInput)); break;
          }
        } else {
          // plan invalid, do nothing
          console.debug("Can't find Elem to pick");
        }
      } else {
        // plan invalid, do nothing
        console.debug("Selector invalid");
      }
    } else {
      applyGlobal(plan);
    }
  }

  /*
   * plan apply to whole document, not in selected element anymore
   * This could be used in iframe.
   * "pickElem" and "pickAction" attribute will be ignored.
   */
  function applyGlobal(plan) {
    handleNormalAttr(plan, document);
  }

  function handleNormalAttr(plan, contextNode) {
    const {hideElem, showElem, chAttr} = plan;
    if(hasSelector(hideElem)) {
      const selectorInput = hideElem;
      listen('selecting', Action.hideElem(selectorInput, contextNode));
      listen('idle', Action.undoDisplay(selectorInput, contextNode));
    }

    if(hasSelector(showElem)) {
      const selectorInput = showElem;
      listen('selecting', Action.hideElem(selectorInput, contextNode));
      listen('idle', Action.undoDisplay(selectorInput, contextNode));
    }

    if(chAttr) {
      listen('selecting', Action.chAttr(chAttr, contextNode));
      listen('idle', Action.undoChAttr(chAttr, contextNode));
    }
  }

  const hasSelector = function(it) { return it && it.length > 0; }

  /* initialize */
  listen('ready', Action.init());
  bindListener();
  console.log('MxWcTool initialized..');

  const PublicApi = {
    apply: apply,
    applyGlobal: applyGlobal,
    setFormInputs: setFormInputs,
    onClipCompleted: onClipCompleted
  }

  return PublicApi;
})();
