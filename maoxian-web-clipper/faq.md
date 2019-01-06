
[link-id]: https://mika-cn.github.io

# MaoXian Web Clipper FAQ

* [Not response after click clip](#clip-menu-not-work)
* [Stop on clipping-hint every clipping](#crash-on-clipping)
* [Change Default download path](#change-default-download-path)
* [Can't open clipping on history page](#can-not-open-clipping-in-history)
* [Allow file URLs Access](#allow-access-file-urls)
* [Report new issue](#feedback)


-------------------------------------------

## Not response after click clip {#clip-menu-not-work}

Please check situation below:

* Are you clip a page before your installation? Try refresh your page if you are.
* Currently, It only support firefox and chrome/chromium, If you install it to other browser, we don't guarantee it will work.

## Stop on clipping-hint every clipping {#crash-on-clipping}

If you meet this situation. It's probably because you had installed some extension(e.g. chrone) to manage your downloads. Download manage extension will intercept your download request, MaoXian use download API to save your clipping information. MaoXian can't finish its clipping because of that interception.

We have also found some user install MaoXian on other browser(like: vivaldi) which is base on chromium project, that means MaoXian may work fine on these browser. but these browser(e.g. vivaldi) have developed their own download manage function which will intercept download request too. 

To solve this confliction, we had developed a native application which can receive download request that was sent by MaoXian.

See: [Native App](native-app/index.html)

## Change default download path. {#change-default-download-path}

If you choose [**Native App**](native-app/index.html) as your clipping handler. You can edit the `config.yaml` to configure download path, don't forget to restart your browser to apply new configuration.

If you choose **browser** as your clipping handler(default handler). Web Extension can't modify your download path, due to secure reason.

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

Save command below as mklink.bat, and run mklink.bat as administrator(right click, run as administrator).

Command: `mklink \D C:\Users\jack\Downloads\mx-wc C:\Users\jack\OneDrive\clips`

-------------------------------------------

## Can't open clipping on history page {#can-not-open-clipping-in-history}

Some user had found that the clipping on history page can open after clipping, But couldn't open it another day.

This is because MaoXian will try to open clipping file through download history if it can't access file URLs. If you clear that history, then it can't open it.

[allow it to access file URLs](#allow-access-file-urls), can avoid this situation.

-------------------------------------------

## Allow access file URLs

Web browser don't allow extension to access file URLs(file://). MaoXian can't open clipping file(opening file URL) directly because of it.

We suggest you to allow MaoXian to access file URLs. So you can open clipping file more convenient.

Section below describes how to allow MaoXian to access file URLs(file://).

### 1. Getting "extension identifier"

You can get it from MaoXian's setting page.

It looks like this:

* Firefox => moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7
* Chrome => chrome-extension://612ab18c-c29e-4211-bd50-3f208d227db7

### 2. configure browser settings

This step is different between each browser.

**Chrome/Chromium**

Take `extension identifier` above as an example, input `chrome://extensions/?id=612ab18c-c29e-4211-bd50-3f208d227db7` to browser's address bar, Enter.

Enable `Allow access to file URLs` option.

**Firefox**

Firefox hasn't provide a page to setting this option by default, but we can change firefox's preference settings.

I: input `about:config` to address bar and enter, you will get a configuration page.

II: configure these item below

| Item Name | Item Value | Note |
| -------- | -------- | -------- |
| capability.policy.policynames | localfilelinks | - |
| capability.policy.localfilelinks.sites | moz-extension://612ab18c-c29e-4211-bd50-3f208d227db7 | change this to `extension identifier` you got |
| capability.policy.localfilelinks.checkloaduri.enabled | allAccess | - |

Copy item name, paste to search.

If you can find it. Change it's value by double click.

If you can't find it. Do: right click > new > String > paste item name > paste item value

### 3. configure extension settings

Back to MaoXian's setting page，check "I enabled 'allow file scheme access'".

## Report new issue {#feedback}

If answers above can't resolve your problem. Feedback your problem to [Project Issue Page](https://github.com/mika-cn/maoxian-web-clipper/issues).

-------------------------------------------
[Home](index.html)
