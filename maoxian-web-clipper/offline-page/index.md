# offline index page

## intro

This is a static page, which supports list and search clipping history like the MaoXian's history page does. use this page, you can browse your clippings offline, which means you can browser your clippings in a new device without install MaoXian.

version: 0.0.3

## Usage

[Download it](files/history-0.0.3.zip) && extract it.

### STEP 1: Move directory

 Move extracted directory(named: history) to `$downloads/mx-wc`, after moving, it's path look like `$downloads/mx-wc/history`

### STEP 2: Open it with browser

Use your favourite browser open that `index.html`($download/mx-wc/history/index.html), This is the **offline index page** we talked before.

### STEP 3: Configure MaoXian extension

After step 2, you'll see a page just like MaoXian's history page and there are two sample clipping histories which is store in `clippings.js`. `clippings.js` is the file which `index.html` will load clipping histories from. At this step, You should configure your `MaoXian Web Clipper` to generate it automatically. Go to MaoXian extension's `setting page` &gt; `offline index page`.

Do this:

* configure **clipping javascript path** (where clippings.js is), it's value is `$MX-WC/history/clippings.js`, If you didn't changed that extracted directory name (history), then you don't need to change this item.

* check the **Autogenerate javascript file** checkbox.
* click the **Generate Now** button, refresh the `index.html` page which you open previously. If you can't see that two sample clipping histories, then congratulation! you succeed.

-------------------------------------------
[Home](../index.html)
