
# MaoXian web clipper Native App

## 简介

这是一个很小的本地程序，我们开发这个程序来为 Maoxian Web Clipper 提供下载功能。在你设定好这款程序之后，我们就可以绕过浏览器的下载功能，从而避免与下载管理软件发生冲突。:)


## 安装

该软件依赖于 Ruby， 所以我们要先安装 Ruby

Linux / Mac 用户， 很可能系统就自带了 ruby，请用以下命令查看

```
ruby -v
```
如果输出的是 ruby 的版本信息，则说明你的系统已经安装了 ruby, 否则请到 [ruby 官网](https://www.ruby-lang.org/en/downloads/) 进行安装


Windows  用户请到 [这里](https://rubyinstaller.org/downloads/) 下载安装包，提醒一下，这里直接下载 `WITHOUT DEVKIT` 下面的版本即可。然后安装就可以了


### 下载软件包

请根据你的系统信息和浏览器类型， 下载对应的软件包

当前版本 `0.1.1`

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

### 解压软件包

Linux 或者 Mac

```
unzip maoxian-web-clipper-native-linux-chrome.zip -d maoxian-web-clipper-native
```

Windows

```
额，使用任何你喜欢的解压软件，把它解压到某个文件夹（由于是直接打包的文件，没有打包根文件夹）, :D
```


### 安装软件

Linux 或 Mac  直接运行 `install.sh` 脚本即可

```
./install.sh
```

在 Windows 上，直接双击 `install.bat`


### 配置下载路径

在开始使用之前，我们需要先配置，下载路径，也就是裁剪下来的文件存储的目录（等同于浏览器的下载目录）

编辑 `config.yaml` ， （随便用一个文本编辑器就可编辑）
如果你是在 Windows 上的话，别用记事本打开，找一个能正确处理换行符的编辑器，比如 `notepad++`

**注意： 配置的下载路径必须真实存在**

Linux 例子

```
# config.yaml
environment: 'production'
data_dir: '/home/jack/clippings'
```

windows 例子

```
# config.yaml
environment: 'production'
data_dir: 'e:\\\\jack\clippings'
```

## 配合 MaoXian Web Clipper 使用

* 需要允许浏览器允许访问本地路径。(具体查看： 扩展的设置页面 > 本地网址一节)

* 需要先让扩展知道我们使用该种方式来保存内容。(具体查看：扩展设置页面 > 保存方式一节)

完成上面两步后，就都完成了 :D


-------------------------------------------
[首页](../index-zh-CN.html)
