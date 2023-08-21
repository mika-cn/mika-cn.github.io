var websitePlans = (websitePlans || []).concat(
[
  {
    "name": "cnbeta.com",
    "pattern": "http*://*.cnbeta.com/articles/*/*",
    "pick": [
      "div.article-content"
    ],
    "hide": [
      "div.clearfix",
      "div.rating_box",
      "X||//strong[text()=\"[广告]活动入口:\"]",
      "div.article-relation"
    ]
  },
  {
    "name": "m.qdaily.com",
    "pattern": "http*://m.qdaily.com/mobile/articles/*.html",
    "pick": [
      "div.detail"
    ],
    "hide": [
      "div.author-share",
      "div.icon-pics",
      "div.embed-control"
    ]
  },
  {
    "name": "qdaily.com",
    "pattern": "http://www.qdaily.com/articles/",
    "pick": [
      "div.article-detail-bd"
    ],
    "hide": [
      "div.author-share",
      "div.embed-control"
    ]
  },
  {
    "name": "36kr.com",
    "pattern": "http://36kr.com/p/",
    "pick": [
      "div.articleDetailContent"
    ],
    "hide": [
      "div.author-panel",
      "section.article-footer-label",
      "section.report-code-section",
      "section.single-post-tags",
      "div.share-nav"
    ]
  },
  {
    "name": "pingwest.com",
    "pattern": "http*://www.pingwest.com/a/*",
    "pick": [
      "article.article-style"
    ],
    "hide": [
      "p.post-footer-wx"
    ]
  },
  {
    "name": "pingwest.com",
    "pattern": "http://www.pingwest.com/wire/",
    "pick": [
      "div#sc-container"
    ],
    "hide": [
      "p.post-footer-wx"
    ]
  },
  {
    "name": "jiemian.com",
    "pattern": "http://www.jiemian.com/article/",
    "pick": [
      "div.article-main"
    ],
    "hide": [
      "div.share-view",
      ".article-btn",
      "div.article-footer",
      "p.report-view",
      "X||//*[contains(@src,\"146241438767289600_a580xH\")]"
    ]
  },
  {
    "name": "news.ifanr.com",
    "pattern": "http://www.ifanr.com/news/",
    "pick": [
      "article"
    ],
    "hide": [
      "div.entry-header",
      "div.entry-meta",
      "a.entry-comment-number",
      "div.article-header",
      "div.article-jiong-banner",
      "div.popup",
      "div.article-sns-tool"
    ]
  },
  {
    "name": "minapp.ifanr.com",
    "pattern": "http://www.ifanr.com/minapp/",
    "pick": [
      "article"
    ],
    "hide": [
      "X||//span[text()=\"本文由知晓程序授权转载\"]",
      "X||//*[contains(@src,\"new_zx-1\")]",
      "div.entry-header",
      "div.entry-meta",
      "a.entry-comment-number",
      "div.article-header",
      "div.article-jiong-banner",
      "div.popup",
      "div.article-sns-tool",
      "X||//*[contains(@src,\"zxcx-qun-1\")]"
    ]
  },
  {
    "name": "app.ifanr.com",
    "pattern": "http://www.ifanr.com/app/",
    "pick": [
      "article"
    ],
    "hide": [
      "div.c-appso-download",
      "X||//strong[text()=\"本文由让手机更好用\"]",
      "X||//*[contains(@src,\"AppSo-qrcode-signature\")]",
      "X||//strong[text()=\"▽\"]",
      "div.entry-header",
      "div.entry-meta",
      "a.entry-comment-number",
      "div.article-header",
      "div.article-jiong-banner",
      "div.popup",
      "div.article-sns-tool",
      "X||//*[contains(@src,\"banner2\")]"
    ]
  },
  {
    "name": "dasheng.ifanr.com",
    "pattern": "http://www.ifanr.com/dasheng/",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "data.ifanr.com",
    "pattern": "http://www.ifanr.com/data/",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "weizhizao.ifanr.com",
    "pattern": "http://www.ifanr.com/weizhizao/",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "ifanr.com",
    "pattern": "http://www.ifanr.com/",
    "pick": [
      "article"
    ],
    "hide": [
      "X||//span[text()=\"快速关注知晓程序\"]",
      "X||//strong[text()=\"本文由知晓程序原创出品\"]",
      "X||//strong[text()=\"爱范儿旗下专注于小程序生态的公众号\"]",
      "div.entry-header",
      "div.entry-meta",
      "a.entry-comment-number",
      "div.article-header",
      "div.entry-content__tags",
      "div.article-info",
      "div.article-jiong-banner",
      "div.popup",
      "div.article-sns-tool",
      "X||//*[contains(@src,\"zxcx-1\")]"
    ]
  },
  {
    "name": "minapp.com",
    "pattern": "https://minapp.com/article/",
    "pick": [
      "div.origin-content"
    ],
    "hide": [
      "X||//strong[text()=\"本文由知晓程序\"]",
      "X||//*[contains(@src,\"zxcx_0208\")]"
    ]
  },
  {
    "name": "io.sspai.com",
    "pattern": "https://ios.sspai.com/**/*/*",
    "pick": [
      "div#article-content"
    ],
    "hide": [
      "span.ss-app-card",
      "div.ss-left",
      "div.ss-right"
    ]
  },
  {
    "name": "sspai.com",
    "pattern": "https://sspai.com/post/",
    "pick": [
      ".content"
    ],
    "hide": [
      "img#s1",
      "hr",
      "X||//span[text()=\"我们主张分享真实的产品体验\"]",
      "X||//span[text()=\"本文内容仅代表作者本人观点\"]",
      "X||//*[contains(@src,\"342459.png\")]"
    ]
  },
  {
    "name": "m.dgtle.com",
    "pattern": "http*://www.dgtle.com/portal.php*",
    "pick": [
      "div#view_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "dgtle.com",
    "pattern": "http*://www.dgtle.com/article-*.html",
    "pick": [
      ".view_content",
      "#view_content"
    ],
    "hide": [
      "div#comments_top",
      "X||//*[contains(@src,\"xxxxxbbs\")]"
    ]
  },
  {
    "name": "bbs.dgtle.com",
    "pattern": "http*://*.dgtle.com/thread-*.html",
    "pick": [
      "div.forum-viewthread-article-box"
    ],
    "hide": [
      "div#comments_top",
      "X||//*[contains(@src,\"xxxxxbbs\")]"
    ]
  },
  {
    "name": "zhuanlan.zhihu.com",
    "pattern": "https://zhuanlan.zhihu.com/p/",
    "pick": [
      "div.RichText.Post-RichText"
    ],
    "hide": [

    ]
  },
  {
    "name": "dudu.zhihu.com",
    "pattern": "http://dudu.zhihu.com/story/",
    "pick": [
      "div.content"
    ],
    "hide": [

    ]
  },
  {
    "name": "daily.zhihu.com",
    "pattern": "https://daily.zhihu.com/story/",
    "pick": [
      ".content"
    ],
    "hide": [

    ]
  },
  {
    "name": "question.zhihu.com",
    "pattern": "https://www.zhihu.com/question/**/*",
    "pick": [
      ".RichContent-inner"
    ],
    "hide": [
      "i.icon-external"
    ]
  },
  {
    "name": "geekpark.net",
    "pattern": "http://www.geekpark.net/topics/",
    "pick": [
      "article.article-body"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.geekpark.net",
    "pattern": "https://www.geekpark.net/news/*",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "jianshu.com",
    "pattern": "http://www.jianshu.com/p/",
    "pick": [
      "div.show-content-free"
    ],
    "hide": [

    ]
  },
  {
    "name": "waerfa.com",
    "pattern": "http://www.waerfa.com/",
    "pick": [
      "div.s-single-article"
    ],
    "hide": [
      "div.u-post-share-wrap"
    ]
  },
  {
    "name": "mp.weixin.qq.com",
    "pattern": "http://mp.weixin.qq.com/*",
    "pick": [
      "div#js_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "article.guokr.com",
    "pattern": "http://www.guokr.com/article/",
    "pick": [
      "div#articleContent"
    ],
    "hide": [
      "div.article-extend",
      "p.copyright"
    ]
  },
  {
    "name": "post.guokr.com",
    "pattern": "http://www.guokr.com/post/",
    "pick": [
      "div#articleContent"
    ],
    "hide": [

    ]
  },
  {
    "name": "question.guokr.com",
    "pattern": "http://www.guokr.com/question/*",
    "pick": [
      ".gbbcode-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "zuimeia.com",
    "pattern": "http://zuimeia.com/app/",
    "pick": [
      "div#article_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "huxiu.com",
    "pattern": "https://www.huxiu.com/article/",
    "pick": [
      "div.article-content-wrap"
    ],
    "hide": [
      "div.neirong-shouquan",
      "div.neirong-shouquan-public"
    ]
  },
  {
    "name": "moment.douban.com",
    "pattern": "https://moment.douban.com/post/*/",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "m.douban.com",
    "pattern": "https://m.douban.com/*",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "book.douban.com",
    "pattern": "https://book.douban.com/reading/*",
    "pick": [
      "div.book-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "people.douban.com",
    "pattern": "https://www.douban.com/people/*/status/*",
    "pick": [
      "div.status-saying"
    ],
    "hide": [

    ]
  },
  {
    "name": "douban.com",
    "pattern": "https://www.douban.com/*",
    "pick": [
      "div#link-report"
    ],
    "hide": [

    ]
  },
  {
    "name": "qingmang.me",
    "pattern": "http://qingmang.me/magazines/*/**/*",
    "pick": [
      "article"
    ],
    "hide": [
      "header"
    ]
  },
  {
    "name": "leiphone.com",
    "pattern": "https://www.leiphone.com/news/*/*.html",
    "pick": [
      "div.lph-article-comView"
    ],
    "hide": [
      "X||//span[text()=\"公众号：雷锋网\"]",
      "X||//p[text()=\"未经授权禁止转载\"]"
    ]
  },
  {
    "name": "m.tmtpost.com",
    "pattern": "http://m.tmtpost.com/*.html",
    "pick": [
      "article"
    ],
    "hide": [
      "h1",
      "div.post-info",
      "p.post-abstract",
      "div.pro_icon",
      "div.pro_intro.tc",
      "X||//strong[text()=\"更多精彩内容\"]",
      "X||//strong[text()=\"关注钛媒体微信号\"]",
      "X||//*[contains(@src,\"wzny_ewm\")]"
    ]
  },
  {
    "name": "tmtpost.com",
    "pattern": "http://www.tmtpost.com/*.html",
    "pick": [
      "article"
    ],
    "hide": [
      "h1",
      "div.post-info",
      "p.post-abstract",
      "div.pro_icon",
      "div.pro_intro.tc",
      "X||//strong[text()=\"更多精彩内容\"]",
      "X||//strong[text()=\"关注钛媒体微信号\"]",
      "X||//*[contains(@src,\"wzny_ewm\")]"
    ]
  },
  {
    "name": "songshuhui.net",
    "pattern": "http://songshuhui.net/archives/",
    "pick": [
      "div.entry"
    ],
    "hide": [
      "div.bshare-custom",
      "div.my-related-posts-box",
      "X||//strong[text()=\"相关文章\"]"
    ]
  },
  {
    "name": "infzm.com",
    "pattern": "http://www.infzm.com/content/",
    "pick": [
      "section#articleContent"
    ],
    "hide": [

    ]
  },
  {
    "name": "nationalgeographic.com.cn",
    "pattern": "http://www.nationalgeographic.com.cn/**/*/*.html",
    "pick": [
      "div#detailMain_box_img"
    ],
    "hide": [

    ]
  },
  {
    "name": "appinn.com",
    "pattern": "http*://www.appinn.com/*/",
    "pick": [
      ".entry-content",
      "#content-area"
    ],
    "hide": [
      "div.open_social_box",
      "div.os-share-box",
      "div.sharing-options",
      "div.wptouch-custom-showcase",
      "X||//*[contains(@src,\"ds-logo-1-2-64\")]",
      "X||//*[contains(@src,\"down\")]",
      "button.simplefavorite-button"
    ]
  },
  {
    "name": "free.apprcn.com",
    "pattern": "http*://free.apprcn.com/*",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.wumii-hook",
      "div#wumiiDisplayDiv",
      "div#wp-share-list-container"
    ]
  },
  {
    "name": "apprcn.com",
    "pattern": "http://www.apprcn.com/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.wumii-hook",
      "div#wumiiDisplayDiv",
      "div#wp-share-list-container"
    ]
  },
  {
    "name": "playpcesor.com",
    "pattern": "http*://www.playpcesor.com/**/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "steachs.com",
    "pattern": "https://steachs.com/archives/",
    "pick": [
      "div.post-contents"
    ],
    "hide": [

    ]
  },
  {
    "name": "azofreeware.com",
    "pattern": "http*://www.azofreeware.com/**/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "m.weibo.cn",
    "pattern": "http*://m.weibo.cn/**/*",
    "pick": [
      "div.weibo-text"
    ],
    "hide": [

    ]
  },
  {
    "name": "weibo.com",
    "pattern": "http*://weibo.com/ttarticle/p/*",
    "pick": [
      "div.WB_editor_iframe"
    ],
    "hide": [

    ]
  },
  {
    "name": "leikeji.com",
    "pattern": "http://www.leikeji.com/article/",
    "pick": [
      "div.article-body"
    ],
    "hide": [
      "div.signature-qr",
      "ul.tag-list"
    ]
  },
  {
    "name": "xueqiu.com",
    "pattern": "http*://xueqiu.com/*/*",
    "pick": [
      "div.article__bd__detail"
    ],
    "hide": [
      "script.single-description",
      "a.ke_img_link"
    ]
  },
  {
    "name": "chuansong.me",
    "pattern": "http://chuansong.me/n/",
    "pick": [
      "div#js_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "stream.107cine.cm",
    "pattern": "http://107cine.com/stream/*",
    "pick": [
      "div.flow_content"
    ],
    "hide": [
      "div.postfix",
      "X||//p[text()=\"影视工业网不会对原创文章作任何编辑\"]"
    ]
  },
  {
    "name": "zhuanti.107cine.cm",
    "pattern": "http://107cine.com/zhuanti/*",
    "pick": [
      "div.zhuanti"
    ],
    "hide": [
      "div.z-top",
      "div.datu"
    ]
  },
  {
    "name": "jiemi.baike.com",
    "pattern": "http://jiemi.baike.com/pa/detail?id=*",
    "pick": [
      "div.jiemi-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "wikipedia.org",
    "pattern": "https://*.wikipedia.org/wiki/*",
    "pick": [
      "div.mw-parser-output"
    ],
    "hide": [
      "div#toc",
      "table.infobox",
      "span.mw-editsection",
      "table.navbox",
      "div.thumb",
      "div.dablink",
      "table.metadata"
    ]
  },
  {
    "name": "article.pmcaff.com",
    "pattern": "http*://www.pmcaff.com/article/index/*",
    "pick": [
      "div#editorContent"
    ],
    "hide": [
      "X||//*[contains(@src,\"FlHy2hPIJYsjjeQRRKHhk0yfoLv\")]",
      "X||//b[text()=\"本文由PMCAFF专栏作者\"]",
      "X||//strong[text()=\"本文由\"]",
      "X||//strong[text()=\"版权归原作者所有\"]"
    ]
  },
  {
    "name": "discuss.pmcaff.com",
    "pattern": "http*://www.pmcaff.com/discuss/answer/*",
    "pick": [
      ".panel-body .content"
    ],
    "hide": [

    ]
  },
  {
    "name": "answer.pmcaff.com",
    "pattern": "http*://www.pmcaff.com/discuss/index/*",
    "pick": [
      "div#editorContent"
    ],
    "hide": [

    ]
  },
  {
    "name": "dxy.cn",
    "pattern": "http://*.dxy.cn/article/*",
    "pick": [
      "div#content"
    ],
    "hide": [
      "div.x_detail_btm"
    ]
  },
  {
    "name": "faq.dxy.com",
    "pattern": "https://dxy.com/faq/*",
    "pick": [
      "div.editor-style"
    ],
    "hide": [

    ]
  },
  {
    "name": "column.dxy.com",
    "pattern": "https://dxy.com/column/*",
    "pick": [
      "div.editor-body"
    ],
    "hide": [

    ]
  },
  {
    "name": "creative.adquan.com",
    "pattern": "http://creative.adquan.com/show/*",
    "pick": [
      "div.con_Text"
    ],
    "hide": [

    ]
  },
  {
    "name": "post.adquan.com",
    "pattern": "http://www.adquan.com/post-*.html",
    "pick": [
      "div.con_Text"
    ],
    "hide": [

    ]
  },
  {
    "name": "gonglve.mafengwo.cn",
    "pattern": "http*://www.mafengwo.cn/gonglve/ziyouxing/*.html",
    "pick": [
      "div._j_content"
    ],
    "hide": [
      "section.travelnote",
      "div.product-box",
      "div.pro_list"
    ]
  },
  {
    "name": "i.mafengwo.cn",
    "pattern": "http*://www.mafengwo.cn/i/*.html",
    "pick": [
      "div.vc_article"
    ],
    "hide": [
      "a._j_anchor",
      "div#_j_paragraph_1"
    ]
  },
  {
    "name": "bohaishibei.com",
    "pattern": "https://bohaishibei.com/post/*/",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "read.bilibili.com",
    "pattern": "https://www.bilibili.com/read/cv*",
    "pick": [
      "div.article-holder"
    ],
    "hide": [

    ]
  },
  {
    "name": "www.yixieshi.com",
    "pattern": "http*://www.yixieshi.com/*.html",
    "pick": [
      "article.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "iplaysoft.com",
    "pattern": "https://www.iplaysoft.com/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "blog.jobbole.com",
    "pattern": "http://blog.jobbole.com/*/",
    "pick": [
      "div.entry"
    ],
    "hide": [
      "div.copyright-area",
      "blockquote.rewards",
      "div.post-adds",
      "div#author-bio"
    ]
  },
  {
    "name": "android.jobbole.com",
    "pattern": "http://android.jobbole.com/*/",
    "pick": [
      "div.entry"
    ],
    "hide": [
      "div.copyright-area",
      "blockquote.rewards",
      "div.post-adds",
      "div#author-bio"
    ]
  },
  {
    "name": "ios.jobbole.com",
    "pattern": "http://ios.jobbole.com/*/",
    "pick": [
      "div.entry"
    ],
    "hide": [
      "div.copyright-area",
      "blockquote.rewards",
      "div.post-adds",
      "div#author-bio"
    ]
  },
  {
    "name": "python.jobbole.com",
    "pattern": "http://python.jobbole.com/*/",
    "pick": [
      "div.entry"
    ],
    "hide": [
      "div.copyright-area",
      "blockquote.rewards",
      "div.post-adds",
      "div#author-bio"
    ]
  },
  {
    "name": "top.jobbole.com",
    "pattern": "http://top.jobbole.com/*/",
    "pick": [
      "div.p-entry"
    ],
    "hide": [
      "div.textwidget"
    ]
  },
  {
    "name": "cnodejs.org",
    "pattern": "https://cnodejs.org/topic/",
    "pick": [
      "div.topic_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "w3cplus.com",
    "pattern": "https://www.w3cplus.com/**/*.html",
    "pick": [
      "div.body-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "w3cways.com",
    "pattern": "https://www.w3cways.com/*.html",
    "pick": [
      "article.article-content"
    ],
    "hide": [
      "p.post-copyright"
    ]
  },
  {
    "name": "div.io",
    "pattern": "http://div.io/topic/",
    "pick": [
      "div.topic-firstfloor-detail"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.aotu.io",
    "pattern": "https://news.aotu.io/a/*",
    "pick": [
      "div.news-body"
    ],
    "hide": [
      "X||//p[text()=\"未经许可，禁止转载。\"]"
    ]
  },
  {
    "name": "aotu.io",
    "pattern": "https://aotu.io/notes/**/*/*/",
    "pick": [
      "div.post-content"
    ],
    "hide": [
      "div.post-revision"
    ]
  },
  {
    "name": "ruby-china.org",
    "pattern": "https://ruby-china.org/topics/",
    "pick": [
      ".panel-body"
    ],
    "hide": [

    ]
  },
  {
    "name": "infoq.com",
    "pattern": "http://www.infoq.com/cn/articles/",
    "pick": [
      "div.text_info_article"
    ],
    "hide": [
      "div.random_links",
      "div#comment_here",
      "div.comments",
      "div.all_comments",
      "div#overlay_comments",
      "div#replyPopup",
      "div#editCommentPopup",
      "div#messagePopup",
      "div#responseContent",
      "div.related",
      "div.comment_here",
      "div.all_comments",
      "div.comments",
      "X||//p[text()=\"对本文的审校\"]",
      "X||//p[text()=\"中文站投稿或者参与内容翻译工作\"]",
      "X||//b[text()=\"QCon北京2017\"]"
    ]
  },
  {
    "name": "news.infoq.com",
    "pattern": "http://www.infoq.com/cn/news/**/*",
    "pick": [
      "div.text_info"
    ],
    "hide": [
      "div.random_links",
      "div.related",
      "div.comment_here",
      "div.all_comments",
      "div.comments"
    ]
  },
  {
    "name": "segmentfault.com",
    "pattern": "https://segmentfault.com/a/",
    "pick": [
      "div.article__content"
    ],
    "hide": [

    ]
  },
  {
    "name": "post.juejin.im",
    "pattern": "http*://juejin.im/post/*",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "entry.juejin.im",
    "pattern": "http*://juejin.im/entry/*",
    "pick": [
      "div.entry-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "qianduan.net",
    "pattern": "https://www.qianduan.net/*/",
    "pick": [
      "section.post-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "importnew.com",
    "pattern": "http://www.importnew.com/*.html",
    "pick": [
      "div.entry"
    ],
    "hide": [

    ]
  },
  {
    "name": "solidot.org",
    "pattern": "https://www.solidot.org/story?sid=*",
    "pick": [
      "div.p_mainnew"
    ],
    "hide": [

    ]
  },
  {
    "name": "ifeve.com",
    "pattern": "http://ifeve.com/*/",
    "pick": [
      "div.post_content"
    ],
    "hide": [
      "div#jiathis_style_32x32",
      "div.abh_box",
      "span.wpfp-span",
      "div.yarpp-related",
      "X||//p[text()=\"转载请注明\"]",
      "X||//*[contains(@src,\"ifeve500X150\")]"
    ]
  },
  {
    "name": "code.oschina.net",
    "pattern": "https://www.oschina.net/code/snippet_*_*",
    "pick": [
      "div.Body"
    ],
    "hide": [
      "div.Title",
      "div#toolbar_wrapper",
      ".code_pieces h2",
      "div.toolbar",
      "div.QuestionRelations",
      "div#related_codes",
      "div.code_comments",
      "div.CommentForm",
      "X||//p[text()=\"开源中国-程序员在线工具\"]",
      "i.jump_to_code",
      "div.code_report"
    ]
  },
  {
    "name": "translate.oschina.net",
    "pattern": "https://www.oschina.net/translate/",
    "pick": [
      "div.content"
    ],
    "hide": [

    ]
  },
  {
    "name": "project.oschina.net",
    "pattern": "https://www.oschina.net/p/",
    "pick": [
      "div.editor-viewer"
    ],
    "hide": [

    ]
  },
  {
    "name": "my.oschina.net",
    "pattern": "https://my.oschina.net/**/*/blog/*",
    "pick": [
      "div#articleContent"
    ],
    "hide": [
      "X||//*[contains(@src,\"hot3\")]"
    ]
  },
  {
    "name": "oschina.net",
    "pattern": "https://www.oschina.net/news/**/*",
    "pick": [
      "div#articleContent"
    ],
    "hide": [
      "X||//*[contains(@src,\"hot3\")]",
      "div.thumb"
    ]
  },
  {
    "name": "question.oschina.net",
    "pattern": "https://www.oschina.net/question/*_*",
    "pick": [
      "header.detail"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.iteye.com",
    "pattern": "http*://www.iteye.com/news/*",
    "pick": [
      "div#news_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "blog.iteye.com",
    "pattern": "http*://*.iteye.com/blog/*",
    "pick": [
      "div.iteye-blog-content-contain"
    ],
    "hide": [

    ]
  },
  {
    "name": "geek.csdn.net",
    "pattern": "http*://geek.csdn.net/news/detail/*",
    "pick": [
      "div.news_description"
    ],
    "hide": [
      "X||//p[text()=\"欢迎关注CSDN大数据公众号\"]",
      "X||//strong[text()=\"关注以下公众号\"]",
      "X||//*[contains(@src,\"20170119091646909\")]",
      "X||//*[contains(@src,\"20170119152206448\")]",
      "X||//*[contains(@src,\"20170120110155787\")]",
      "X||//*[contains(@src,\"8tPUexU\")]"
    ]
  },
  {
    "name": "blog.csdn.net",
    "pattern": "http*://blog.csdn.net/*/article/details/*",
    "pick": [
      "div.article_content"
    ],
    "hide": [
      "div.meau-gotop-box"
    ]
  },
  {
    "name": "lib.csdn.net",
    "pattern": "http*://lib.csdn.net/article/*/*",
    "pick": [
      "div.divtexts"
    ],
    "hide": [

    ]
  },
  {
    "name": "hacpai.com",
    "pattern": "https://hacpai.com/article/",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "freebuf.com",
    "pattern": "http*://www.freebuf.com/**/*/*.html",
    "pick": [
      "div#contenttxt"
    ],
    "hide": [
      "X||//b[text()=\"注明来自\"]"
    ]
  },
  {
    "name": "ruanyifeng.com",
    "pattern": "http://www.ruanyifeng.com/blog/**/*/*.html",
    "pick": [
      "div#main-content"
    ],
    "hide": [
      "X||//p[text()=\"（完）\"]"
    ]
  },
  {
    "name": "v2ex.com",
    "pattern": "https://www.v2ex.com/t/",
    "pick": [
      "div.topic_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.cnblogs.com",
    "pattern": "https://news.cnblogs.com/n/",
    "pick": [
      "div#news_body"
    ],
    "hide": [

    ]
  },
  {
    "name": "cnblogs.com",
    "pattern": "https://www.cnblogs.com/**/*/*.html",
    "pick": [
      "div#cnblogs_post_body"
    ],
    "hide": [

    ]
  },
  {
    "name": "tuicool.com",
    "pattern": "http://www.tuicool.com/articles/",
    "pick": [
      "div.article_body"
    ],
    "hide": [

    ]
  },
  {
    "name": "w3ctech.com",
    "pattern": "https://www.w3ctech.com/topic/",
    "pick": [
      "div.callout"
    ],
    "hide": [
      "X||//h2[text()=\"关注我们\"]",
      "X||//p[text()=\"本文原文\"]",
      "X||//p[text()=\"我们专注于H5技术生态的改善\"]",
      "X||//p[text()=\"欢迎有兴趣的同行一起来玩儿\"]",
      "X||//*[contains(@src,\"yufe2015\")]",
      "div#wx-qrcode"
    ]
  },
  {
    "name": "html-js.com",
    "pattern": "http://www.html-js.com/article/",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.entry-meta"
    ]
  },
  {
    "name": "open-open.com",
    "pattern": "http://www.open-open.com/lib/*/*.html",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "colobu.com",
    "pattern": "http://colobu.com/**/*/",
    "pick": [
      "div.article-entry"
    ],
    "hide": [

    ]
  },
  {
    "name": "liqi.io",
    "pattern": "http://liqi.io/*/",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "X||//span[text()=\"你也可以分享自己的利器\"]"
    ]
  },
  {
    "name": "daqianduan.com",
    "pattern": "http://www.daqianduan.com/*.html",
    "pick": [
      "article.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "caibaojian.com",
    "pattern": "http://caibaojian.com/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.article_index",
      "X||//span[text()=\"原创翻译，未经许可，禁止转载\"]"
    ]
  },
  {
    "name": "hao.caibaojian.com",
    "pattern": "http://hao.caibaojian.com/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.article_index",
      "X||//span[text()=\"原创翻译，未经许可，禁止转载\"]"
    ]
  },
  {
    "name": "xfenglin.com",
    "pattern": "http://xfenglin.com/a/",
    "pick": [
      "div.article__content"
    ],
    "hide": [

    ]
  },
  {
    "name": "ibm.com",
    "pattern": "https://www.ibm.com/developerworks/cn/**/*/*.html",
    "pick": [
      "div.ibm-col-6-4"
    ],
    "hide": [
      "h1#ibm-pagetitle-h1",
      "div.dw-article-topbar",
      "div.ibm-alternate-rule",
      "h4#artrelatedtopics",
      "ul.ibm-plain-list",
      "div#dw-article-cmts-top",
      "div.dw-article-cmts-container",
      "p.ibm-ind-link",
      "div.dw-article-sidebar"
    ]
  },
  {
    "name": "guanggoo.com",
    "pattern": "http://www.guanggoo.com/t/",
    "pick": [
      ".ui-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "ctolib.com",
    "pattern": "http://www.ctolib.com/*.html",
    "pick": [
      "article"
    ],
    "hide": [
      "a.anchor"
    ]
  },
  {
    "name": "zuojj.com",
    "pattern": "http://www.zuojj.com/archives/",
    "pick": [
      "article.article-content"
    ],
    "hide": [
      "div.copyright_con",
      "div.article-social"
    ]
  },
  {
    "name": "wkee.net",
    "pattern": "http://wkee.net/post/",
    "pick": [
      "div#content0"
    ],
    "hide": [
      "p.author",
      "div.sharebar"
    ]
  },
  {
    "name": "xituqu.com",
    "pattern": "https://xituqu.com/*.html",
    "pick": [
      "div.post-content"
    ],
    "hide": [
      "X||//h2[text()=\"关注稀土区微信公众号，获取一手资源\"]",
      "X||//*[contains(@src,\"006tNc79gw1f6gzqizciyj3076076aai\")]"
    ]
  },
  {
    "name": "linuxsight.com",
    "pattern": "http://www.linuxsight.com/blog/",
    "pick": [
      "div.single-content"
    ],
    "hide": [
      "div.ad-site"
    ]
  },
  {
    "name": "coyee.com",
    "pattern": "https://coyee.com/article/",
    "pick": [
      "div#sections"
    ],
    "hide": [
      "div.section_side_bar"
    ]
  },
  {
    "name": "36dsj.com",
    "pattern": "http://www.36dsj.com/archives/",
    "pick": [
      "article.article-content"
    ],
    "hide": [
      "X||//p[text()=\"转载请注明来自\"]",
      "X||//p[text()=\"End.\"]"
    ]
  },
  {
    "name": "cocoachina.com",
    "pattern": "http://www.cocoachina.com/*/*/*.html",
    "pick": [
      "div#detailbody"
    ],
    "hide": [
      "td.gutter"
    ]
  },
  {
    "name": "dataunion.org",
    "pattern": "http://dataunion.org/*.html",
    "pick": [
      "div.content-text"
    ],
    "hide": [

    ]
  },
  {
    "name": "linux.cn",
    "pattern": "https://linux.cn/article-*.html",
    "pick": [
      "div#article_content"
    ],
    "hide": [
      "X||//p[text()=\"本文由\"]"
    ]
  },
  {
    "name": "techug.com",
    "pattern": "http://www.techug.com/post/",
    "pick": [
      "div#content0"
    ],
    "hide": [

    ]
  },
  {
    "name": "article.ituring.com.cn",
    "pattern": "http://www.ituring.com.cn/article/",
    "pick": [
      "div.article"
    ],
    "hide": [
      "X||//h2[text()=\"加入图灵访谈微信\"]",
      "X||//*[contains(@src,\"01YrJhnWRMld\")]"
    ]
  },
  {
    "name": "book.ituring.com.cn",
    "pattern": "http://www.ituring.com.cn/book/tupubarticle/",
    "pick": [
      "div.article-detail"
    ],
    "hide": [

    ]
  },
  {
    "name": "issue.github.com",
    "pattern": "https://github.com/*/*/issues/*",
    "pick": [
      "#discussion_bucket table td.js-comment-body"
    ],
    "hide": [

    ]
  },
  {
    "name": "markdown.github.com",
    "pattern": "https://github.com/**/*/*.md",
    "pick": [
      "article.markdown-body"
    ],
    "hide": [
      "a.anchor"
    ]
  },
  {
    "name": "msdn.microsoft.com",
    "pattern": "https://msdn.microsoft.com/**/*/*.aspx",
    "pick": [
      "div#content"
    ],
    "hide": [
      "div#navigationButtons"
    ]
  },
  {
    "name": "docs.microsoft.com",
    "pattern": "https://docs.microsoft.com/*/*/*",
    "pick": [
      "div#main"
    ],
    "hide": [

    ]
  },
  {
    "name": "developer.mozilla.org",
    "pattern": "https://developer.mozilla.org/*/docs/*/**/*",
    "pick": [
      "article#wikiArticle"
    ],
    "hide": [
      "aside#helpful-survey",
      "a.section-edit"
    ]
  },
  {
    "name": "apps.mozilla.org",
    "pattern": "https://developer.mozilla.org/*/Apps/*/**/*",
    "pick": [
      "article#wikiArticle"
    ],
    "hide": [
      "aside#helpful-survey",
      "a.section-edit"
    ]
  },
  {
    "name": "article.52im.net",
    "pattern": "http://www.52im.net/article-*.html",
    "pick": [
      "td#article_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "thread.52im.net",
    "pattern": "http://www.52im.net/thread-*.html",
    "pick": [
      "td.t_f"
    ],
    "hide": [

    ]
  },
  {
    "name": "edaoe.com",
    "pattern": "http*://www.edaoe.com/*.html",
    "pick": [
      "article.article-content"
    ],
    "hide": [
      "div.article-social"
    ]
  },
  {
    "name": "gallery.edaoe.com",
    "pattern": "http://www.edaoe.com/gallery/*.html",
    "pick": [
      "article.article-content"
    ],
    "hide": [
      "div.article-social"
    ]
  },
  {
    "name": "chinabyte.cm",
    "pattern": "http://*.chinabyte.com/**/*/*.shtml",
    "pick": [
      "div.art_txt"
    ],
    "hide": [

    ]
  },
  {
    "name": "wiki.jikexueyuan.com",
    "pattern": "http://wiki.jikexueyuan.com/project/*",
    "pick": [
      "div.markdown-body"
    ],
    "hide": [
      "h1"
    ]
  },
  {
    "name": "ourcoders.com",
    "pattern": "http://ourcoders.com/thread/show/*/",
    "pick": [
      ".threadblock"
    ],
    "hide": [

    ]
  },
  {
    "name": "uisdc.com",
    "pattern": "http://www.uisdc.com/*",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.similarity",
      "div.post-copyright",
      "X||//*[contains(@src,\"youshege725\")]"
    ]
  },
  {
    "name": "kancloud.cn",
    "pattern": "http*://www.kancloud.cn/*/*/*",
    "pick": [
      ".article-body"
    ],
    "hide": [
      "X||//*[contains(@src,\"5a5e9e309af5e\")]"
    ]
  },
  {
    "name": "index.gitbook.com",
    "pattern": "http*://*.gitbooks.io/*/content/",
    "pick": [
      "div.page-inner"
    ],
    "hide": [

    ]
  },
  {
    "name": "gitbook.com",
    "pattern": "http*://*.gitbooks.io/*/content/**/*",
    "pick": [
      "div.page-inner"
    ],
    "hide": [

    ]
  },
  {
    "name": "index.developers.weixin.qq.com",
    "pattern": "http*://developers.weixin.qq.com/miniprogram/dev/",
    "pick": [
      "section.markdown-section"
    ],
    "hide": [

    ]
  },
  {
    "name": "developers.weixin.qq.com",
    "pattern": "http*://developers.weixin.qq.com/miniprogram/dev/**/*",
    "pick": [
      "section.markdown-section"
    ],
    "hide": [

    ]
  },
  {
    "name": "williamlong.info",
    "pattern": "http*://www.williamlong.info/archives/*.html",
    "pick": [
      "div#artibody"
    ],
    "hide": [

    ]
  },
  {
    "name": "blog.wanqu.co",
    "pattern": "https://wanqu.co/b/*/*.html*",
    "pick": [
      "div.blog-post-body"
    ],
    "hide": [
      "h1"
    ]
  },
  {
    "name": "hacknews.codedata.cn",
    "pattern": "http://www.codedata.cn/hacknews/*",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "topics.codedata.cn",
    "pattern": "http://www.codedata.cn/topics/*",
    "pick": [
      "article"
    ],
    "hide": [

    ]
  },
  {
    "name": "teakki.com",
    "pattern": "https://teakki.com/p/*",
    "pick": [
      "div.content-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "cppdaxue.com",
    "pattern": "http://cppdaxue.com/*/*.html",
    "pick": [
      "article"
    ],
    "hide": [
      "div.article-social"
    ]
  },
  {
    "name": "bobao.360.cn",
    "pattern": "http://bobao.360.cn/*/*/*.html",
    "pick": [
      "div#article_box"
    ],
    "hide": [
      "h2",
      "div.article-msg",
      "hr"
    ]
  },
  {
    "name": "thebigdata.cn",
    "pattern": "http://www.thebigdata.cn/*/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "blog.codingnow.com",
    "pattern": "https://blog.codingnow.com/*/*/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "coolshell.cn",
    "pattern": "https://coolshell.cn/articles/*.html",
    "pick": [
      "div.entry-content"
    ],
    "hide": [
      "div.jiathis_style",
      "div#wp_rp_first",
      "div.post-ratings",
      "footer.entry-footer",
      "X||//*[contains(@src,\"qrcode_for_gh_dd9d8c843f20_860\")]",
      "X||//*[contains(@src,\"100offer_600_200\")]",
      "X||//p[text()=\"微信公众账号可以在手机端搜索文章\"]",
      "X||//p[text()=\"全文完\"]",
      "X||//strong[text()=\"转载本站文章请注明作者\"]",
      "X||//div[text()=\"——===\"]",
      "X||//b[text()=\"酷壳404页面\"]"
    ]
  },
  {
    "name": "kotlinguides.github.io",
    "pattern": "https://*.github.io/kotlin-guides/*.html",
    "pick": [
      "article.post-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "readhub.me",
    "pattern": "http*://readhub.me/topic/",
    "pick": [
      "div.summary___1i4y3"
    ],
    "hide": [

    ]
  },
  {
    "name": "questions.stackoverflow.com",
    "pattern": "https://stackoverflow.com/questions/**/*",
    "pick": [
      ".post-text"
    ],
    "hide": [

    ]
  },
  {
    "name": "voidcn.com",
    "pattern": "http://www.voidcn.com/blog/**/*/*.html",
    "pick": [
      "div.post-content"
    ],
    "hide": [
      "div.wumii-hook",
      "X||//*[contains(@src,\"pixel\")]"
    ]
  },
  {
    "name": "m.thepaper.cn",
    "pattern": "http://m.thepaper.cn/newsDetail_*",
    "pick": [
      "div.news_part_limit"
    ],
    "hide": [
      "div.news_bl",
      "div#clickForMore",
      "div.relations_div"
    ]
  },
  {
    "name": "thepaper.cn",
    "pattern": "http://www.thepaper.cn/newsDetail_*",
    "pick": [
      "div.news_txt"
    ],
    "hide": [

    ]
  },
  {
    "name": "vice.cn",
    "pattern": "http://www.vice.cn/read/",
    "pick": [
      "div.article-body"
    ],
    "hide": [
      "div.contributor-list",
      "span.site-signature-icon",
      "div.social-share.social-share-btm",
      "div.article-copyright"
    ]
  },
  {
    "name": "jandan.net",
    "pattern": "http://jandan.net/**/*/*.html",
    "pick": [
      ".post"
    ],
    "hide": [
      "h3",
      "div.time_s",
      "h1",
      "div.shang",
      "div",
      "a.jandan-zan",
      "span.comment-big"
    ]
  },
  {
    "name": "news.smzdm.com",
    "pattern": "http*://news.smzdm.com/p/*",
    "pick": [
      "div.news_content"
    ],
    "hide": [
      "h1.item-name",
      "span.embed-card"
    ]
  },
  {
    "name": "post.smzdm.com",
    "pattern": "http*://post.smzdm.com/p/*",
    "pick": [
      "div.news_content"
    ],
    "hide": [
      "h1.item-name",
      "span.embed-card"
    ]
  },
  {
    "name": "news.mydrivers.com",
    "pattern": "http://news.mydrivers.com/*/*/*.htm",
    "pick": [
      "div.news_info"
    ],
    "hide": [
      "div.btnPrev",
      "div.btnNext",
      "div.postpage",
      "div.adggg1",
      "p.news_bq",
      "p.jcuo1",
      "div#weixin",
      "table"
    ]
  },
  {
    "name": "ftchinese.com",
    "pattern": "http://www.ftchinese.com/story/",
    "pick": [
      "div.story-body"
    ],
    "hide": [

    ]
  },
  {
    "name": "young.ifeng.com",
    "pattern": "http://young.ifeng.com/a/*/*.shtml",
    "pick": [
      "div.ya_main_con"
    ],
    "hide": [
      "p.yamc_zrbj",
      "p.yamc_sming",
      "span.ifengLogo",
      "X||//p[text()=\"原标题\"]",
      "X||//strong[text()=\"获取更多有趣又有料的内容\"]",
      "X||//*[contains(@src,\"a76d59f9f93e84b_size52_w700_h236\")]"
    ]
  },
  {
    "name": "news.ifeng.com",
    "pattern": "http://*.ifeng.com/a/*/*.shtml",
    "pick": [
      "div#artical_real"
    ],
    "hide": [
      "span.ifengLogo",
      "X||//p[text()=\"原标题\"]"
    ]
  },
  {
    "name": "news.mtime.com",
    "pattern": "http://news.mtime.com/**/*/*.html",
    "pick": [
      "div#newsContent"
    ],
    "hide": [

    ]
  },
  {
    "name": "feng.com",
    "pattern": "http://*.feng.com/**/*/*.shtml",
    "pick": [
      "div#article_content"
    ],
    "hide": [
      "p.content_title"
    ]
  },
  {
    "name": "caixin.com",
    "pattern": "http://*.caixin.com/*/*.html",
    "pick": [
      "div#Main_Content_Val"
    ],
    "hide": [
      "X||//*[contains(@src,\"favicon\")]"
    ]
  },
  {
    "name": "news.mittrchina.com",
    "pattern": "http*://www.mittrchina.com/news/*",
    "pick": [
      "div.content"
    ],
    "hide": [

    ]
  },
  {
    "name": "m.ithome.com",
    "pattern": "http*://wap.ithome.com/html/*.htm",
    "pick": [
      "div#paragraph"
    ],
    "hide": [

    ]
  },
  {
    "name": "livesino.net",
    "pattern": "https://livesino.net/archives/*.live",
    "pick": [
      "div.post-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "ithome.com",
    "pattern": "https://www.ithome.com/html/**/*/*.htm",
    "pick": [
      "div#paragraph"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.sohu.com",
    "pattern": "http*://news.sohu.com/*/*.shtml",
    "pick": [
      "div#contentText"
    ],
    "hide": [
      "div.conserve-photo"
    ]
  },
  {
    "name": "sohu.com",
    "pattern": "http*://www.sohu.com/a/*_*",
    "pick": [
      "article.article"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.sina.com.cn",
    "pattern": "http*://news.sina.com.cn/**/*/*.shtml",
    "pick": [
      "div.article"
    ],
    "hide": [

    ]
  },
  {
    "name": "tech.sina.com.cn",
    "pattern": "http*://tech.sina.com.cn/**/*/*.shtml",
    "pick": [
      "div#artibody"
    ],
    "hide": [

    ]
  },
  {
    "name": "finance.sina.com.cn",
    "pattern": "http*://finance.sina.com.cn/**/*/*.shtml",
    "pick": [
      "div#artibody"
    ],
    "hide": [
      "X||//p[text()=\"【新浪财经股吧】\"]"
    ]
  },
  {
    "name": "sports.sina.com.cn",
    "pattern": "http*://sports.sina.com.cn/**/*.shtml",
    "pick": [
      "div#artibody"
    ],
    "hide": [

    ]
  },
  {
    "name": "collection.sina.com.cn",
    "pattern": "http*://collection.sina.com.cn/**/*.shtml",
    "pick": [
      "div#artibody"
    ],
    "hide": [

    ]
  },
  {
    "name": "blog.sina.com.cn",
    "pattern": "http*://blog.sina.com.cn/s/*",
    "pick": [
      "div.articalContent"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.workercn.cn",
    "pattern": "http://news.workercn.cn/*/*/**/*.shtml",
    "pick": [
      "div.ad_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.xinhuanet.com",
    "pattern": "http://news.xinhuanet.com/**/*/*.htm",
    "pick": [
      "div#p-detail"
    ],
    "hide": [
      "div.zan-wap",
      "div.p-tags",
      "X||//*[contains(@src,\"129713364_15065013734641n\")]"
    ]
  },
  {
    "name": "news.gold678.com",
    "pattern": "http*://www.gold678.com/C/**/*",
    "pick": [
      "div.news_inter_area"
    ],
    "hide": [

    ]
  },
  {
    "name": "stockstar.com",
    "pattern": "http://*.stockstar.com/*.shtml",
    "pick": [
      "div#container-article"
    ],
    "hide": [

    ]
  },
  {
    "name": "takungpao.com",
    "pattern": "http://*.takungpao.com/**/*/*.html",
    "pick": [
      "div.tpk_text"
    ],
    "hide": [

    ]
  },
  {
    "name": "money.jrj.com.cn",
    "pattern": "http://money.jrj.com.cn/**/*/*.shtml",
    "pick": [
      "div.titimg"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.ynet.com",
    "pattern": "http://news.ynet.com/**/*/*.html",
    "pick": [
      "div#articleAll"
    ],
    "hide": [
      "ul.pageBox",
      "span.authors",
      "a.scrollLeft",
      "a.scrollRight"
    ]
  },
  {
    "name": "qianlong.com",
    "pattern": "http://*.qianlong.com/*/*/*.shtml",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "duozhi.com",
    "pattern": "http*://www.duozhi.com/**/*.shtml",
    "pick": [
      "div.subject-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "app.myzaker.com",
    "pattern": "http*://app.myzaker.com/news/article.php*",
    "pick": [
      "div#content"
    ],
    "hide": [
      "p#ID_disclaimer"
    ]
  },
  {
    "name": "m.kankanews.com",
    "pattern": "http*://m.kankanews.com/n/**/*.html",
    "pick": [
      "div.content"
    ],
    "hide": [
      "p.download"
    ]
  },
  {
    "name": "kankanews.com",
    "pattern": "http*://www.kankanews.com/a/**/*.shtml",
    "pick": [
      "div.textBody"
    ],
    "hide": [
      "p#kankan_bq"
    ]
  },
  {
    "name": "cbnweek.com",
    "pattern": "https://www.cbnweek.com/articles/normal/*",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "user.guancha.cn",
    "pattern": "http://user.guancha.cn/main/content?id=*",
    "pick": [
      "div.article-txt"
    ],
    "hide": [
      "ul.pagination"
    ]
  },
  {
    "name": "guancha.cn",
    "pattern": "http://www.guancha.cn/*/*.shtml",
    "pick": [
      "div.all-txt"
    ],
    "hide": [

    ]
  },
  {
    "name": "article.myzaker.com",
    "pattern": "http*://www.myzaker.com/article/*/",
    "pick": [
      "div.article_content"
    ],
    "hide": [

    ]
  },
  {
    "name": "people.com.cn",
    "pattern": "http://*.people.com.cn/**/*/*.html",
    "pick": [
      "div.box_con"
    ],
    "hide": [
      "div.edit"
    ]
  },
  {
    "name": "chinanews.com",
    "pattern": "http://www.chinanews.com/*/**/*/*.shtml",
    "pick": [
      "div.left_zw"
    ],
    "hide": [
      "table"
    ]
  },
  {
    "name": "m.toutiaocdn.com",
    "pattern": "http*://m.toutiaocdn.com/*",
    "pick": [
      "div.article__content"
    ],
    "hide": [

    ]
  },
  {
    "name": "toutiao.com",
    "pattern": "http*://www.toutiao.com/a*/",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "toutiao.com",
    "pattern": "http*://www.toutiao.com/i*/",
    "pick": [
      "div.article-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "cwzg.cm",
    "pattern": "http://www.cwzg.cn/*/*/*.html",
    "pick": [
      "div#article"
    ],
    "hide": [

    ]
  },
  {
    "name": "idianzixun.com",
    "pattern": "http://www.yidianzixun.com/article/*",
    "pick": [
      "div.content-bd"
    ],
    "hide": [
      "div.postfix",
      "p.yidian-wm-copyright-bottom"
    ]
  },
  {
    "name": "reader.s-reader.com",
    "pattern": "http://reader.s-reader.com/article/*/*.html",
    "pick": [
      "div.content"
    ],
    "hide": [
      "h1"
    ]
  },
  {
    "name": "news.163.com",
    "pattern": "http*://news.163.com/**/*/*.html",
    "pick": [
      "div#endText"
    ],
    "hide": [
      "div.ep-source"
    ]
  },
  {
    "name": "renjian.163.com",
    "pattern": "http*://renjian.163.com/**/*/*.html",
    "pick": [
      "div#endText"
    ],
    "hide": [
      "div.ep-source",
      "div.ep-pages",
      "p.end"
    ]
  },
  {
    "name": "dy.163.com",
    "pattern": "http*://dy.163.com/v2/article/detail/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "tech.163.com",
    "pattern": "http*://*.163.com/**/*/*.html",
    "pick": [
      "div.post_text"
    ],
    "hide": [
      "div.ep-source.cDGray"
    ]
  },
  {
    "name": "mi.techweb.com.cn",
    "pattern": "http*://mi.techweb.com.cn/tmt/*/*.shtml",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "techweb.com.cn",
    "pattern": "http*://www.techweb.com.cn/*/*/*.shtml",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "donews.com",
    "pattern": "http://www.donews.com/**/*/*.html",
    "pick": [
      ".article-con"
    ],
    "hide": [

    ]
  },
  {
    "name": "flashnews.donews.com",
    "pattern": "http://www.donews.com/flashnews/detail/",
    "pick": [
      ".article-con"
    ],
    "hide": [

    ]
  },
  {
    "name": "newseed.pedaily.cn",
    "pattern": "http://newseed.pedaily.cn/*/*.shtml",
    "pick": [
      "div#news-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.newseed.cn",
    "pattern": "http*://news.newseed.cn/p/*",
    "pick": [
      "div#news-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "digi.tech.qq.com",
    "pattern": "http://digi.tech.qq.com/a/*/*.htm",
    "pick": [
      "div.Cnt-Main-Article-QQ"
    ],
    "hide": [
      "p.titdd-Article",
      "div.wxdigi",
      "a#backqqcom"
    ]
  },
  {
    "name": "m.qq.com",
    "pattern": "http*://xw.qq.com/*/*/*",
    "pick": [
      "div.article_body"
    ],
    "hide": [

    ]
  },
  {
    "name": "qq.com",
    "pattern": "http://*.qq.com/a/*/*.htm",
    "pick": [
      "div#Cnt-Main-Article-QQ"
    ],
    "hide": [

    ]
  },
  {
    "name": "view.inews.qq.com",
    "pattern": "http://view.inews.qq.com/a/",
    "pick": [
      "div#content"
    ],
    "hide": [
      "p.title",
      "div.src"
    ]
  },
  {
    "name": "view2.inews.qq.com",
    "pattern": "http://view.news.qq.com/original/intouchtoday/*.html",
    "pick": [
      "div#articleContent"
    ],
    "hide": [

    ]
  },
  {
    "name": "new.qq.com",
    "pattern": "http*://new.qq.com/**/*/*.html",
    "pick": [
      "div.content-article"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.china.com.cn",
    "pattern": "http://news.china.com.cn/**/*/*.htm",
    "pick": [
      "div#articleBody"
    ],
    "hide": [

    ]
  },
  {
    "name": "article.huanqiu.com/",
    "pattern": "http*://*.huanqiu.com/*/*/*.html",
    "pick": [
      "div.la_con"
    ],
    "hide": [
      "div.editorSign",
      "div.reTopics"
    ]
  },
  {
    "name": "news.mindynode.com",
    "pattern": "https://news.mindynode.com/zh/links/*",
    "pick": [
      "div#parsed_content"
    ],
    "hide": [
      "div.reTopics",
      "p.read-art-extra-bonus",
      "div.editorSign"
    ]
  },
  {
    "name": "8btc.com",
    "pattern": "http://www.8btc.com/*-*",
    "pick": [
      ".article-content"
    ],
    "hide": [
      "div.content-source-info",
      "div.content-bottom"
    ]
  },
  {
    "name": "wiki.8btc.com",
    "pattern": "http://www.8btc.com/wiki/*",
    "pick": [
      "div.col-xs-12"
    ],
    "hide": [
      "div.page-title"
    ]
  },
  {
    "name": "vip.qikan.com",
    "pattern": "http://nlc.vip.qikan.com/text/Article.aspx*",
    "pick": [
      "div.newartbox"
    ],
    "hide": [

    ]
  },
  {
    "name": "zhidx.com",
    "pattern": "http://zhidx.com/p/",
    "pick": [
      "div.finCnt"
    ],
    "hide": [
      "X||//*[contains(@src,\"ZDX-Card-for-PC-e1466578693228\")]"
    ]
  },
  {
    "name": "iheima.com",
    "pattern": "http://www.iheima.com/zixun/*/*/*.shtml",
    "pick": [
      "div.main-content"
    ],
    "hide": [
      "div.title",
      "div.outline",
      "div.author",
      "div.copyright",
      "div.mesinfo",
      "div.article-list",
      "div.mobile-common"
    ]
  },
  {
    "name": "pintu360.com",
    "pattern": "http*://www.pintu360.com/article/",
    "pick": [
      ".article-content .text"
    ],
    "hide": [

    ]
  },
  {
    "name": "tech2ipo.com",
    "pattern": "http://tech2ipo.com/*",
    "pick": [
      "div.content"
    ],
    "hide": [

    ]
  },
  {
    "name": "column.iresearch.cn",
    "pattern": "http://column.iresearch.cn/b/*/*.shtml",
    "pick": [
      "div.m-article"
    ],
    "hide": [

    ]
  },
  {
    "name": "news.iresearch.cn",
    "pattern": "http://news.iresearch.cn/content/**/*/*.shtml",
    "pick": [
      "div.m-article"
    ],
    "hide": [
      "div.review"
    ]
  },
  {
    "name": "lanjingtmt.com",
    "pattern": "http://www.lanjingtmt.com/news/detail/",
    "pick": [
      "div#pageTxt"
    ],
    "hide": [
      "div.dm_zy",
      "X||//*[contains(@src,\"1438828721808210\")]"
    ]
  },
  {
    "name": "timetimetime.net",
    "pattern": "http://www.timetimetime.net/*/*.html",
    "pick": [
      ".neir"
    ],
    "hide": [

    ]
  },
  {
    "name": "mifengtd.cn",
    "pattern": "http://www.mifengtd.cn/articles/",
    "pick": [
      "div.e-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "vgtime.com",
    "pattern": "http://www.vgtime.com/article/",
    "pick": [
      "div.paragraph"
    ],
    "hide": [

    ]
  },
  {
    "name": "keke289.com",
    "pattern": "http://www.keke289.com/news/",
    "pick": [
      "section.article-bd"
    ],
    "hide": [
      "div.article-annotation",
      "X||//strong[text()=\"关注科客网官方微信kekebat\"]"
    ]
  },
  {
    "name": "ebrun.com",
    "pattern": "http://www.ebrun.com/*/*.shtml",
    "pick": [
      "div.cmsDiv"
    ],
    "hide": [
      "p.ybfirst_go",
      "div#corp",
      "X||//*[contains(@src,\"2017013185214858280529103\")]",
      "X||//span[text()=\"百人讲新年纳新 588份精华课件免费赠\"]",
      "X||//p[text()=\"【版权提示】亿邦动力网倡导尊重与保护知识产权。\"]"
    ]
  },
  {
    "name": "cokeji.com",
    "pattern": "http://www.cokeji.com/*.html",
    "pick": [
      "div.single-main"
    ],
    "hide": [

    ]
  },
  {
    "name": "199it.com",
    "pattern": "http://www.199it.com/archives/",
    "pick": [
      "div.entry-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "aliresearch.com",
    "pattern": "http://www.aliresearch.com/blog/article/detail/id/",
    "pick": [
      "section#contents"
    ],
    "hide": [

    ]
  },
  {
    "name": "cn.engadget.com",
    "pattern": "http*://cn.engadget.com/*/*/*/*/",
    "pick": [
      "div.article-text"
    ],
    "hide": [

    ]
  },
  {
    "name": "chinaventure.com.cn",
    "pattern": "https://www.chinaventure.com.cn/cmsmodel/news/detail/",
    "pick": [
      "div.content_01"
    ],
    "hide": [

    ]
  },
  {
    "name": "baijia.baidu.com",
    "pattern": "https://baijia.baidu.com/s?id=*",
    "pick": [
      "section.news-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "jingyan.baidu.com",
    "pattern": "http*://jingyan.baidu.com/article/*.html",
    "pick": [
      "div#format-exp"
    ],
    "hide": [
      "span.exp-album-enter-mask",
      "span.enter-step-btn",
      "span.last-item-end",
      "div.quote-item",
      "div.list-icon"
    ]
  },
  {
    "name": "g-cores.com",
    "pattern": "http://www.g-cores.com/articles/",
    "pick": [
      "div.story"
    ],
    "hide": [

    ]
  },
  {
    "name": "tieba.baidu.com",
    "pattern": "http*://tieba.baidu.com/p/*",
    "pick": [
      ".p_content"
    ],
    "hide": [
      "span.apc_src_wrapper",
      "div.save_face_bg_2"
    ]
  },
  {
    "name": "qgc.qq.com",
    "pattern": "http*://qgc.qq.com/*/t/*",
    "pick": [
      ".pctmessage"
    ],
    "hide": [
      "span.apc_src_wrapper",
      "div.save_face_bg_2"
    ]
  },
  {
    "name": "article.chiphell.com",
    "pattern": "https://www.chiphell.com/article-*.html",
    "pick": [
      "table.vwtb"
    ],
    "hide": [
      "i.pstatus"
    ]
  },
  {
    "name": "chiphell.com",
    "pattern": "https://www.chiphell.com/thread-*.html",
    "pick": [
      ".t_f"
    ],
    "hide": [
      "i.pstatus",
      "X||//*[contains(@src,\"none.gif\")]",
      "div.aimg_tip"
    ]
  },
  {
    "name": "worldcup.fifa.com",
    "pattern": "http*://www.fifa.com/worldcup/news/*",
    "pick": [
      "div.d3-o-article__body"
    ],
    "hide": [

    ]
  },
  {
    "name": "voice.hupu.com",
    "pattern": "http*://voice.hupu.com/*/*.html",
    "pick": [
      "div.artical-content-read"
    ],
    "hide": [

    ]
  },
  {
    "name": "bbs.hupu.com",
    "pattern": "https://bbs.hupu.com/*.html",
    "pick": [
      "table.case"
    ],
    "hide": [
      "div.video-play-1",
      "div.vote_box"
    ]
  },
  {
    "name": "qu.la",
    "pattern": "http://www.qu.la/book/*/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [
      "X||//a[text()=\"章节错误,点此举报\"]"
    ]
  },
  {
    "name": "biquge.com.tw",
    "pattern": "http://www.biquge.com.tw/**/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "xxbiquge.com",
    "pattern": "http://www.xxbiquge.com/**/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [
      "X||//a[text()=\"章节错误,点此举报\"]"
    ]
  },
  {
    "name": "biquge5200.com",
    "pattern": "http://www.biquge5200.com/**/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "piaotian.com",
    "pattern": "http://www.piaotian.com/html/**/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [
      "h1",
      "div.toplink",
      "table"
    ]
  },
  {
    "name": "zanghaihua.org",
    "pattern": "http://www.zanghaihua.org/*.html",
    "pick": [
      "div.bookcontent"
    ],
    "hide": [

    ]
  },
  {
    "name": "read.qidian.com",
    "pattern": "https://read.qidian.com/chapter/**/*",
    "pick": [
      "div.read-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "vipreader.qidian.com",
    "pattern": "https://vipreader.qidian.com/chapter/**/*",
    "pick": [
      "div.read-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "37zw.net",
    "pattern": "http*://www.37zw.net/**/*.html",
    "pick": [
      "div#content"
    ],
    "hide": [

    ]
  },
  {
    "name": "lofter.com",
    "pattern": "http://*.lofter.com/post/*",
    "pick": [
      ".content",
      ".text"
    ],
    "hide": [

    ]
  },
  {
    "name": "pin-cong.com",
    "pattern": "https://www.pin-cong.com/p/*",
    "pick": [
      ".post-text"
    ],
    "hide": [

    ]
  },
  {
    "name": "bbs.tianya.cn",
    "pattern": "http://bbs.tianya.cn/*.shtml",
    "pick": [
      ".bbs-content"
    ],
    "hide": [

    ]
  },
  {
    "name": "applysquare.com",
    "pattern": "https://www.applysquare.com/topic-cn/*",
    "pick": [
      ".qa-html-content"
    ],
    "hide": [
      "span.show-content"
    ]
  }
]
)
