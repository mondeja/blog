
require 'fileutils'
require 'pathname'

require 'jekyll'

desc 'Builds _site in development'
task :build do
    $site_conf = Jekyll.configuration({
        'source'      => '.',
        'destination' => '_site'
    })

    Jekyll::Site.new($site_conf).process

    # exclude_from_localizations settings seems not to work
    #   using static files on includes, so we need to remove the folders
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
