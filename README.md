# boostrap-vue-jwt-sample

[![CircleCI](https://circleci.com/gh/cloutzakis/boostrap-vue-jwt-sample.svg?style=shield&circle-token=:circle-ci-badge-token)](https://circleci.com/gh/cloutzakis/boostrap-vue-jwt-sample)
[![codecov](https://codecov.io/gh/cloutzakis/boostrap-vue-jwt-sample/branch/master/graph/badge.svg)](https://codecov.io/gh/cloutzakis/boostrap-vue-jwt-sample)

> A sample app using bootstrap-vue and jwt as authentication (Tests included!).

A [bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue) project for anyone that wants to jump start into building an app using jwt as authentication with [localstorage](https://github.com/marcuswestin/store.js/).

The project includes 3 views (login, register, home).

After logging a token is return which is stored in localstorage (persistance) and added to the Authorization header of every outgoing request of [axios](https://github.com/axios/axios).

The project uses a dummy endpoint which can be re-configured in the config files found in the /config folder.

As testing framework [jest](https://github.com/facebook/jest) is used with coverage > 95%.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
