
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

* Are you clip a page before your installation, try refresh your page.
* Currently, It only support firefox and chrome/chromium, If you install it to other browser, we don't guarantee it will work.

## Stop on clipping-hint every clipping {#crash-on-clipping}

If you meet this situation. It's probably you had installed some extension(e.g. chrone) to manage your downloads. Download manage extension will intercept download request, `MaoXian Web Clipper` use download API to save your clipping information. So `MaoXian Web Clipper` conflict with your download manage extension.

We have found some user install this extension on other browser(like: vivaldi), vivaldi will intercept download request, so it conflict with `MaoXian Web Clipper` too.

We had developed a native application to resolve this problem.

See: [Native App](native-app/index.html)

## Change default download path. {#change-default-download-path}

If you choose [**Native App**](native-app/index.html) as your clipping handler. You can edit the config.yaml to configure download path.

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

Save command below as mklink.bat, and run mklink.bat as administrator.

Command: `mklink \D C:\Users\jack\Downloads\mx-wc C:\Users\jack\OneDrive\clips`

-------------------------------------------

## Can't open clipping on history page {#can-not-open-clipping-in-history}

Some user had found that the clipping on history page can open after clipping, But couldn't open it another day.

If extension can't access file URLs, it will try to open clipping through download history. If you clear that history, then it cann't open it.

[allow it access file URLs](#allow-access-file-urls), can avoid this situation.

-------------------------------------------

## Allow access file URLs

Web browser don't allow extension to access file URLs(file://). `MaoXian Web Clipper` can't open clipping file(opening file URL) directly because of it.

We suggest you to allow `MaoXian Web Clipper` access file URLs. So you can open clipping file more convenient.

Section below describes how to allow `MaoXian Web Clipper` to access file URLs(file://).

### 1. Getting "extension identifier"

You can get it from `MaoXian Web Clipper`'s setting page.

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

Back to `MaoXian Web Clipper`'s setting page，check "I enabled 'allow file scheme access'".

## Report new issue {#feedback}

If answers above can't resolve your problem. Feedback your problem to [Project Issue Page](https://github.com/mika-cn/maoxian-web-clipper/issues).

-------------------------------------------
[Home](index.html)
