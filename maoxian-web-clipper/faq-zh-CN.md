
# MaoXian Web Clipper 常见问题

* [改变默认的下载路径](#改变默认的下载路径)

-------------------------------------------

## 改变默认的下载路径

由于安全问题，浏览器扩展无法修改你的下载路径。但是你可以通过创建软链接(符号链接)，来达到你的目地。

### Linux/Mac

假设:

* /home/jack/Downloads     [是你的下载路径]
* /home/jack/Dropbox/clips [是你的目标路径]

运行命令: `ln -s /home/jack/Dropbox/clips /home/jack/Downloads/mx-wc`

### Windows

假设:

* C:\Users\jack\Downloads      [是你的下载路径]
* C:\Users\jack\OneDrive\clips [是你的目标路径]

把下面的命令保存成 mklink.bat 文件，再右击该文件，以管理员方式运行。

命令: `mklink \D C:\Users\jack\Downloads\mx-wc C:\Users\jack\OneDrive\clips`


-------------------------------------------
[首页](index-zh-CN.html)
