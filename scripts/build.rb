#!/usr/bin/env ruby

require 'fileutils'
require 'pathname'

require 'jekyll'

$site_conf = nil

def load_site_config
    $site_conf = Jekyll.configuration({
        'source'      => '.',
        'destination' => '_site'
    })
end

def build_site
    Jekyll::Site.new($site_conf).process
end

def exclude_from_localizations
    # exclude_from_localizations settings seems not to work
    #   using static files on includes, so remove the `css/` folders
    #   included in localization folders
    #   kurtsson/jekyll-multiple-languages-plugin#166

    # folders to exlude
    exclude_folders = $site_conf['exclude_from_localizations']

    # destination languages
    dst_languages = $site_conf['languages'][1..]

    # `_site` directory path
    site_dirpath = File.join(Dir.pwd, $site_conf['destination'])

    dst_languages.each do |lang|
        site_lang_dirpath = File.join(site_dirpath, lang)

        exclude_folders.each do |exclude_folder|
            exclude_folder_dirpath = File.join(
                site_lang_dirpath, Pathname.new(exclude_folder).cleanpath)
            if File.directory?(exclude_folder_dirpath)
                FileUtils.rm_rf(exclude_folder_dirpath)
            end
        end
    end
end

def main
    load_site_config
    build_site
    exclude_from_localizations
end

if __FILE__ == $0
    main
end
