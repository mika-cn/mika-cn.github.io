
require "rss"

rss = RSS::Maker.make("atom") do |maker|
  maker.channel.author = "Mika"
  maker.channel.updated = Time.now.to_s
  maker.channel.about = "https://mika-cn.github.io/maoxian-web-clipper/feed.xml"
  maker.channel.title = "MaoXian Web Clipper"

  news = [
    {
      version: '0.1.38',
      content: "MaoXian Web Clipper 0.1.37 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0137",
      created_at: "2019-9-3 15:10:00 +0800"
    },
    {
      version: '0.1.37',
      content: "MaoXian Web Clipper 0.1.37 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0137",
      created_at: "2019-8-30 13:10:00 +0800"
    },
    {
      version: '0.1.36',
      content: "MaoXian Web Clipper 0.1.36 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0136",
      created_at: "2019-8-13 18:10:00 +0800"
    },
    {
      version: '0.1.35',
      content: "MaoXian Web Clipper 0.1.35 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0135",
      created_at: "2019-8-06 15:30:00 +0800"
    },
    {
      version: '0.1.34',
      content: "MaoXian Web Clipper 0.1.34 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0134",
      created_at: "2019-7-27 16:30:00 +0800"
    },
    {
      version: '0.1.31',
      content: "MaoXian Web Clipper 0.1.31 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0131",
      created_at: "2019-2-04 10:00:00 +0800"
    },
    {
      version: '0.1.27',
      content: "MaoXian Web Clipper 0.1.27 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0127",
      created_at: "2019-2-04 10:00:00 +0800"
    },
    {
      version: '0.1.15',
      content: "MaoXian Web Clipper 0.1.15 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0115",
      created_at: "2018-12-03 14:00:00 +0800"
    },
    {
      version: '0.1.14',
      content: "MaoXian Web Clipper 0.1.14 is released, MaoXian is programable now :)",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0114",
      created_at: "2018-12-01 12:00:00 +0800"
    },
    {
      version: '0.1.12',
      content: "MaoXian Web Clipper 0.1.12 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v0112",
      created_at: "2018-10-16 14:00:00 +0800"
    },
    {
      version: '0.1.9',
      content: "MaoXian Web Clipper 0.1.9 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v019",
      created_at: "2018-09-21 12:00:00 +0800"
    },
    {
      version: '0.1.8',
      content: "MaoXian Web Clipper 0.1.8 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v018",
      created_at: "2018-09-19 11:00:00 +0800"
    },
    {
      version: '0.1.7',
      content: "MaoXian Web Clipper 0.1.7 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v017",
      created_at: "2018-09-10 20:00:00 +0800"
    },
    {
      version: '0.1.6',
      content: "MaoXian Web Clipper 0.1.6 is released",
      link: "https://mika-cn.github.io/maoxian-web-clipper/change-log.html?#v016",
      created_at: "2018-08-28 12:00:00 +0800"
    },
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
