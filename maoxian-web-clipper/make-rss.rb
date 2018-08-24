
require "rss"

rss = RSS::Maker.make("atom") do |maker|
  maker.channel.author = "Mika"
  maker.channel.updated = Time.now.to_s
  maker.channel.about = "https://mika-cn.github.io/maoxian-web-clipper/feed.xml"
  maker.channel.title = "MaoXian Web Clipper"

  news = [
    {
      version: '0.1.5',
      content: "MaoXian Web Clipper 0.1.5 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v015",
      created_at: "2018-08-24 12:00:00 +0800"
    },
    {
      version: '0.1.4',
      content: "MaoXian Web Clipper 0.1.4 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v014",
      created_at: "2018-08-20 12:00:00 +0800"
    },
    {
      version: '0.1.3',
      content: "MaoXian Web Clipper 0.1.3 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v013",
      created_at: "2018-07-31 01:00:00 +0800"
    },
    {
      version: '0.1.2',
      content: "MaoXian Web Clipper 0.1.2 is released, [important] bug on windows platform fixed.",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v012",
      created_at: "2018-07-26 16:00:00 +0800"
    },
    {
      version: '0.1.1',
      content: "MaoXian Web Clipper 0.1.1 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v011",
      created_at: "2018-07-26 09:00:00 +0800"
    },
    {
      version: '0.1.0',
      content: "MaoXian Web Clipper 0.1.0 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v010",
      created_at: "2018-07-25 09:00:00 +0800"
    },
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
