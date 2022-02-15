const express = require('express')
const { db } = require('../../db/models/index')
const routes = express.Router()
const { v4: uuidv4 } = require('uuid');
console.log(uuidv4())

routes.get('/', greetUser);

async function greetUser(req,res){
  const message = `hola, welcome to StoreFront app 👋`;
  res.status(200).send(message);
}

// Categories
routes.get('/categories', async (req,res) => {
  const { category, product } = db
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    const categories = await category.findAll({ include: [product] })
    res.status(200).send(categories)
    // const associations = await category.getProduct()
  }catch(e){
    res.status(500).send('unable to read all category',e)
  }

})
routes.get('/categories/:id', async (req,res) => {
  const { category, product } = db
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    const { id } = req.params
    const new_category = await category.findOne({where: {id}, include: [product]})
    res.status(200).send(new_category)
  }catch(e){
    console.log(e)
    res.status(500).send('unable to read one category',e)
  }

})
routes.post('/category-new', async (req,res) => {
  const { category, product } = db
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    // needs uuid to create category, why is it not auto generated?
    const { id,name, description } = req.body
    console.log('@@@',req.body)
    const new_category = await category.create({id,name,description})
    res.status(200).send(new_category)
  }catch (e) {
    res.status(500).send('unable to create one category',e)
  }
})

// Products
routes.get('/products', async (req,res) => {
  const { product, category } = db
  
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    const products = await product.findAll({include: [category]})
    res.status(200).send(products)
  }catch (e){
    console.log(e)
    res.status(500).send('unable to read all products',e)
  }
})
routes.get('/products/:id', async (req,res) => {
  const { product, category } = db
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    const { id } = req.params
    const one_product = await product.findOne({ where:{id},include: [category]})
    res.status(200).send(one_product)
  }catch (e){
    console.log(e)
    res.status(500).send('unable to read all products',e)
  }
})
routes.get('/products/:catId', async (req,res) => {
  // FIX: res not returning records
  
  const { product, category } = db
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    const { catId } = req.params
    console.log('@@@',catId)
    const products_belongTo = await product.findAll({ where:{catId},include: [category]})
    console.log('#$#$#$',products_belongTo)
    res.status(200).send({msg:'prods by catId',data:products_belongTo})
  }catch (e){
    console.log(e)
    res.status(500).send('unable to read all products',e)
  }
})
routes.post('/product-new', async (req,res) => {
  const { category, product } = db
  try{
    if(!product || !category) throw new Error({msg: 'model undefined'})
    const new_product = await product.create({...req.body, include: [category]})
    res.status(200).send(new_product)
  }catch(e){
    console.log(e)
    res.status(500).send('unable to create one product',e)
  }
})

module.exports = routes;
