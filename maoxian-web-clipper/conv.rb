require 'kramdown'

def render(html)
  template = File.open('./markdown.template.html').read
  template.gsub('$html', html);
end

def render_markdown(md_path, html_path)
  text = File.open(md_path).read
  html = Kramdown::Document.new(text).to_html
  indexHtml = render(html);
  File.open(html_path, 'w'){|f| f.write indexHtml}
end


render_markdown('./index.md', './index.html')
render_markdown('./index-zh-CN.md', './index-zh-CN.html')
render_markdown('./faq.md', './faq.html')
render_markdown('./faq-zh-CN.md', './faq-zh-CN.html')
render_markdown('./chrome-install-by-crx.md', './chrome-install-by-crx.html')
render_markdown('./change-log.md', './change-log.html')

