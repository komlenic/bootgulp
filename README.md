# BootGulp

An easy-to-use Bootstrap and Gulp project starter kit.

BootGulp in-effect, *bootstraps* a new [Bootstrap](https://getbootstrap.com/)
project that uses [Gulp](https://gulpjs.com/) to automate development workflow,
and that uses [npm](https://www.npmjs.com/) to manage its dependencies.

## Features

Out of the box, BootGulp creates a typical src/dist file structure that
separates source files from files generated for use in production environments.
Theming or modifying Bootstrap is simplified by providing clearly-identified
locations to make modifications and change default styles, or to add custom
JavaScript. BootGulp also automates the following processing of code and files:

### Sass/CSS

* Preprocesses .scss files into CSS
* Autoprefixes CSS as needed to support older web browsers
* Minifies CSS
* Concatenates CSS files into one file

### JavaScript

* Minifies JS
* Concatenates JS into one file

### Images

* Losslessly compresses gif, jpeg, png, and svg files

### HTML

* Minifies HTML and embedded JS/CSS

## Installation

1. [Install nodejs](https://nodejs.org/en/download/) if it is not already
   installed. Check if `node` and `npm` are already installed (or verify that
   installation was successful).

      ```bash
      node --version
      npm --version
      ```

2. Install the `gulp` CLI command globally if it is not already installed, and
   verify.

      ```bash
      sudo npm install --global gulp-cli
      gulp --version
      ```

3. Start a new npm project and install BootGulp as a dependency.

      ```bash
      mkdir myproject
      npm init
      npm install bootgulp --save-dev
      ```

## Usage

Once BootGulp has been installed as a dependency on a new npm project, the file
structure will look similar to this.

```bash
├── dist/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   ├── js/
│   ├── demo.html
│   └── index.html
├── node_modules/
├── src/
│   ├── fonts/
│   ├── img/
│   ├── js/
│   ├── scss/
│   ├── demo.html
│   └── index.html
├── gulpfile.js
├── package.json
└── package-lock.json
```

The important locations are noted below.

### `src`

This location is where modifications and additions should be made to content,
Sass files, images, fonts, and any included JavaScript that your project
requires.

### `dist`

This directory is where the final output of the project will be generated and
can be packaged for distribution/publication.

### Available gulp commands

* `gulp` - processes all
* `gulp watch` - processes all, then watches for changes and reprocesses
* `gulp css` - only processes Sass/CSS
* `gulp js` - only processes JavaScript
* `gulp img` - only processes images
* `gulp fonts` - only processes fonts
* `gulp content` - only processes content (html files)

## License

[MIT](./LICENSE.txt)
