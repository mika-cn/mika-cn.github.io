
# MaoXian Web Clipper FAQ

* [Change Default download path](#change-default-download-path)

-------------------------------------------

## Change default download path.

Web Extension can not modify your download path, due to secure reason.

But you can create a symbolic link to achieve this.

### For Linux/Mac

Assume:

* /home/jack/Downloads     [your download path]
* /home/jack/Dropbox/clips [destination directory]

Command: `ln -s /home/jack/Dropbox/clips /home/jack/Downloads/mx-wc`

### For Windows

Assume:

* C:\Users\jack\Downloads      [your download path]
* C:\Users\jack\OneDrive\clips [destination directory]

Save command below as mklink.bat, and run mklink.bat as administrator.

Command: `mklink \D C:\Users\jack\Downloads\mx-wc C:\Users\jack\OneDrive\clips`


-------------------------------------------
[Home](index.html)
