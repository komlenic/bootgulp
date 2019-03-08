#!/usr/bin/env bash

echo "===> Setting up project..."
mkdir -p dist/css dist/fonts dist/img dist/js src/scss src/fonts src/img src/js
cp ./node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss ./src/scss/_variables-custom.scss
cp ./node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss ./src/scss/_bootstrap-custom.scss

echo "===> Running gulp for the first time..."
gulp

echo "===> Complete."
