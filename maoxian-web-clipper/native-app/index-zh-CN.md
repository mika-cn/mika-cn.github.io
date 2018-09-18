
# MaoXian web clipper Native App

## 简介

这是一个配合 Maoxian Web clipper 的本地软件.

用过安装这个软件，我们可以绕过使用浏览器的下载功能，从而避免和下载管理插件发生冲突 :)

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

* [maoxian-web-clipper-native-app-linux-chrome.zip](files/maoxian-web-clipper-native-linux-chrome.zip)
* [maoxian-web-clipper-native-app-linux-chromium.zip](files/maoxian-web-clipper-native-linux-chromium.zip)
* [maoxian-web-clipper-native-app-linux-firefox.zip](files/maoxian-web-clipper-native-linux-firefox.zip)
* [maoxian-web-clipper-native-app-osx-chrome.zip](files/maoxian-web-clipper-native-osx-chrome.zip)
* [maoxian-web-clipper-native-app-osx-chromium.zip](files/maoxian-web-clipper-native-osx-chromium.zip)
* [maoxian-web-clipper-native-app-osx-firefox.zip](files/maoxian-web-clipper-native-osx-firefox.zip)
* [maoxian-web-clipper-native-app-windows-chrome.zip](files/maoxian-web-clipper-native-windows-chrome.zip)
* [maoxian-web-clipper-native-app-windows-chromium.zip](files/maoxian-web-clipper-native-windows-chromium.zip)
* [maoxian-web-clipper-native-app-windows-firefox.zip](files/maoxian-web-clipper-native-windows-firefox.zip)

### 解压软件包

Linux 或者 Mac

```
unzip maoxian-web-clipper-native-linux-chrome.zip -d maoxian-web-clipper-native
```

Windows

```
额，使用任何你喜欢的解压软件，把它解压到某个文件夹（由于是直接打包的文件，没有打包根文件夹）, :D
```


### 配置下载路径

在安装之前，我们先配置一下，下载路径，也就是裁剪下来的文件存储的目录（等同于浏览器的下载目录）

编辑 `config.yaml` ， （随便用一个文本编辑器就可编辑）
如果你是在 Windows 上的话，别用记事本打开，找一个能正确处理换行符的编辑器，比如 `notepad++`

linux 例子

```
# config.yaml
environment: 'production'
data_dir: '/home/jack/clippings'
```

windows 例子

```
# config.yaml
environment: 'production'
data_dir: 'c:\\jack\clippings'
```

### 安装软件

Linux 或 Mac  直接运行 `install.sh` 脚本即可

```
./install.sh
```

在 Windows 上，直接双击 `install.bat`


