require 'kramdown'
require 'ostruct'

def render(page, html)
  template = File.open(page.template).read
  template = template.gsub('$title', page.title)
  template = template.gsub('$description', page.description)
  template.gsub('$html', html);
end

def render_markdown(page)
  page = OpenStruct.new(page)
  text = File.open(page.md_path).read
  text = text.gsub('```', '~~~')
  html = Kramdown::Document.new(text).to_html

  # support w3m browser :)
  html = html.gsub(/^\s*<table>\s*$/) {|match| match.gsub('table', 'table border=1')}
  indexHtml = render(page, html);
  File.open(page.html_path, 'w'){|f| f.write indexHtml}
end



pages = []
pages.push({
  title: 'MaoXian Web Clipper Home Page',
  description: 'A web extension to clip information from web page. save to your local machine to avoid information invalidation. Not bored registration, Not charged.',
  md_path: './index.md',
  html_path: './index.html',
  template: './markdown.template.html'
})

pages.push({
  title: 'MaoXian Web Clipper - Home Page',
  description: 'A web extension to clip information from web page. save to your local machine to avoid information invalidation. Not bored registration, Not charged.',
  md_path: './index-zh-CN.md',
  html_path: './index-zh-CN.html',
  template: './markdown.template.html'
})

pages.push({
  title: 'FAQ - MaoXian Web Clipper',
  description: 'FAQ ',
  md_path: './faq.md',
  html_path: './faq.html',
  template: './markdown.template.html'
})

pages.push({
  title: 'FAQ - MaoXian Web Clipper',
  description: 'FAQ ',
  md_path: './faq-zh-CN.md',
  html_path: './faq-zh-CN.html',
  template: './markdown.template.html'
})


pages.push({
  title: 'Install by CRX - MaoXian Web Clipper',
  description: 'Install MaoXian Web Clipper by crx file',
  md_path: './chrome-install-by-crx.md',
  html_path: './chrome-install-by-crx.html',
  template: './markdown.template.html'
})

pages.push({
  title: 'Change log - MaoXian Web Clipper',
  description: 'Change log of Maoxian Meb Clipper',
  md_path: './change-log.md',
  html_path: 'change-log.html',
  template: './markdown.template.html'
})

pages.push({
  title: 'Native application - MaoXian Web Clipper',
  description: 'Native application page of Maoxian Web Clipper',
  md_path: './native-app/index.md',
  html_path: './native-app/index.html',
  template: './native-app/markdown.template.html'
})

pages.push({
  title: 'Native application - MaoXian Web Clipper',
  description: 'Native application page of Maoxian Web Clipper',
  md_path: './native-app/index-zh-CN.md',
  html_path: './native-app/index-zh-CN.html',
  template: './native-app/markdown.template.html'
})

pages.each {|page| render_markdown(page) }

=begin
pages.push({
  title: '',
  description: '',
  md_path: '',
  html_path: ''
})
=end
