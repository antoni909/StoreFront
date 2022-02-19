<h1 align="center">Welcome to StoreFront (back-end) 👋</h1>

> online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

### 🏠 [Repo: GitHub](https://github.com/antoni909/StoreFront/tree/dev/backend)

### ✨ [Heroku](https://storefront-v1.herokuapp.com/)

## Attributions

deploy subdirectory to [Heroku](https://github.com/timanovsky/subdir-heroku-buildpack)

[Deploying subdirectory projects to Heroku
](https://jtway.co/deploying-subdirectory-projects-to-heroku-f31ed65f3f2)

## Model

Sequelize PSQL Associations:

  category has many products(1:m), Category.hasMany(Product)
  product has one category(1:1),   Product.belongsTo(Category)

Category Model:

  uuid: string
  name: string
  description: string
  total: int
  products: array

  | id | name | description | createdAt | updatedAt |
  |----|-------|-------------|-----------|----------|

Product Model:
  uuid:string
  catId:string
  name:string
  description:text
  numStock:int
  price:int

  | id | name | catId | description | numStock | price | createdAt | updatedAt |
  |----|------|-------|-------------|----------|-------|-----------|-----------|

## Routes

Category Routes

|   Action    |  HTTP Method  |      Resource     |
|-------------|:-------------:|:------------------|
| READ ALL    |      GET      | /categories       |
| READ ONE    |      GET      | /categories/:id   |
| CREATE ONE  |      POST     | /categories       |
| UPDATE ONE  |      PUT      | /categories/:id   |
| DELETE ONE  |      DEL      | /categories/:Id   |

Product Routes
|  Action     |  HTTP Method  |      Resource     |
|-------------|:-------------:|:------------------|
| READ ALL    |      GET      | /products         |
| READ ONE    |      GET      | /products/:id     |
| READ ONE    |      GET      | /products/:catId  |
| CREATE ONE  |      POST     | /products/        |
| UPDATE ONE  |      PUT      | /products/:id     |
| DELETE ONE  |      DEL      | /products/:id     |

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
