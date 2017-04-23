#!/bin/bash

set -e

# https://gist.github.com/DarrenN/8c6a5b969481725a4413
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")

# prebuild
echo --------- Installing local dependencies
npm install > /dev/null

# build the site app locally
echo --------- Building site SPA
gulp > /dev/null

# build
# Change `IMAGE_NAME` to whatever you want to call your image.
echo --------- Building image with IMAGE_NAME
docker build . -t IMAGE_NAME:latest -t IMAGE_NAME:$PACKAGE_VERSION

echo --------- Done!
