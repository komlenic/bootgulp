/**
 * @file setup.js
 *
 * Sets up a new bootgulp project.
 *
 * @license MIT
 * @copyright 2019 Chris Komlenic
 */

const shell      = require('shelljs');
const appRootDir = process.env.INIT_CWD + '/';

// Definte directories to be created in project root directory.
var dirs = [
  'dist/css',
  'dist/fonts',
  'dist/img',
  'dist/js',
  'src/scss',
  'src/fonts',
  'src/img',
  'src/js',
]

// Create paths in project root directory.
dirs.forEach(function(dir) {
  shell.mkdir('-p', appRootDir + dir);
})

// Ensure all of src is copied into project root directory.
shell.cp('-R', 'src', appRootDir);

// Make local copies of bootstrap SCSS files for modification.
shell.cp(appRootDir + 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss', appRootDir + 'src/scss/_variables-custom.scss');
shell.cp(appRootDir + 'node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss', appRootDir + 'src/scss/_bootstrap-custom.scss');

// Copy gulpfile.
shell.cp('gulpfile.js', appRootDir);

// Run gulp for the first time.
shell.cd(appRootDir);
shell.exec('gulp');
shell.echo('Setup complete.')

