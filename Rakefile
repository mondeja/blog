
require 'fileutils'
require 'pathname'

require 'jekyll'

desc 'Builds _site in development'
task :build do
    site_conf = Jekyll.configuration({
        'source'      => '.',
        'destination' => '_site'
    })

    Jekyll::Site.new(site_conf).process

    # 1. `exclude_from_localizations` setting seems that is not working
    #   using static files on includes, so we need to remove the folders
    #   https://github.com/kurtsson/jekyll-multiple-languages-plugin/issues/166

    # folders to exlude
    exclude_folders = site_conf['exclude_from_localizations']

    # destination languages
    languages = site_conf['languages']
    dst_languages = languages[1..]

    # `_site` directory path
    site_dirpath = File.join(Dir.pwd, site_conf['destination'])

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

    # 2. Remove all curriculums that are not in the language destination
    languages.each do |lang|
        site_lang_dirpath = File.join(site_dirpath, lang)

        cv_lang_dirpath = File.join(site_lang_dirpath, 'assets', 'files', 'cv')

        languages.each do |_lang|
            if _lang == lang
                next
            end

            cv_filepath = File.join(cv_lang_dirpath, _lang + '.pdf')
            File.delete(cv_filepath) if File.exist?(cv_filepath)
        end
    end

end
