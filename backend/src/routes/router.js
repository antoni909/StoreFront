const express = require('express')
const routes = express.Router()

routes.get('/', greetUser);

async function greetUser(req,res){
  const message = `hola, welcome to StoreFront app 👋`;
  res.status(200).send(message);
}

module.exports = routes;
