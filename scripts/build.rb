#!/usr/bin/env ruby

require 'jekyll'

def build_site
    conf = Jekyll.configuration({
        'source'      => '.',
        'destination' => '_site'
    })

    Jekyll::Site.new(conf).process
end

def main
    build_site
end

if __FILE__ == $0
    main
end
