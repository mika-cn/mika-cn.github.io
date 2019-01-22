
# MaoXian 与第三方的交互

为了更方便地进行裁剪，MaoXian 提供了一些与第三方脚本交互的方式。

目前利用这个交互功能，可以做到：

* [隐藏不想要裁剪的元素](#hide-unwant-elems)
* [预选中某个要裁剪的元素](#choose-the-elem-to-clip)
* [自动裁剪](#auto-clip)

## 流程简介

* 早期的扩展不支持该功能，请确保 MaoXian 版本为 **V0.1.25 以上**
* 安装 userScript 浏览器扩展，常见的有 Greasemonkey、 Tampermonkey， 选一个适用你浏览器的安装即可。
* 编写 userScript（需要你会 javascript 并且对 userScript有所了解）或 [安装其他用户分享的脚本](https://github.com/mika-cn/maoxian-web-clipper/tree/master/useful-res/README.md)

## 版本信息

当前 mx-wc-tool.js 版本为 `V0.0.5` ，你应该始终使用最新的版本。


## 编写脚本

### 隐藏不想要裁剪的元素 {#hide-unwant-elems}

`MaoXian` 会在你点击裁剪的时候，发送事件，告知 `userScript` 扩展已经进入裁剪模式了。此时 `userScript` 就可以对网页上的元素进行操作，比如隐藏掉不想要裁剪的元素（按钮、头像等等）

例:

```javascript
// ==UserScript==
// @name         example
// @namespace    example@MaoXian.OwnYourData
// @version      0.1
// @description  your description
// @author       you
// @require      https://mika-cn.github.io/maoxian-web-clipper/mx-wc-tool-v0.0.5.js
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
$path   : 规则应用的网址路径，(目前使用包含匹配, 即 /post/ 匹配任何包含 /post/ 的路径)
$q      : 选择器(CSS selector 或者 xPath)
```
即 MaoXian 会拿当前页面的网址和规则里的 `$domain` 和 `$path`进行匹配，若当前页面符合规则，就根据 `$type` 和 `$q` 找到要操作的元素, 再执行相关的操作。

rule 也可以是下面的格式（较简短）

* `$domain||$q` 等同于 `C||$domain||/||$q`
* `$domain||$path||$q` 等同于 `C||$domain||$path||$q`

### 预选中某个要裁剪的元素 {#choose-the-elem-to-clip}

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

**注意**： `FocusCmd` 和 `ConfirmCmd` 会根据第一条匹配到的规则，操作找到的第一个元素，这和上面的 `HideCmd` 有所不同。`HideCmd` 会找匹配所有能匹配到的规则，操作所有找到的元素。


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

### 自动裁剪 {#auto-clip}

这种情况应该比较少使用到，当你要裁剪某个站点下的一批内容时（比如某些文章），可以用这个功能。这样你要做的就只是配置好 `userScript`, 然后依次点开你要裁剪的网页就可以了（`MaoXian` 会在网页加载完成时，就开始裁剪）

这个功能一般是需要时才使用，所以建议, 使用 `userScript` 单独放一个脚本，必要时开启，用完关闭，会方便一些。

例:

```javascript
// 注意：这里省略了 UserScript 的声明部分

(function(){

  // 这里只需要一条规则
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
-------------------------------------------

[首页](index-zh-CN.html)
