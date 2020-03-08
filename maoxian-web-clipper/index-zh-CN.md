
# MaoXian Web Clipper

[English](index.html)

## 简介

一个简洁的浏览器扩展，让你看到想收藏的内容，可以直接裁剪保存下来，以避免网站挂了，网址失效，图片失效等问题。

是的，没有烦人的注册，也不收费。

## 项目愿景

创建一个由社区驱动的，以用户真实需求为导向的，尊重用户隐私的网页裁剪工具。能够在主流浏览器上运行，界面简洁易用，可配置性强，同时保持开放性。

## 项目信息

该项目为开源项目（自由软件），软件许可为 MIT。你可以在 [Github](https://github.com/mika-cn/maoxian-web-clipper) 上查看（或参与）该项目。


## 特点与功能

* 本地存储 - 所有文件都保存在本地硬盘上，用户可以完全掌控自己的数据，比如可以自由选择第三方同步服务（目前支持两种存储格式：HTML 和 Markdown）。
* 自由选择 - 可自由选择要裁剪的区域。(不会自作聪明地帮你瞎选中某个区域)
* 调整选中 - 当用户选中一个区域后，可通过快捷键灵活地调整选中区域，亦可剔除某些不想保存的元素。
* 记住选中 - 记住选中的区域（也会记住剔除的元素），并在下次尝试运用它（默认未启用）。
* 分类归档 - 裁剪前可修改标题，录入保存目录，打上几个标签
* 裁剪历史 - 记录裁剪历史，并支持搜索(通过标题/目录/标签)
* 重置历史 - 当你在新电脑上安装插件后，可以通过重置历史功能，载入裁剪历史，目录历史，标签历史


## 软件预览

* [点我查看软件截图](screenshots.html)

## 运行环境

MaoXian 当前支持的浏览器如下：

* Firefox（火狐浏览器），版本 &gt;= 57.0，推荐使用最新的版本。
* Chrome/Chromium（谷歌浏览器或社区版谷歌浏览器），版本 &gt;= 66.0，推荐使用最新版本。

## 安装

* Firefox （火狐浏览器）- [https://addons.mozilla.org/zh-CN/firefox/addon/maoxian-web-clipper/](https://addons.mozilla.org/zh-CN/firefox/addon/maoxian-web-clipper/)
* Chrome web store （谷歌浏览器） - [https://chrome.google.com/webstore/detail/maoxian-web-clipper/kjahokgdcbohofgdidndeiaigkehdjdc](https://chrome.google.com/webstore/detail/maoxian-web-clipper/kjahokgdcbohofgdidndeiaigkehdjdc)
* Chrome （谷歌浏览器）- [墙内安装](install-by-extension-file.html)

## 使用注意

（1） 如果你的浏览器开启了 “每次下载都询问文件名”， 请关了该选项（插件一次会下载许多文件，会弹出很多窗口，**窗口打击很疼的 :D**）。

（2） 我们建议你[允许本扩展访问本地网址](faq-zh-CN.html#allow-access-file-urls)，这样你才能更方便地查看裁剪下来的文件。


## 存储路径

所有裁剪下来的文件都存放在 `$downloadFolder/mx-wc` 目录下。

比如你的下载路径为 `/home/foo/downloads`，那么文件就会保存在 `/home/foo/downloads/mx-wc`。如果你不想保存在下载目录下，请[点击这里](faq-zh-CN.html#change-default-download-path)查看如何操作。

## 开发状态

目前一些核心功能已初步完成，并在逐步完善中。在大部分情况下，软件可正常使用，但目前还没有达到一个很健壮，成熟的一个状态。在一些环境（如：恶劣的网络环境、静态资源服务器对请求有鉴权）下仍表现不理想。


## 贡献

我们深信一个软件只有在用户的不断反馈，开发者的不断跟进下才能成长为一个真正好用的软件。我们已经从用户那里得到许多有用的 Bug（软件缺陷）回馈，以及一些极好的建议（这些建议大部分被采纳和实现）。若该软件有幸得到你的喜爱，你也可以考虑参与进来，共同推动该软件的发展。

**参与方式如下**：

* 向周围的人推荐本软件，软件的流行对软件的成长至关重要（这也是开发者的动力源泉:D，并能带来更多的参与者）。
* 使用最新的版本，并反馈在使用过程中遇到的问题，不管是使用问题还是 Bug（软件缺陷）。（[回馈入口](https://github.com/mika-cn/maoxian-web-clipper/issues)）
* 对软件的功能与发展有一些建议和看法？反馈给我们，我们乐于听到用户对软件的看法。（[回馈入口](https://github.com/mika-cn/maoxian-web-clipper/issues)）
* 如果你是开发者，加入我们，一起开发（维护）该软件。（项目地址：[GitHub](https://github.com/mika-cn/maoxian-web-clipper)）
* 你还可以[做这个](donate.html)。


## 更多
* [常见问题](faq-zh-CN.html)
* [更新日志](change-log.html)
* [本地程序](native-app/index-zh-CN.html)
* [RSS](feed.xml)
* [离线索引页面](offline-page/index-zh-CN.html)
* [毛线助手](assistant/index-zh-CN.html)

