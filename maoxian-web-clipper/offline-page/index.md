# offline index page

## intro

This is a static page, which supports list and search clipping history like the MaoXian's history page does. use this page, you can browse your clippings offline, which means you can browser your clippings in a new device without install MaoXian.

By the way, you can change this page as much as you like. Only HTML, CSS and javascript in it.

version: 0.0.5

## Usage

[Download it](files/history-0.0.5.zip) && extract it.

**Note**: MaoXian extension has supported changing name of root folder since version 0.1.34. This static page also has a new configure file (config.js) since version 0.0.4. If you've changed name of root folder in extention setting page, then you should change the "rootFolder" item in configure file.

### STEP 1: Move directory

Move extracted directory(named: history) to `$downloads/mx-wc`, after moving, it's path looks like **$downloads/mx-wc/history**

Directory name "history" is the default name, you can rename it, or even move it's file to `$download/mx-wc`. See below for more details.

Let's assume your `$download` folder is **/home/jack/Downloads** , then `$download/mx-wc` folder is **/home/jack/Downloads/mx-wc**.

| offline page path| Support? | description |
| -------- | -------- | -------- |
| /home/jack/Downloads/mx-wc/offline-index/index.html | Yes | We only rename it from `history` to `offline-index` |
| /home/jack/Downloads/mx-wc/offline-index.html | Yes | We move all file in `history` to `$download/mx-wc` and rename `index.html` to `offline-index.html` |
| /home/jack/Downloads/mx-wc/offline-pages/history/index.html | Yes | We place this page in a deeper directory |
| /home/jack/history/index.html | No | This page can not placed outside `$download/mx-wc` directory |



### STEP 2: Open it with browser

Use your favourite browser open that `index.html`($download/mx-wc/history/index.html), This is the **offline index page** we talked before.

### STEP 3: Configure MaoXian extension

After step 2, you'll see a page just like MaoXian's history page and there are two sample clipping records which is store in `clippings.js`. `clippings.js` is the file which `index.html` will load clipping records from. At this step, You should configure your `MaoXian Web Clipper` to generate it automatically. Go to MaoXian extension's `setting page` &gt; `offline index page`.

Do this:

* configure **clipping javascript path** (where clippings.js is), it's value is `$MX-WC/history/clippings.js`, If you didn't changed that extracted directory name (history), then you don't need to change this item.

* check the **Autogenerate javascript file** checkbox.
* click the **Generate Now** button, refresh the `index.html` page which you open previously. If you can't see that two sample clipping records, then congratulation! you succeed.

-------------------------------------------
[Home](../index.html)
