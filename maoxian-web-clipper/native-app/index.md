
# MaoXian web clipper Native App

## Intro

This is a little application. We develope it to provide download function for MaoXian Web Clipper. After Setting up this application, We can avoid conflict with your download manage extension. :)

## Installation

ruby is required, install it first.

[Install Ruby](https://www.ruby-lang.org/en/downloads/)


### Download

Download software according to your OS and browser type.

Current Version `0.1.1`

* Linux
  - [native-app-chrome.zip](files/maoxian-web-clipper-native-linux-chrome.zip)
  - [native-app-chromium.zip](files/maoxian-web-clipper-native-linux-chromium.zip)
  - [native-app-firefox.zip](files/maoxian-web-clipper-native-linux-firefox.zip)

* Mac
  - [native-app-chrome.zip](files/maoxian-web-clipper-native-osx-chrome.zip)
  - [native-app-chromium.zip](files/maoxian-web-clipper-native-osx-chromium.zip)
  - [native-app-firefox.zip](files/maoxian-web-clipper-native-osx-firefox.zip)

* windows
  - [native-app-chrome.zip](files/maoxian-web-clipper-native-windows-chrome.zip)
  - [native-app-chromium.zip](files/maoxian-web-clipper-native-windows-chromium.zip)
  - [native-app-firefox.zip](files/maoxian-web-clipper-native-windows-firefox.zip)

### Extract zip file

in linux or mac

```
unzip maoxian-web-clipper-native-linux-chrome.zip -d maoxian-web-clipper-native
```

in windows

```
Use any extract software your like, extract it to a fold :D
```


### install the software

e.g in Linux or Mac

```
./install.sh
```

in windows double click `install.bat`

### configure download path

You must configure your download path first,

You will find a file named config.yaml, use any text editor to edit it.
Notice: if you OS is windows, don't edit it use xxx, use something like notepad++ which can handle line break correctly.

**Notice: download path must exist**

e.g in linux

```
# config.yaml
environment: 'production'
data_dir: '/home/jack/clippings'
```

e.g in windows

```
# config.yaml
environment: 'production'
data_dir: 'e:\\\\jack\clippings'
```

## configure MaoXian Web Clipper

* Allow extension to access File URLs. (See: extension setting page > File URL)

* choose `Download through native App` as clipping handler. (See: extension setting page > Clipping Handler)

Finish. :D

-------------------------------------------
[Home](../index.html)

