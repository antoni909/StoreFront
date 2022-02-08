const express = require('express')
const main_router = express.Router()
const json_inventory = require('../generate')

main_router.get('/', greetUser);

main_router.get('/inventory',getAllInventory)
main_router.post('/inventory/',postOneInInventory)
main_router.put('/inventory/:id',putOneInInventory)
main_router.delete('/inventory/:id',deleteOneInInventory)

async function greetUser(req,res){
  const message = `hola, welcome to StoreFront app 👋`;
  res.status(200).send(message);
}
async function getAllInventory(req,res){
  res.status(200).send(json_inventory)
}
async function postOneInInventory(req,res){}
async function putOneInInventory(req,res){}
async function deleteOneInInventory(req,res){}

module.exports = main_router;
