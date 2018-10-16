
# MaoXian Web Clipper Change Log
------------------------------------------------------------

## v0.1.12

**Bug修复**

* 修复选中的是 iframe 时, 裁剪不正确的Bug
* 修复有些网站图片下载不下来的问题（referer头问题）

**功能**

* 新增加欢迎页面。
* 支持设置是否下载字体文件
* 支持把 data URL 下载为文件，以简化 index 文件里的URL。
* 加入 native app 版本检测功能, 以提示用户安装新版本的  Native-app
* 支持配置裁剪目录的格式
* 历史页面优化，记住搜索词
* 设置页面文本输入框加入保存提示
* 重置历史时，如果裁剪目录发生变更，导入时采用变更后的目录。
* 其他一些样式优化。


## v0.1.11

**Bug修复**

* 调整 markdown 的 header 格式

## v0.1.10

**Bug修复**

* 修复一处不稳定的bug

## v0.1.9

**Bug修复**

* 修复删除隐藏节点代码的bug

## v0.1.8

**功能**

* 支持设置资源（图片，字体等）的存放路径
* 支持通过安装在本地的程序，来处理裁剪下来的信息（用于解决：和下载扩展冲突的问题）

------------------------------------------------------------

## v0.1.7

**功能**

* 裁剪成 Markdown 时，处理 gist 代码，以便其正确转成 Markdown 的 code 格式
* 优化选择元素时逻辑。使避免在同宽同高的元素间选择。
* 裁剪时，不再裁剪隐藏了的元素。
* Markdown 格式下，数学公式裁剪的优化，包含 mathml 和 mathjax

------------------------------------------------------------

## v0.1.6

**Bug修复**

* 修复 LockService bug 导致的字体文件下载不全的情况
* 修复某些样式文件路径引用不对的问题

**功能**

* 把扩展界面放到 iframe 上，使其不受当前网页样式和脚本的影响
* 支持用标题作为保存目录的名字


------------------------------------------------------------

## v0.1.5

**Bug修复**

* 修复 chrome 下，扩展详情页面，不显示 "允许访问本地网址" 复选框
* 当访问浏览器禁止的页面时(addons.mozilla.org, chrome.google.com 域名下的页面), 隐藏裁剪入口。


------------------------------------------------------------

## v0.1.4

**Feature**

* Support clip iframe element
* Make clip URL clickable in history page
* Allow save title as filename
* Make clipping information optional.

**功能**

* 支持裁剪 iframe 元素(裁剪内容)。
* 优化裁剪历史页面，使可直接点击查看(issue: #1)
* 允许设置保存的文件名为输入的标题(issue: #2)
* 可设置不保存「裁剪信息」

------------------------------------------------------------

## v0.1.3

**BugFixed**

* Prefix iframe url
* Fix prefix url bug
* Fix clipping style and width

**Bug修复**

* 补全 iframe 元素的网址
* 修复补全网址bug
* 修复裁剪结果的样式和宽度

------------------------------------------------------------

## v0.1.2

**BugFixed**

* Fix windows: downloaded event trigger bug.


**Bug修复**

* 修复 windows 系统下，下载完成事件触发bug

------------------------------------------------------------

## v0.1.1

**BugFixed**

* Don't download touch.mxwc when extension run.
* Fix the situation that user switch tab when downloading.

**Bug修复**

* 移除，当插件运行时，通过下载 touch.mxwc 来取得下载路径这个行为。
* 修复当裁剪过程中切换到别的Tab，切换回来时，一直显示下载中的问题。

------------------------------------------------------------

## v0.1.0

**BugFixed**

* MacOs: `command + c` conflict with hotkey `c`.

**Bug修复**

* Mac系统下，`command + c` 和激活裁剪的热键 `c`互相冲突

------------------------------------------------------------

## v0.0.9

**Feature**

* Download image when clip as markdown.

**功能**

* 裁剪为Markdown 时，也下载图片到本地。


------------------------------------------------------------
[Home](index.html)

[首页](index-zh-CN.html)
