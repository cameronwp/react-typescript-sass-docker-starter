# React / TypeScript / Sass / Docker Starter

Because writing Webpack configs is like performing black magic incantations.

---

## What's Included

* Gulp / Webpack 2 combo for compiling a SPA.
* A "Hello, world!" demoing the React / Sass combo.
* Test setup with karma and [Enzyme](https://github.com/airbnb/enzyme).
* A little dev server that watches source files and reloads on changes.
* Easy script for building a docker container serving the app (built from `nginx:alpine`).

## What's Not Included

* Production performance best practices - your React components and CSS get compiled into a monolithic ES5 bundle.
* HTTPS... or any kind of server logic. Both the dev server and docker image server are dumb.
* Redux, GraphQL, anything database related.
* Client-side routing. That's a TODO.

## Installation

1. Fork this repo.
2. Install node modules: `npm i`
3. [Install docker](https://docs.docker.com/engine/installation/) (if you haven't already).
4. Make the build script executable: `chmod +x ./scripts/build.sh`
5. If you start building docker images, you'll probably want to give your image a name in scripts/build.sh.

## Usage

### Development

Build the app.

```sh
gulp
```

Run the dev server (should automatically open a browser tab to your app and reload it when you save changes).

```sh
gulp serve
```

Test your components once.

```sh
npm t
```

Watch files and continuously test in Chrome.

```sh
npm run test:watch
```

### Building the Docker Image

```sh
./scripts/build.sh
```

Note that the image will automatically get tagged as `IMAGE_NAME:latest` and `IMAGE_NAME:VERSION` where `VERSION` is the version specified in package.json.

### Running the Docker Image

```sh
docker run -it IMAGE_NAME
```

## Tips

* Try [VS Code](https://code.visualstudio.com/Download)! [VS Code + TS = ❤](https://code.visualstudio.com/docs/languages/typescript). VS Code will automatically pick up your TS typings and provide useful intellisense suggestions as you work. It's also super easy to get [eslint up and running](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
* The docker image isn't really meant for dev work. I'd avoid using it for anything but hosting your app.

---

PRs will be happily reviewed!
