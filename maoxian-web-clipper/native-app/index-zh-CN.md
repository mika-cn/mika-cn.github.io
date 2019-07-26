
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

当前版本 `0.1.9`

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

### 配合 MaoXian 使用

* 需要允许浏览器允许访问本地路径。(具体查看： 扩展的设置页面 > 本地网址一节)

* 需要先让扩展知道我们使用该种方式来保存内容。(具体查看：扩展设置页面 > 保存方式一节)

* 最后重启浏览器

完成上面的步骤后，就都完成了 :D

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

有些用户更改了 `config.yaml` 里的配置，却发现扩展并没有使用最新的配置信息。这是属于正常现象，因为扩展只在浏览器启动的时候才去读 `config.yaml` 里的配置信息，所以要**运用最新的配置，需要重启浏览器** 。


## 查看运行日志 {#log}

一般情况下，当你的 ruby 版本正确，并且配置文件 config.yaml 里面的存储路径是真实存在的路径，程序会正常工作。如果你仔细走完了上面的安装流程，还是无法进行裁剪的话。 请检查日志文件：`tmp/app.log` (在安装目录下)，使用任何文本编辑器打开即可。

在进行下面检查之前，你得确保你至少用 `本地程序保存的方式` 进行了一次裁剪，并且发现，扩展工作不正常，无法走完流程。

* 如果你发现 `tmp` 目录下没有该文件，可能你 ruby 安装不正确，请确保当你运行 `ruby -v` 的时候，可以得到正确的 ruby 版本。
* 打开日志文件后，发现错误： Config Invalid, data_dir not exist: xxxxx ，则表示你配置文件 config.yaml 里面的 data_dir 条目，配置的路径，在你的系统中是不存在的。则重新配置即可。

如果日志文件不是上面这两种情况的话，可能发生 Bug 了。你可以用 `ruby -v` 检查下 ruby 版本， 若版本比 `2.4.1` 低，则重新安装更高的版本，重启浏览器，再试着裁剪一下，还是不行的话，请到 [项目 issue 页](https://github.com/mika-cn/maoxian-web-clipper/issues)，给我提个issue, 并在 issue 里粘贴上 app.log 里面的内容。





-------------------------------------------
[首页](../index-zh-CN.html)
