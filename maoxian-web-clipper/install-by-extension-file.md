

# 通过扩展文件安装和更新 MaoXian Web Clipper

## 安装

**说明**: 下方提供的以 `checksum.txt` 为对应文件的校验和，可用于检查文件的完整性 （避免下载未完全和被恶意修改）。

命令行用户可通过下方命令，计算出校验和，再和 `checksum.txt` 里面的内容进行比对。

```shell
# 通过 md5 算法计算校验和
$ md5sum maoxian-web-clipper-x.x.x.crx

# 通过 sha256 算法计算校验和
$ sha256sum maoxian-web-clipper-x.x.x.crx

# 通过 sha512 算法计算校验和
$ sha512sum maoxian-web-clipper-x.x.x.crx

```

### 通过 xpi 文件安装 （Firefox / 火狐）

虽然现在火狐的扩展网站（AMO），还可以访问。但这个正腐什么丧心病狂的事情都做得出来，以防万一，提供下方 xpi 文件。

（1）下载 xpi 文件

* [maoxian_web_clipper-0.1.46-an+fx.xpi](extension/0.1.46/maoxian_web_clipper-0.1.46-an+fx.xpi)
* [maoxian_web_clipper-0.1.46-an+fx.xpi.checksum.txt](extension/0.1.46/maoxian_web_clipper-0.1.46-an+fx.xpi.checksum.txt)

（2）打开 Firefox 扩展页面（在地址栏直接输入：`about:addons`）

（3）点击小齿轮 > 从文件安装（Install Add-on From File)，再选择刚才下载下来的 xpi 文件即可。


### 通过 crx 文件安装 （Chrome / Chromium / 谷歌浏览器）

由于这堵万恶的墙，无法翻墙（科学上网、正当上网）的朋友是无法访问谷歌商店进行安装。于此，提供下方 crx 文件。

（1）下载 crx 文件

* [maoxian-web-clipper-chrome-0.1.44.crx](extension/0.1.44/maoxian-web-clipper-chrome-0.1.44.crx)
* [maoxian-web-clipper-chrome-0.1.44.crx.checksum.txt](extension/0.1.44/maoxian-web-clipper-chrome-0.1.44.crx.checksum.txt)

（2）打开Chrome 扩展页面（在地址栏直接输入： `about:extensions`）

（3）打开开发者模式的开关。

（4）把已下载的 crx 文件，拖拽到 Chrome 扩展页面

注意: 如果这一步失败，保证开发者模式打开的情况下，重启浏览器，再重新拖拽。


### 通过 zip 包安装

这一小节，是为了避免有一天邪恶的墙，全面封杀对外链接，导致开发者根本无法更新。所以提供 zip 包安装，zip 包和 crx 文件的功能完全一样，并没有什么不同，请放心使用。

（1）下载 zip 包

* [maoxian-web-clipper-chrome-0.1.46.zip](extension/0.1.46/maoxian-web-clipper-chrome-0.1.46.zip)
* [maoxian-web-clipper-chrome-0.1.46.zip.checksum.txt](extension/0.1.46/maoxian-web-clipper-chrome-0.1.46.zip.checksum.txt)

（2）解压 zip 包

注意： 由于打包的时候，是直接打包的程序文件，没有打包目录，所以先建好一个目录，再把 zip 包扔里面，再进行解压。

命令行用户请直接

```
$ unzip maoxian-web-clipper-chrome-x.x.x.zip -d maoxian-web-clipper
```

（3）打开Chrome 扩展页面（在地址栏直接输入： `about:extensions`）

（4）打开开发者模式的开关。

（5）点击「加载已解压文件夹」按钮

我们推荐你使用 Chromium ，Chrome 对于该种方式安装的扩展，老是提示你不安全。当然，这是一种安全检查机制，但这会很烦人。

## 更新

由于墙的原因，在安装完本插件后， `Chrome` 无法访问谷歌商店进行更新，这种情况下，更新流程如下：

（1）获取更新通知

* 订阅[RSS源](feed.xml)

开发者会在完成更新后，更新 RSS 源，这样你就可以知道插件更新啦。

（2）卸载老扩展

（3）到本页面安装最新的扩展

## 写在最后

如果上述方法失效了，[请建个Issue 给开发者](https://github.com/mika-cn/maoxian-web-clipper/issues)。（也许谷歌越来越霸道了）

------------------------------------------------

[首页](index-zh-CN.html)
