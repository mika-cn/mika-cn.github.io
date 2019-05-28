---
layout: post
title:  "ruby 脚本编程，处理参数与输入流"
date:   2018-03-28 07:33:35 +0800
tags: ruby
categories: ruby
---

本文探索了: ruby 脚本编程时候对于参数和输入流的获取, 介绍了ARGV, ARGF 和 $stdin

## ARGV 对象

该对象存储的是调用脚本文件时传入的参数, 本质上是一个字符串数组

```shell
$ cat ./argv_test.rb
puts ARGV.class
puts ARGV.to_s

# 调用
$ ruby ./argv_test.rb a b 1 ./file.txt
Array
["a", "b", "1", "./file.txt"]
```

`ARGV` 就是这么单纯的数组, 所以可以像操作普通数组那样操作它 - 可别被它名字都是大写给迷惑住 :)

唠叨一句, 我们可以通过 `$0` 来获取当前运行的脚本参数 `"./argv_test.rb"`



## ARGF 对象

[官方文档对它的介绍](http://ruby-doc.org/core-2.5.0/ARGF.html)

> ARGF is a stream designed for use in scripts that process files given as command-line arguments or passed in via STDIN.

> ARGF assumes that **any arguments that aren't filenames have been removed from ARGV**

`ARGF` 对象，会拿到 `ARGV` 数组里的参数，把每个参数当作文件名，然后很方便地访问这些文件.
```shell
# 比如
$ cat ./argf_test.rb
ARGF.each do |line|
  puts line
end

# 调用(通过传入文件名)
$ ruby ./argf_test.rb a.txt b.txt
A: Line 1
A: Line 2
B: Line 1
B: Line 2

# 调用(通过标准输入)
$ cat b.txt a.txt | ruby argf_test.rb
B: Line1
B: Line2
A: Line1
A: Line2

$ ruby argf_test.rb < a.txt
A: Line 1
A: Line 2
```

需要注意的是: 使用 `ARGF` 时候, 有个限制需确保`ARGV`的每个参数都能索引到文件

```shell
$ ruby argf_test.rb foo bar a.txt
argf_test.rb:2:in `each': No such file or directory @ rb_sysopen - foo (Errno::ENOENT)
  from argf_test.rb:2:in `<main>'

# ARGF 直接去读 "bar" 文件，结果就出错了
# 看来 ARGF 和 Kernel#gets 的功能差不多
# 注意： ARGF 和 gets 只有在 ARGV 里没有参数时候，才会读取标准输入
```

当然，可以先把非文件名的参数从 `ARGV`里剔除
```ruby
params = ARGV.dup.select do |arg|
  path = arg.start_with?('/') ? arg : File.expand_path("../#{arg}", __FILE__)
  if File.exist?(path)
    false
  else
    ARGV.delete(arg)
    true
  end
end
```

## 全局变量 $stdin

表示当前环境的标准输入, 它的类是`IO`
```ruby
irb> $stdin
#<IO:<STDIN>>
```
`IO`类有个实例方法 `#tty?` 官方文档解释为:

Returns true if ios is associated with a terminal device (tty), false otherwise.

这里讲的 `IO` 和 `Terminal` 关联，有点模糊，到底怎样算关联？ 只能试试了……

测试程序代码:
```ruby
# stdin_tty_test.rb
puts ["tty?:", $stdin.tty?].join
puts ["ARGV:", ARGV.to_s].join


# 为了更清晰，我们一次读一个字节
one_byte = 1
while true do
  char = $stdin.read(one_byte)
  if char.nil?
    puts "EOF"
    break;
  else
    puts char
  end
end
```

测试1:
```shell
$ ruby stdin_tty_test.rb
tty?:true
ARGV:[]
hello <-- 程序在这里等待输入，输入hello并回车
h
e
l
l
o
 <-- 这是换行符, 程序又在等待输入，我中断了它
```

测试2:
```shell
$ ruby stdin_tty_test.rb a b
tty?:true
ARGV:["a", "b"]
 <-- 程序在这里等待输入，情况和上面一样，我中断了它
```


测试3:
```shell
$ echo hello | ruby stdin_tty_test.rb
tty?:false
ARGV:[]
h
e
l
l
o
 <-- 这是换行符
EOF
```

测试4:
```shell
$ echo a b | xargs ruby stdin_tty_test.rb
tty?:false
ARGV:["a", "b"]
EOF
```

测试5:
```shell
$ ruby stdin_tty_test.rb a b < file.txt
tty?:false
ARGV:["a", "b"]
l
i
n
e
1
 <-- 这是换行符
l
i
n
e
2
 <-- 这是换行符
EOF
```

看来只要是调用时用了「管道」、「重定向操作符」或者 调用方为「其他程序(测试四)」时，就是和 Terminal 没关联，也就意味着 $stdin 「默认」有输入，即使是测试四那样也会输入一个 `EOF`。该方法可用来判断默认有无标准输入。

一般情况下我们会用 IO 的 `#each` 方法，一行一行地读取输入，这个方法碰到 `EOF` 会停止读取。

所以，一般会这么写：

```ruby
# stdin_test.rb
if !$stdin.tty?
  $stdin.each do |line|
    puts line
  end
end
```

标准输入，可以用来接「未结束的流」。使用下面脚本创建一个未结束的流

stream.rb
```ruby
#!/usr/bin/env ruby
$stdout.sync = true # not buffer

while true
  sleep 0.2
  $stdout.puts Time.now.strftime("%T.%6N")
end
```

测试:
```shell
$ ./stream | ruby stdin_test.rb
11:45:54.884777
11:45:55.084989
11:45:55.285202
11:45:55.485456
11:45:55.685775
11:45:55.885974
11:45:56.086217
11:45:56.286510
11:45:56.486779
11:45:56.687020
11:45:56.887286
.
.
.
```

## 总结

* 如果不涉及处理标准输入，则使用 `ARGV` 就足够了
* 如果只是单纯地文件处理，无需使用其他参数，可利用 `ARGF` 或 `gets`, 方便地处理输入
* 如果有参数且涉及标准输入，则通过`ARGV` 和 `$stdin` 来分别获取参数和标准输入流是比较妥当的选择。
