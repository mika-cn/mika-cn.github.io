

# 通过扩展文件安装 MaoXian Web Clipper

## Firefox

* [maoxian_web_clipper-0.1.36-an+fx.xpi](extension/maoxian_web_clipper-0.1.36-an+fx.xpi)

checksum

```
17bdd93dc9803a411aa3c567f2b45dd4 [MD5]
275e9b4f1f66aa0f95d7b3261708bc43bd66aed10726e4a9e1e49ccc01e62959 [SHA256]
```

## Chrome / Chromium (谷歌浏览器)

由于这堵邪恶的墙，有些朋友无法访问到谷歌商店，本节介绍了在这种情况下如何 `安装` 和 `更新`。

## 安装

### 通过 crx 文件安装。

#### 1. 下载 crx 文件，选择最新版以获得最好的体验。
* [maoxian-web-clipper-chrome-0.1.36.crx](extension/maoxian-web-clipper-chrome-0.1.36.crx)

下载完成后，你可通过下方的 checksum 检查，你下载的文件的完整性（避免下载未完全和被恶意修改）。

checksum

```
583e38a9bfdf0511d26d2f965727a0c8 [MD5]
daa3bb26ad8abcb862992c4480886042a1bb5b95eb049bfe176fa93129031c6b [SHA256]
```


#### 2. 打开Chrome 扩展页面(在地址栏直接输入): `about:extensions`

#### 3. 打开开发者模式的开关。

#### 4. 把已下载的 crx 文件，拖拽到 Chrome 扩展页面
注意: 如果这一步失败，保证开发者模式打开的情况下，重启浏览器，再重新拖拽。


### 通过 zip 包安装

这一小节，是为了避免有一天邪恶的墙，全面封杀对外链接，导致开发者根本无法更新。所以提供 zip 包安装，zip 包和 crx 文件的功能完全一样，并没有什么不同，请放心使用。

#### 1. 下载 zip 包

* [maoxian-web-clipper-chrome-0.1.36.zip](extension/maoxian-web-clipper-chrome-0.1.36.zip)

checksum

```
faa044a5afdcb7bd1c2a410837b62bb0 [MD5]
5d8ace64bcbf3e70a44238e4ca876f6c5d66a2a73ccfb2471118b9ec0730aab3 [SHA256]
```

#### 2. 解压 zip 包

注意： 由于打包的时候，是直接打包的程序文件，没有打包目录，所以先建好一个目录，再把 zip 包扔里面，再进行解压。

命令行用户请直接

```
unzip maoxian-web-clipper-chrome-x.x.x.zip -d maoxian-web-clipper
```

#### 3. 打开Chrome 扩展页面(在地址栏直接输入): `about:extensions`

#### 4. 打开开发者模式的开关。

#### 5. 点击「加载已解压文件夹」按钮

我们推荐你使用 Chromium ，Chrome 对于该种方式安装的扩展，老是提示你不安全。当然，这是一种安全检查机制，但这会很烦人。

## 更新

由于墙的原因，在安装完本插件后， `Chrome` 无法访问谷歌商店进行更新，这种情况下，更新流程如下：

### 1. 获取更新通知

* 订阅[RSS源](feed.xml)

开发者会在完成更新后，更新 RSS 源，这样你就可以知道插件更新啦。

### 2. 卸载老扩展

### 3. 到本页面安装最新的扩展

## 写在最后


如果上述方法失效了，[请建个Issue 给我](https://github.com/mika-cn/maoxian-web-clipper/issues)。（也许谷歌越来越霸道了）

------------------------------------------------

[首页](index-zh-CN.html)
