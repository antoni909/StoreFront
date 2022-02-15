<h1 align="center">Welcome to StoreFront (back-end) 👋</h1>

<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="#blank" />
  </a>
</p>

> online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

### 🏠 [Repo: GitHub](https://github.com/antoni909/StoreFront/tree/dev/backend)

### ✨ [Heroku](https://storefront-v1.herokuapp.com/)

## Attributions

deploy subdirectory to [Heroku](https://github.com/timanovsky/subdir-heroku-buildpack)

[Deploying subdirectory projects to Heroku
](https://jtway.co/deploying-subdirectory-projects-to-heroku-f31ed65f3f2)

## Routes

|   Action    |  HTTP Method  |      Resource     |     Model     |
|-------------|:-------------:|-------------------:---------------:
| READ ALL    |      GET      | /category         |   Category    |
| READ ONE    |      GET      | /category/:id     |   Category    |
| CREATE ONE  |      POST     | /category         |   Category    |
| UPDATE ONE  |      PUT      | /category/:id     |   Category    |
| DELETE ONE  |      DEL      | /category/:Id     |   Category    |
| READ ALL    |      GET      | /category/        |   Product     |
| READ ONE    |      GET      | /category/:id     |   Product     |
| READ ONE    |      GET      | /category/:catId  |   Product     |
| CREATE ONE  |      POST     | /category/        |   Product     |
| UPDATE ONE  |      PUT      | /category/:id     |   Product     |
| UPDATE ONE  |      PUT      | /category/:catId  |   Product     |
| DELETE ONE  |      DEL      | /category/:id     |   Product     |


## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **antoni909**

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

<br />Feel free to check [issues page](https://github.com/antoni909/StoreFront/issues).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
