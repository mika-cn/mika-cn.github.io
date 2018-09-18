
# MaoXian web clipper Native App

## Installation

ruby is required, install it first.

[Install Ruby](https://www.ruby-lang.org/en/downloads/)


### Download

Download software according to your OS and browser type.

* [maoxian-web-clipper-native-app-linux-chrome.zip](files/maoxian-web-clipper-native-linux-chrome.zip)
* [maoxian-web-clipper-native-app-linux-chromium.zip](files/maoxian-web-clipper-native-linux-chromium.zip)
* [maoxian-web-clipper-native-app-linux-firefox.zip](files/maoxian-web-clipper-native-linux-firefox.zip)
* [maoxian-web-clipper-native-app-osx-chrome.zip](files/maoxian-web-clipper-native-osx-chrome.zip)
* [maoxian-web-clipper-native-app-osx-chromium.zip](files/maoxian-web-clipper-native-osx-chromium.zip)
* [maoxian-web-clipper-native-app-osx-firefox.zip](files/maoxian-web-clipper-native-osx-firefox.zip)
* [maoxian-web-clipper-native-app-windows-chrome.zip](files/maoxian-web-clipper-native-windows-chrome.zip)
* [maoxian-web-clipper-native-app-windows-chromium.zip](files/maoxian-web-clipper-native-windows-chromium.zip)
* [maoxian-web-clipper-native-app-windows-firefox.zip](files/maoxian-web-clipper-native-windows-firefox.zip)

### Extract zip file

in linux or mac

```
unzip maoxian-web-clipper-native-linux-chrome.zip -d maoxian-web-clipper-native
```

in windows

```
Use any extract software your like, extract it to a fold :D
```


### configure download path

You must configure your download path first,

You will find a file named config.yaml, use any text editor to edit it.
Notice: if you OS is windows, don't edit it use xxx, use something like notepad++ which can handle line break correctly.

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
data_dir: 'c:\\jack\clippings'
```

### install the software

e.g in Linux or Mac

```
./install.sh
```

in windows double click `install.bat`


