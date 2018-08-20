
[link-id]: https://mika-cn.github.io

# MaoXian Web Clipper FAQ

* [Change Default download path](#change-default-download-path)
* [Allow file URLs Access](#allow-access-file-urls)


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

## Allow access file URLs

This section describe how to allow `MaoXian Web Clipper` to access file URLs(file://)

First, we should get `extension identify`. You can get this information from `MaoXian Web Clipper`'s setting page.

Looks like this:

* Firefox => moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7
* Chrome => chrome-extension://612ab18c-c29e-4211-bd50-3f208d227db7

### Chrome

Take `extension identify` above as an example, input `chrome://extension/?id=612ab18c-c29e-4211-bd50-3f208d227db7` to browser's address bar, Enter.

enable `Allow access to file URLs` option.

### Firefox
Firefox haven't provide a page to setting this option by default, but we can change firefox's preference settings.

I: input `about:config` to address bar and enter, you will get a config page.

II: config these item below

| Item Name | Item Value | Note |
| -------- | -------- | -------- |
| capability.policy.policynames | localfilelinks | - |
| capability.policy.localfilelinks.sites | moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7 | change this to `extension identify` you got |
| capability.policy.localfilelinks.checkloaduri.enabled | allAccess | - |

copy item name, paste to search.

If found it, change it's value by double click.

If not found, right click > new > String > paste item name > paste item value


III: Back to `MaoXian Web Clipper`'s setting page，check "I enabled 'allow file scheme access'".

-------------------------------------------
[Home](index.html)
