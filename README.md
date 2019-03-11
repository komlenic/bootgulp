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

* Compresses gif, jpeg, png, and svg files

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

2. Install the `gulp` command globally if it is not already installed, and
   verify.

      ```bash
      npm install --global gulp-cli
      gulp --version
      ```

3. Clone this repository and execute `npm install`.

      ```bash
      git clone https://github.com/komlenic/bootgulp.git myproject
      cd myproject
      npm install
      ```

## Usage

Coming soon.

## License

[MIT](./LICENSE.txt)