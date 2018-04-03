# AAR RailroadPM 2.0 Site - Under Construction

This site was originally created by cloning the [Netlify One-Click Hugo CMS project](https://github.com/netlify-templates/one-click-hugo-cms). The relevant information from the original README file appears below, with a few edits to clarify and adapt the content to the **RailroadPM** project.

## Hugo Template for Netlify CMS with Netlify Identity

The original template for this site was built with [Victor Hugo](https://github.com/netlify/victor-hugo) and [Netlify CMS](https://github.com/netlify/netlify-cms), designed and developed by [Darin Dimitroff](http://www.darindimitroff.com/), [spacefarm.digital](https://www.spacefarm.digital).

### How We Got Started with RailroadPM

First we installed [Node.js](https://nodejs.org/en/download/), [Hugo](https://gohugo.io/getting-started/installing/) and [Yarn](https://yarnpkg.com/lang/en/docs/install/). Then we kicked-off development of this site by cloning [this repository](https://github.com/netlify-templates/one-click-hugo-cms), and then running `yarn` from the new folder to install all required dependencies.

We then opened the project in [VSCode](https://code.visualstudio.com/) and started the development server with `npm start`.

### Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the original `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

### CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

### SVG

All SVG icons stored in `site/static/img/icons` are automatically optimized with SVGO (gulp-svgmin) and concatenated into a single SVG sprite stored as a a partial called `svg.html`. Make sure you use consistent icons in terms of viewport and art direction for optimal results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```
