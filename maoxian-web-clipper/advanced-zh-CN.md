
# MaoXian 与第三方的交互

**注意** 只有在 `0.1.14` 以上版本才有效。

为了更方便地进行裁剪，`MaoXian` 提供了一些与第三方脚本交互的方式。并且我们写了一个 js 库来来简化一些操作。

下面以 `userScript` 为例子介绍一下：


## 隐藏不想要裁剪的元素

`MaoXian` 会在你点击裁剪的时候，发送事件，告知 `userScript` 扩展已经进入裁剪模式了。此时 `userScript` 就可以对网页上的元素进行操作，比如隐藏掉不想要裁剪的元素（按钮、头像等等）

例:

```javascript
// ==UserScript==
// @name         example
// @namespace    example@mx-wc.oyd
// @version      0.1
// @description  your description
// @author       you
// @require      https://mika-cn.github.io/maoxian-web-clipper/mx-wc-tool-v0.0.2.js
// @include     *
// @grant        none
// ==/UserScript==

(function(){
  const rules = [
    'C||a.example.com||/blog/||.nav-btns',
    'C||a.example.com||/blog/||.site-header',
    'X||b.example.com||/blog/||//article//comments'
  ];

  const hideCmd = MxWc.newHideCmd();
  hideCmd.init(rules);
})();

```

目前 mx-wc-tool 这个脚本文件，支持的 rule 格式为: `$type||$domain||$path||$q`

各部分解释如下：

```text
$type   : C 代表 CSS, X 代表 xPath.
$domain : 规则应用的域名( 支持通配符 *, *.example.org 或者直接 *)
$path   : 规则应用的网址路径，(目前使用前缀匹配, 即 /post/ 匹配任何以 /post/ 打头的路径)
$q      : 选择器(CSS selector 或者 xPath)
```

## 预选中某个元素

`userScript` 可以在 `MaoXian` 进入裁剪模式的时候，发送消息过去，告知预选中某个元素。

例:

```javascript
// 注意：这里省略了 UserScript 的声明部分

(function(){

  // 更方便的写法
  const rules = (`
    C||a.example.com||/blog/||article
    C||a.example.com||/news/||.news
    X||b.example.com||/blog/||//body//article
  `).split("\n")

  const focusCmd = MxWc.newFocusCmd();
  focusCmd.init(rules);

/*
 * 或者使用 ConfirmCmd
 */
/*
  const confirmCmd = MxWc.newConfirmCmd();
  confirmCmd.init(rules);
 */
})();
```

上面例子中 `FocusCmd` 和 `ConfirmCmd` 的区别是 `ConfirmCmd` 不仅选中元素，还做了确认（直接到达输入表单信息那一步）。


下面这个例子，会在当前网页只有一个 article 标签的情况下，会选中这个 article 标签并且确认。

```javascript
// 注意：这里省略了 UserScript 的声明部分

(function() {
  var articles = document.querySelectorAll('article');
  if(articles.length === 1){
    const rules = ["C||*||/||article"];
    const confirmCmd = MxWc.newConfirmCmd();
    confirmCmd.init(rules);
  } else {
    // other rules
  }
})();
```

## 自动裁剪

这种情况应该比较少使用到，当你要裁剪某个站点下的一批内容时（比如某些文章），可以用这个功能。这样你要做的就只是配置好 `userScript`, 然后依次点开你要裁剪的网页就可以了（`MaoXian` 会在网页加载完成时，就开始裁剪）

这个功能一般是需要时才使用，所以建议, 使用 `userScript` 单独放一个脚本，必要时开启，用完关闭，会方便一些。

例:

```javascript
// 注意：这里省略了 UserScript 的声明部分

(function(){

  // 大部分情况下这里只需要一条规则
  const rules = ["C||a.example.com||/blog/||article"];

  // 这是裁剪时候填写到表单的三个信息
  const formInputs = {
    title: "auto Clip test",       //可选，默认使用网页的标题
    category: "test/user-script",  //即保存的子目录
    tagStr: "test, auto-clip"      //使用空格或逗号分隔多个标签
  }

  const clipCmd = MxWc.newClipCmd(formInputs);
  focusCmd.init(rules);

})();
```

