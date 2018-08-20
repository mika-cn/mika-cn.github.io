
# MaoXian Web Clipper 常见问题

* [改变默认的下载路径](#change-default-download-path)
* [允许访问本地网址](#allow-access-file-urls)

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
本节介绍了如何让浏览器允许 `MaoXian Web Clipper` 访问本地网址(file://打头的网址)

从 `MaoXian Web Clipper` 的设置页面，在“本地网址” 一节中找到`扩展标识` 信息。

不同的浏览器拿到的 `扩展标识`不同，如下:

* Firefox => moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7
* Chrome => chrome-extension://612ab18c-c29e-4211-bd50-3f208d227db7

### Chrome

以上面的扩展标识为例子，只要在地址栏输入`chrome://extension/?id=612ab18c-c29e-4211-bd50-3f208d227db7`, 回车。

找到 `允许访问本地文件/网址` 这一选项, 启用它就可以了。

### Firefox
FireFox 默认没有提供一个页面可以设置这个选项，但可以通过修改浏览器的配置项，来达到目地。

具体方法如下：

I: 在地址栏输入 `about:config` 并回车, 进入配置项页面 (可能会有一个警告页面，直接点击按钮进入就好了）。

II: 配置以下三项

| 条目名称 | 值 | 提醒 |
| -------- | -------- | -------- |
| capability.policy.policynames | localfilelinks | - |
| capability.policy.localfilelinks.sites | moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7 | 这个值，你应该使用自己拿到的 `扩展标识` |
| capability.policy.localfilelinks.checkloaduri.enabled | allAccess | - |

这样操作:

复制条目名称，粘帖到搜索栏进行搜索, 如果搜索到，就双击修改它的值就行了。

如果没有搜索到，就鼠标右键 > 新建 > 字符串(String)， 把`条目名称`和`值`依次粘帖进去即可。

III: 回到 `MaoXian Web Clipper` 的设置页面，把“本地网址” 一节中的复选框打上勾。

-------------------------------------------
[首页](index-zh-CN.html)
