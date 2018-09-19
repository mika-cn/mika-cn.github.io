
# MaoXian Web Clipper 常见问题

* [点击了裁剪，没有反应](#clip-menu-not-work)
* [裁剪流程停在下载中就没反应了](#crash-on-clipping)
* [改变默认的下载路径](#change-default-download-path)
* [允许访问本地网址](#allow-access-file-urls)
* [反馈新问题](#feedback)

-------------------------------------------

## 点击了裁剪，没有反应 {#clip-menu-not-work}

请依次检查以下情况:

1. `chrome.google.com` 和 `addons.mozilla.org` 域名下的网页都不能裁剪，这是正常的(浏览器内部的限制)
2. 如果你刚安装完扩展，得刷新网页后才能裁剪
3. 目前 `MaoXian Web Clipper` 只兼容 `Chrome` 和 `Firefox`, 其他浏览器不保证能正常工作

-------------------------------------------

## 裁剪流程停在下载中就没反应了 {#crash-on-clipping}

发生这种情况，可能是与其他的扩展冲突了，请尝试暂时停用其他有下载功能的扩展（比如  chrono)， 如果你无法确定哪些扩展是有下载功能的，那么可暂时只启用`MaoXian Web Clipper` 并停用其他扩展，再次尝试下，以判断是否是冲突的情况。

发现有的朋友在其他浏览器上使用本扩展(比如: vivaldi), 有些浏览器会开发自己的下载管理功能，也会与 `MaoXian Web Clipper` 产生冲突

安装 [Native App](native-app/index-zh-CN.html) 可以解决这个问题

-------------------------------------------

## 改变默认的下载路径 {#change-default-download-path}

由于安全问题，浏览器扩展无法修改你的下载路径。但是你可以通过创建软链接(符号链接)，来达到你的目地。

### Linux/Mac

假设:

* /home/jack/Downloads     [是你的下载路径]
* /home/jack/Dropbox/clips [是你的目标路径]

运行命令: `ln -s /home/jack/Dropbox/clips /home/jack/Downloads/mx-wc`

### Windows

假设:

* C:\Users\jack\Downloads      [是你的下载路径]
* C:\Users\jack\OneDrive\clips [是你的目标路径]

把下面的命令保存成 mklink.bat 文件，再右击该文件，以管理员方式运行。

命令: `mklink \D C:\Users\jack\Downloads\mx-wc C:\Users\jack\OneDrive\clips`

-------------------------------------------

## 允许访问本地网址 {#allow-access-file-urls}

当你允许本扩展访问本地网址后，你就可以在裁剪历史页面，点击后直接就可查看你的裁剪信息。(使用体验会更好一些)

本节介绍了如何让浏览器允许 `MaoXian Web Clipper` 访问本地网址(file://打头的网址)

从 `MaoXian Web Clipper` 的设置页面，在“本地网址” 一节中找到`扩展标识` 信息。

不同的浏览器拿到的 `扩展标识`不同，如下:

* Firefox => moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7
* Chrome => chrome-extension://612ab18c-c29e-4211-bd50-3f208d227db7

### Chrome

以上面的扩展标识为例子，只要在地址栏输入`chrome://extensions/?id=612ab18c-c29e-4211-bd50-3f208d227db7`, 回车。

找到 `允许访问本地文件/网址` 这一选项, 启用它就可以了。

### Firefox
FireFox 默认没有提供一个页面可以设置这个选项，但可以通过修改浏览器的配置项，来达到目地。

具体方法如下：

I: 在地址栏输入 `about:config` 并回车, 进入配置项页面 (可能会有一个警告页面，直接点击按钮进入就好了）。

II: 配置以下三项

| 条目名称 | 值 | 提醒 |
| -------- | -------- | -------- |
| capability.policy.policynames | localfilelinks | - |
| capability.policy.localfilelinks.sites | moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7 | 这个值，你应该使用自己拿到的 `扩展标识`, 如果你允许多个扩展的话，这里用空格隔开 |
| capability.policy.localfilelinks.checkloaduri.enabled | allAccess | - |

这样操作:

复制条目名称，粘帖到搜索栏进行搜索, 如果搜索到，就双击修改它的值就行了。

如果没有搜索到，就鼠标右键 > 新建 > 字符串(String)， 把`条目名称`和`值`依次粘帖进去即可。

III: 回到 `MaoXian Web Clipper` 的设置页面，把“本地网址” 一节中的复选框打上勾。

-------------------------------------------

## 反馈新问题或建议 {#feedback}

如果上诉的解决方案都无法解决你的问题，把你遇到的问题反映到[项目issue里](https://github.com/mika-cn/maoxian-web-clipper/issues)，开发人员会进行跟进。

在描述你遇到的问题时候，请尽可能详细地提供信息。

比如： 点击哪里用不了，操作系统信息(windows, Linux, Mac...), Chrome 版本，当前网址等有助于定位问题的信息。


PS： 如果你没用过 `github`， 并且不想注册帐号的话，可以发邮件我 [laoquans@gmail.com](mailto:laoquans@gmail.com)。我来帮你建 issue :)


-------------------------------------------

[首页](index-zh-CN.html)
