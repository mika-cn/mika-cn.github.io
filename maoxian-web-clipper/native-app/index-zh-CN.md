
# MaoXian web clipper Native App

## 简介

这是一个很小的本地程序，我们开发这个程序增强 Maoxian 的能力。

## 主要功能

* 下载文件 （用于绕过浏览器的下载功能，从而避免与下载管理软件发生冲突）
* 删除裁剪信息 （让我们可以删除裁剪历史的同时，删除其对应的文件）
* 刷新裁剪历史 （当你有两个裁剪源（比如：一台电脑上的两个浏览器或两台电脑上的浏览器）并且想让浏览器上的裁剪历史保持最新的时候，这一项非常有用。）


## 安装 {#install}

### 安装依赖 {#install-ruby}



该软件依赖于 Ruby， 所以我们要先安装 Ruby，请安装 `2.4.1` 以上版本。

Linux / Mac 用户， 很可能系统就自带了 ruby，请用命令 `ruby -v` 查看。罗嗦一句，如果你是命令行新手，不知道如何运行命令。没关系，每个人都是从新手过来的，不要看到命令行就害怕。请利用搜索引擎学习如何运行命令（比如：搜索 Mac 系统如何运行命令），再走下面的流程。

如果输出的是 ruby 的版本信息，则说明你的系统已经安装了 ruby, 否则请到 [ruby 官网](https://www.ruby-lang.org/en/downloads/) 进行安装


Windows  用户请到 [这里](https://rubyinstaller.org/downloads/) 下载安装包，提醒一下，这里直接下载 `WITHOUT DEVKIT` 下面的版本即可。然后安装就可以了，安装的时候确保勾选上：把 ruby 添加到 $PATH 复选框。


### 下载软件包 {#download-package}

请根据你的系统信息和浏览器类型， 下载对应的软件包

当前版本 `0.2.0`

* Linux
  - [native-app-chrome.zip](files/maoxian-web-clipper-native-linux-chrome.zip)
  - [native-app-chromium.zip](files/maoxian-web-clipper-native-linux-chromium.zip)
  - [native-app-firefox.zip](files/maoxian-web-clipper-native-linux-firefox.zip)

* Mac
  - [native-app-chrome.zip](files/maoxian-web-clipper-native-osx-chrome.zip)
  - [native-app-chromium.zip](files/maoxian-web-clipper-native-osx-chromium.zip)
  - [native-app-firefox.zip](files/maoxian-web-clipper-native-osx-firefox.zip)

* Windows
  - [native-app-chrome.zip](files/maoxian-web-clipper-native-windows-chrome.zip)
  - [native-app-chromium.zip](files/maoxian-web-clipper-native-windows-chromium.zip)
  - [native-app-firefox.zip](files/maoxian-web-clipper-native-windows-firefox.zip)

### 解压软件包 {#extract-package}

Linux 或者 Mac

```shell
unzip maoxian-web-clipper-native-linux-chrome.zip -d maoxian-web-clipper-native
```


Windows

```shell
额，使用任何你喜欢的解压软件，把它解压到某个文件夹（由于是直接打包的文件，没有打包根文件夹）, :D
```


### 安装软件 {#install-native-app}

* Linux 或 Mac  直接运行 `./install.sh` 进行安装
* 在 Windows 上，直接双击 `install.bat` （注意：你点击后，会发现有个命令窗口跳出来，闪了一下就关闭了，这是正常的，程序已经安装成功了。别怀疑你被安装了病毒哦 :D ）


### 配置下载路径 {#configure-download-path}

在开始使用之前，我们需要先配置，下载路径，也就是裁剪下来的文件存储的目录（等同于浏览器的下载目录）

编辑 `config.yaml` ， （随便用一个文本编辑器就可编辑）
如果你是在 Windows 上的话，别用记事本打开，找一个能正确处理换行符的编辑器，比如 `notepad++`

**注意： 配置的下载路径必须真实存在，否则程序会运行启动失败**

Linux / Mac 例子

```yaml
# config.yaml
environment: 'production'
data_dir: '/home/jack/clippings'
```

windows 例子

```yaml
# config.yaml
environment: 'production'
data_dir: 'e:\\\\jack\clippings'
```

### 查看状态并启用

请重启你的浏览器后，到 **扩展设置页面 > 本地程序** 小节查看状态，若显示的是 「本地程序」的版本号，则 MaoXian 扩展已经和 「本地程序」对接上了。如果显示的是错误信息，请查看下方 [常见错误](#problems) 小节。确保对接上后，请勾选下方的 **启用该处理程序** 。

在两者对接上，并且「本地程序」已启用后。就可以使用「本地程序」了，比如到 **扩展设置页面 > 存储设置** 选用「本地程序」来下载裁剪结果。

为了更方便地预览裁剪下来的文件，我们强烈建议你 **允许 MaoXian 访问本地网址** (具体查看： **扩展设置页面 > 基础设置 > 本地网址** 一节)


## 卸载软件 {#uninstall}

Linux 或 Mac  直接运行 `./uninstall.sh` 脚本，再删除掉整个程序目录。


在 Windows 上，直接双击 `uninstall.bat`，再删除掉整个程序目录。

## 更新软件 {#upgrade}

1. 先备份 Native App 目录下的 `config.yaml` (复制到别的地方)
2. [卸载 Native App](#uninstall)
3. 在本页面[下载最新版本](#download-package)，[再解压软件包](#extract-package)
4. 用你备份的 `config.yaml` 覆盖解压出来的文件夹的 config.yaml.
5. [安装新的程序](#install-native-app)

## 运用最新的配置 {#apply-config}

有些用户更改了 config.yaml 里的配置，却发现扩展并没有使用最新的配置信息。这是属于正常现象，因为扩展只在浏览器启动的时候才去读 config.yaml 里的配置信息，所以**要运用最新的配置，需要重启浏览器** 。


## 常见问题 {#problems}

一般情况下，当你的 ruby 版本是正确的，并且配置文件 config.yaml 里面的存储路径是真实存在的路径，「本地程序」会和 MaoXian 对接成功。如果你仔细走完了上面的安装流程，还是无法对接上的话。 请检查日志文件：tmp/app.log (在安装目录下)，使用任何文本编辑器打开即可。

在进行下面检查之前，你得确保你至少到过 **扩展设置页面 > 本地程序** 页面查看过状态信息，并且其显示的是某个错误信息。


### 1. 浏览器找不到 ruby

如果你发现 tmp 目录下没有该文件 (app.log)，则说明浏览器找不到 ruby 。可能原因如下：


1) ruby 安装不正确。

请确保当你运行 `ruby -v` 的时候，可以得到正确的 ruby 版本。如若不是，则重新安装即可。


2) 虽然 ruby 安装成功，但是浏览器无法找到它。

这种情况一般发生在 Mac 或 Linux 用户身上，如果你采用的是源码安装的方式，你可能会碰到此问题。

**如何确认**

可以通过从命令行启动浏览器的方式来确认，比如运行 `chromium-browser` 命令，然后再到 **扩展设置页面 > 本地程序** 页面，再查看命令行的输出，可以看到类似 "/usr/bin/env: ‘ruby’: No such file or directory" 这样的错误信息。

**如何解决**

把 main.rb (安装目录下) 第一行的 "/usr/bin/env ruby" 改成 ruby 的绝对路径，比如 "/home/jack/ruby-2.5.0/bin/ruby"。 或者是创建一个软链接到 /usr/bin 目录下，比如： `ln -s /home/jack/ruby-2.5.0/bin/ruby /usr/bin/ruby`。

### 2. 配置不正确

如果你打开日志文件后，发现错误： "Config Invalid, data_dir not exist: xxxxx" ，则表示你配置文件 config.yaml 里面的 data_dir 配置的路径，在你的系统中是不存在的。则重新配置即可。

### 3. 还是不行？

可能发生 Bug 了。你可以用 `ruby -v` 检查下 ruby 版本， 若版本比 `2.4.1` 低，则重新安装更高的版本，重启浏览器，再试一下，还是不行的话，请到 [项目 issue 页](https://github.com/mika-cn/maoxian-web-clipper/issues)，给开发者提个issue, 并在 issue 里粘贴上 app.log 里面的内容。



-------------------------------------------
[首页](../index-zh-CN.html)
