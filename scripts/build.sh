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
echo --------- Building image heartofgold/marvin-admin
docker build . -t heartofgold/marvin-admin:latest -t heartofgold/marvin-admin:$PACKAGE_VERSION

echo --------- Done!
