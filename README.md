# mondeja's blog

My personal portfolio and (cooming soon) blog, see it [here](https://mondeja.github.io/blog). Built with [Jekyll](https://jekyllrb.com) and served with [Github Pages](https://pages.github.com/).

Forked from [jekyll-uno-timeline](https://github.com/tzuehlke/jekyll-uno-timeline) and customized to improve the loading time and fit me needs. You can use it as your own, but doesn't public my personal identity.

## Setup

> Ruby >= 2.5 required. 

1. `gem install bundle`
2. `bundle install`
3. Configure your personal information in `_config.yml`.
4. Configure your Github projects timeline in `_data/projects.yml`.

## Commands

- **Build**: `bundle exec scripts/build.rb`
- **Serve**: `bundle exec jekyll serve`

## TODO

- [ ] Include mobile icons in panel for smaller screens.
- [ ] Replace the default favicon with my own thumbnail.
- [ ] Include a posts list that will be shown under the current page when user clicks on the buttom `Blog` .
- [ ] Include a language selector and translate the page from English to Spanish and French.
- [ ] Include a contact section with a basic form (serverless? investigate it).
- [ ] Render my CV with Latex in multiples languages at building step and serve the PDF files accordingly to the user language.
- [ ] Include a button to hide the timeline at the header right.
