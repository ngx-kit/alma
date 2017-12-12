# Alma by [ngx-kit](https://ngx-kit.com)

Demonstration of Angular eCommerce project based on [ngx-kit](https://ngx-kit.com).

[**Watch the demo!**](https://alma.ngx-kit.com)

[![alma screenshot](./screenshot.png)](https://alma.ngx-kit.com)

Now in active development, some features are incomplete or stubbed.


## Features

* Angular 5
* Lazy-loading
* AOT
* PWA
* Server-side rendering
* Docker build


## Modules

* Home
* Products
* Auth
* Bag
* Checkout


## Usage

Installation:

* Clone
* `npm i`

Dev:

* `npm start`
* open `localhost:4200`

Default browser build:

* `npm run build:browser`

SSR Build:

* `npm run build:server`
* `serve:server`
* open `localhost:4000`

Docker:

* Update docker image name in `package.json` (replace `dhub.nvx.me:443/ngx-kit-ui-alma` with your url)
* `npm run docker:build`
* `npm run docker:run`
* open `localhost:4001`

Docker deploy:

* `npm run deploy`
* App will be exposed on port 4000.
