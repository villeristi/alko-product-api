# Alko Product API

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/villeristi/alko-product-api/blob/develop/LICENSE)

Alko products as an API! A.k.a Alkon tuotetietokanta rajapintana.

Built with:
* [Koa API Boilerplate](https://github.com/villeristi/koa-api-boilerplate)
* [Koa](https://github.com/koajs/koa)
* [Koa Better Router](https://github.com/tunnckoCore/koa-better-router)
* [Koa Better Body](https://github.com/tunnckoCore/koa-better-body)
* [Cors](https://github.com/evert0n/koa-cors)
* [Helmet](https://github.com/venables/koa-helmet)
* [JOI schema-validator](https://github.com/hapijs/joi)
* [JSONAPI Serializer](https://github.com/SeyZ/jsonapi-serializer)
* [Babel](https://babeljs.io/)
* [Morgan](https://github.com/expressjs/morgan)
* [Debug](https://github.com/visionmedia/debug)
* [ESLint](http://eslint.org/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* ...and many more

## Getting started

1. Be sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed globally.
2. Clone the repo & run `yarn` from the project root
3. Copy `.env.example to .env`
4. import product-catalog (you can find the up-to-date-catalog [here](https://www.alko.fi/valikoimat-ja-hinnasto/hinnasto)) with `yarn importData path/to/catalog.xls`

## Available commands

```sh
yarn importData
```

Imports local .xls-file to DB.

```sh
yarn start
```

Runs `Babel` watch-command & starts server on [http://127.0.0.1](http://127.0.0.1) on `PORT` specified in `.env` -file (defaults to 8080, [http://127.0.0.1:8080](http://127.0.0.1:8080)).

**Note!** To start debugging (on DEV), start the app on Linux / OSX with `DEBUG=alko-product-api yarn start` and on Windows with `set DEBUG=alko-product-api yarn start`

```sh
yarn lint
```

Lints JS-files inside `/src` directory

```sh
yarn build
```

Transforms ES6-syntax and builds (+minifies) the project to `/build` directory.
