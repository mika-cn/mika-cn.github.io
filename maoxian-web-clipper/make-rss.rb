
require "rss"

rss = RSS::Maker.make("atom") do |maker|
  maker.channel.author = "Mika"
  maker.channel.updated = Time.now.to_s
  maker.channel.about = "https://mika-cn.github.io/maoxian-web-clipper/feed.xml"
  maker.channel.title = "MaoXian Web Clipper"

  news = [
    {
      version: '0.0.9',
      content: "MaoXian Web Clipper 0.0.9 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v009",
      created_at: "2018-07-24 09:00:00 +0800"
    }
  ]

  news.each do |info|
    maker.items.new_item do |item|
      item.link = info[:link]
      item.title = info[:content]
      item.updated = info[:created_at]
    end
  end
end

output_path = File.expand_path("../feed.xml", __FILE__)
File.open(output_path, 'w') do |f|
  f.write rss
end
puts "Done!"
