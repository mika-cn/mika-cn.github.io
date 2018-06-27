require 'kramdown'

def render(html)
  template = File.open('./index.template.html').read
  template.gsub('$html', html);
end

text = File.open('./index.md').read
html = Kramdown::Document.new(text).to_html
indexHtml = render(html);
File.open('./index.html', 'w'){|f| f.write indexHtml}
