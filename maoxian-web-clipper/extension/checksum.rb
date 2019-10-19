#!/usr/bin/env ruby
# usage:
#   ./checksum file(file or folder)

module Checksum
  def self.check(file)
    content = String.new
    content << "\nMD5    : #{checksum('md5sum', file)}"
    content << "\nSHA256 : #{checksum('sha256sum', file)}"
    content << "\nSHA512 : #{checksum('sha512sum', file)}"
  end

  def self.checksum(cmd, file)
    return `#{cmd} #{file}`.split(' ').first
  end
end

def checksum(filepath)
  checksum_filepath = [filepath, 'checksum', 'txt'].join('.')
  File.open(checksum_filepath, 'w') do |file|
    file.write Checksum.check(filepath)
  end
  puts "Done! #{filepath}"
end

def main(filepath)
  if File.exist? filepath
    if File.directory? filepath
      Dir.glob("#{filepath}/*.{crx,xpi,zip}") do |filepath|
        checksum(filepath)
      end
    else
      checksum(filepath)
    end
  else
    STDERR.puts "File not exist: #{filename}"
  end
end

def run
  filename = ARGV[0]

  if filename.nil?
    STDERR.puts "file was not provided. usage: ./checksum file"
    exit 1
  end

  filepath = File.expand_path("../#{filename}", __FILE__)
  main(filepath)
end


run
