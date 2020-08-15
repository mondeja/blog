# mondeja's blog (WIP)

My personal portfolio and (cooming soon) blog, see it [here](https://mondeja.github.io/blog).

> Built with [Jekyll](https://jekyllrb.com) and served with [Github Pages](https://pages.github.com/).

Forked from [jekyll-uno-timeline](https://github.com/tzuehlke/jekyll-uno-timeline) and customized to improve the loading time and fit me needs. You can use it as your own, but do not publish my personal identity.

## Setup (Linux)

> Ruby >= 2.5 required. 

1. `gem install bundle`
2. `bundle config set path 'vendor/bundle' && bundle install`
3. Configure your personal information in `_config.yml`.
4. Configure your Github projects timeline translating the information for each in `_i18n/{lang}.yml`, at `timeline` array.
5. Replace the default thumbnail (`assets/img/thumbnail.jpg`) and header background (`assets/img/header-background.jpg`) images and update the sources if needed in `_includes/header.html`. 
6. Generate your favicons using a tool like [favicon-generator](https://realfavicongenerator.net/), place your favicons at `assets/img/favicons/` directory and edit the include file `_includes/head.html` to point at your favicons. When you will serve in production, use a favicon checker like [this](https://realfavicongenerator.net/favicon_checker) to check if all are included. 

## Commands

- **Build**: `bundle exec rake build`
- **Serve**: `bundle exec jekyll serve`

## TODO

- [x] Include mobile buttons menu in panel for smaller screens.
- [x] Replace the default favicon with my own thumbnail.
- [x] Translate the page from English to Spanish and French.
- [ ] Include a language selector.
- [ ] Render my CV with Latex in multiples languages at building step and serve the PDF files accordingly to the user language.
- [ ] Include a button to hide the timeline at the header right.
- [ ] Include a posts list that will be shown under the current page when user clicks on the buttom `Blog` .
- [ ] Include a contact section with a basic form (serverless? investigate it).
