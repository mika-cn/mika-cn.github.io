
# MaoXian Web Clipper FAQ

* [Why it requires so many permissions?](#why-require-so-many-permissions)
* [Not response after click clip](#clip-menu-not-work)
* [Stop on clipping-hint every clipping](#crash-on-clipping)
* [Change Default download path](#change-default-download-path)
* [Can't open clipping on history page](#can-not-open-clipping-in-history)
* [Allow file URLs Access](#allow-access-file-urls)
* [Report new issue](#feedback)


-------------------------------------------

## Why it requires so many permissions? {#why-require-so-many-permissions}

Before we describe every permission's usage, it's necessary to clarify one thing: The description of permissions you saw on browser is said on user's position. when you saw these description. You should consider it as this extension will get the potential to do these things(whatever description of permission you saw) if it has got this permission rather than this extension will do these things if it has got this permission.

Content below is the permissions that is declared in `manifest.json`. We'll use these permission names to introduce it's usage.

```json
{
  "permissions": [
    "<all_urls>",
    "webNavigation",
    "webRequest",
    "webRequestBlocking",
    "storage",
    "tabs",
    "downloads",
    "downloads.open",
    "nativeMessaging"
  ]
}

```

**Permission: &lt;all_urls&gt;**

* description on Chrome: Read and change all your data on websites you visit on all sites.
* description on Firefox: Access your data for all websites
* actual usage: MaoXian use this permission to do some initializations. Such as initialize message channel, listen to hotkey<kbd>C</kbd>, get current url and find out whether this kind of web page was clipped before(remember selection) etc.

**Permission: webNavigation**

* description on Chrome: Read your browser history.
* description on Firefox: Access browser activity during navigation.
* actual usage: MaoXian use this permission to get information of embed web pages. then using these information to communicate with it, so that they can be clipped.

**Permission: webRequest and webRequestBlocking**

* description on Chrome: Not description
* description on Firefox: Not description
* actual usage: MaoXian use these permissions to record MIME type of images. Some urls of images haven't file extension. we want to fix it(using MIME type) so that browsers can recognize the format of image and display it correctly. And these permissions are also used to modify the request headers that is sent by MaoXian. We modify some headers so that we leak less information to asset servers(see _Setting page > advanced > Referrer Policy_ for more details).


**Permission: storage**

* description on Chrome: Not description
* description on Firefox: Not description
* actual usage: This permission give browser extensions the ability to storage information. MaoXian use it to save configuration(includes setting page and history page), clipping records(which are showed on history page), category history and tag history. All these information will storage on your local hard disk. Note that this permission has potential to synchronize information across different devices if your account is online, MaoXian didn't enable this feature and won't enable it in the future.

**Permission: tabs**

* description on Chrome: Not description.
* description on Firefox: Access browser tabs.
* actual usage: MaoXian use this permission to get tab IDs that will be used to send message between components. And use this permission to load a web page in a new tab, these web pages include internal web pages of extension(setting page, history page etc.) and external web pages(e.g: documentation of this project).

**Permission: downloads and downloads.open**

* description on Chrome: Manage your downloads, Open downloaded files.
* description on Firefox: Downlaod files and read and modify the browser's download history, Open files downloaded to your computer.
* actual usage: MaoXian use `downloads` permission to save clipped files and delete these download records except the main file(MaoXian don't want to mess your download history). After clipping, MaoXian use `downloads.open` to open the clipped file.

**Permission: nativeMessaging**

* description on Chrome: Communicate with cooperating native applications
* description on Firefox: Exchange messages with programs other than Firefox.
* actual usage: MaoXian use this permission to communicate with [Native App](native-app/index.html)。

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

Command:

```shell
ln -s /home/jack/Dropbox/clips /home/jack/Downloads/mx-wc
```

### For Windows

Assume:

* C:\Users\jack\Downloads      [your download path]
* C:\Users\jack\OneDrive\clips [destination directory]

Save command below as mklink.bat, and run mklink.bat as administrator(right click, run as administrator).

Command:

```shell
mklink /D C:\Users\jack\Downloads\mx-wc C:\Users\jack\OneDrive\clips
```

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
