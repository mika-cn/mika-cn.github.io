
# MaoXian web clipper Native App

## Intro

This is a little application. We develope it to enhance MaoXian's abilities.

## Features

* Download file (to avoid conflic with download manage extention)
* Delete clipping file (when you delete a clipping record in clipping history page, it delete files that relative to that record)
* Refresh history (This is useful when you have two clipping sources(e.g. two browsers on same computer or different computers) and want to keep clipping history latest)

## Installation {#install}

### Install ruby {#install-ruby}

ruby is required, install it first.

[Install Ruby](https://www.ruby-lang.org/en/downloads/)


### Download {#download-package}

Download software according to your OS and browser type.

Current Version `0.1.6`

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

### Extract zip file {#extract-package}

in linux or mac

```
unzip maoxian-web-clipper-native-linux-chrome.zip -d maoxian-web-clipper-native
```

in windows

```
Use any extract software your like, extract it to a fold :D
```


### install the software {#install-native-app}

* **Mac or Linux**: `./install.sh`
* **Windows**:  double click `install.bat`

### configure download path {#configure-download-path}

You must configure your download path first,

You will find a file named config.yaml, use any text editor to edit it.
Notice: if you OS is windows, don't edit it use notePad, use something like notepad++ which can handle line break correctly.

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

### configure MaoXian Web Clipper

* Allow extension to access File URLs. (See: extension setting page > File URL)

* choose `Download through native App` as clipping handler. (See: extension setting page > Clipping Handler)

Finish. :D

## uninstall {#uninstall}

* **Mac or Linux**: run `./uninstall.sh` and delete Native App directory.
* **Windows**: double click `uninstall.bat` and delete Native App directory.

## upgrade {#upgrade}
1. Backup `config.yaml`
2. [Uninstall Native App](#uninstall)
3. [Download latest version](#download-package) in current page and [extract](#extract-package) it.
4. Replace `config.yaml` in extracted directory using the file we had backuped in first step.
5. [Install this Native App](#install-native-app)
6. Reboot your browser.


-------------------------------------------
[Home](../index.html)

