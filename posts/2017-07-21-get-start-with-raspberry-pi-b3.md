---
layout: post
title:  "树莓派3代，ssh 与 无线连网"
date:   2017-07-21 14:24:35 +0800
categories: raspberry-pi
tags: raspberry-pi
gh_issue_id: 2
---

> 由于入手树莓派的时候，周边没有显示器，并且路由器在别的房间，而我进不去，刚好手上有两根网线（后来证实好像一根坏了),
遂通过直接用网线连接笔记本和树莓派来连接ssh

本文讲述了没有显示器时候如何开始玩树莓派。


## 处境简介
* 一个笔记本电脑(linux系统)
* 一块树莓派3代B电路板
* 一个充电器(5v, 2A 官网讲最好2.5A输入，2A也可以，但是可能会有性能问题),
* 一张 8G Micro SD Card
* 一个读卡器
* 一根网线


## 上篇: 启动树莓派

### 烧录系统到sd卡

下载系统

到官方下载页： https://www.raspberrypi.org/downloads/raspbian/ 即可下载
```shell
unzip raspbian.zip
# 得到 raspbian.img (注: 这里简写了文件名, 实际得到的文件名为 2017-07-05-rasbian-jessie.img)
```


插入sd卡到电脑

查看sd卡所在的设备文件(可看到sd卡所对应的为 /dev/sdb)
```shell
ls /dev/sd*
# /dev/sda  /dev/sda1  /dev/sda2  /dev/sda3  /dev/sdb  /dev/sdb1
```

如果sd卡已经mount到系统上了，就先使用 umount 挂载掉。(避免在烧录的过程中其他程序的读写)
```shell
sudo umount /media/pi/sdcard
# 我的系统是 ubuntu, 默认mount 到/media/$user 目录下
```

使用dd命令烧录系统
```shell
sudo dd bs=4M if=/home/pi/Downloads/raspbian.img of=/dev/sdb
# 注意输出目录位置，别把你电脑的硬盘给覆盖了...
```

### 开启ssh和设定系统使用的ip
raspbian 默认ssh没有开启，开启方法是在 /boot 目录下新建一个ssh文件即可

把sd卡拔出重新插上电脑
```shell
touch /media/pi/sdcard/boot/ssh
```

指定系统启动后使用的ip(修改 /boot/cmdline.txt), 比如**`192.168.100.101`**

```shell
vim /media/pi/sdcard/boot/cmdline.txt
# 在最前端加入 ip=192.168.100.101 (注： 通过空格和原有内容隔开)
```

### 启动树莓派
在启动树莓派之前，先把笔记本ip设置为 **`192.168.100.1`**
```shell
sudo ifconfig eth0 192.168.100.1
```

把sd卡插入树莓派，用网线把树莓派和笔记本连接起来，最后把充电器接入树莓派，树莓派启动（可看到pwr指示灯亮起来)
过了一会之后，看网线两端的网口的指示灯是否亮起并不时的闪烁(ps: 我就是网线损坏，指示灯都不亮，换了一根后很顺利)


ping 树莓派, 能ping通说明两台机子可以通讯
```shell
ping 192.168.100.101
```

成功ping之后，就可以ssh登录了。(用户名: pi, 默认密码: raspberry)
```shell
ssh pi@192.168.100.101
```

******

## 下篇: 连接无线

扫描周边wifi 热点信息
```shell
sudo iwlist wlan0 scan
# 会输出一堆信息，ESSID 后方名称即为 wifi名称
```

设置连接到某个信号
```shell
sudo vim /etc/wpa_supplicant/wpa_supplicant.conf

# 在文件后方加入连接信息，比如(wifi热点名称为tp001, 密码为cool1234):
network={
    ssid="tp001"
    psk="cool1234"
}
```
保存过后，几秒就会生效。

```shell
ifconfig wlan0
# 查看是否成功, 看网卡是否启动并分配到ip (ps: 我没有成功:(  )
```

如果没有成功，使用 `sudo wpa_cli reconfigure` 后，再查看

到这里，就可以把之前连接在两台电脑之间的网线断开了，直接使用无线进行 ssh :), 不过最好到路由器设置页面固定树莓派的ip。

## 参考资料
[https://jingyan.baidu.com/article/4853e1e569d97c1908f72654.html](https://jingyan.baidu.com/article/4853e1e569d97c1908f72654.html)

[http://shumeipai.nxez.com/2013/12/08/linux-command-line-burn-raspberry-pi-mirror-to-sd-card.html](http://shumeipai.nxez.com/2013/12/08/linux-command-line-burn-raspberry-pi-mirror-to-sd-card.html)

[https://www.raspberrypi.org/documentation/remote-access/ssh/](https://www.raspberrypi.org/documentation/remote-access/ssh/)

[https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
