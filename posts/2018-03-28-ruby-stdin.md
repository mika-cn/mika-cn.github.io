---
layout: post
title:  "实验: ruby 标准输入(STDIN)"
date:   2018-03-28 07:33:35 +0800
tags: ruby
categories: ruby
---
> 本文探索了: ruby 脚本编程，获取输入的相关对象: ARGV, ARGF, $stdin

# ARGV 对象<a name="head-argv" />

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



# ARGF 对象<a name="head-argf" />

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

# 全局变量 $stdin<a name="head-stdin" />

表示当前环境的标准输入, 它的类是`IO`
```ruby
irb> $stdin
#<IO:<STDIN>>
```
`IO`类有个实例方法 `#tty?` 官方文档解释为:

Returns true if ios is associated with a terminal device (tty), false otherwise.

咋看之下，不知所云 :(

```shell
$ cat stdin_tty_test.rb
puts $stdin.tty?

# 调用
$ ruby stdin_tty_test.rb a b
true
$ cat file.txt | ruby stdin_tty_test.rb a b
false
$ ruby stdin_tty_test.rb a b < file.txt
false
```

所以 `#tty?` 可以作为判断有无标准输入的依据...
```ruby
if !$stdin.tty?
  $stdin.each do |line|
    puts line
  end
end
```
