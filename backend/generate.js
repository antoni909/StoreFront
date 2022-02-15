const { v4: uuidv4 } = require('uuid');
const { faker } = require('@faker-js/faker');
  
  class Category{
    constructor(){
      this._id = uuidv4()
      this.name = faker.commerce.department()
      this.description = faker.commerce.productDescription()
      this.total = Math.floor( Math.random() *100)
    }
  }

  class Product{
    constructor(category){
      this.category = category
      this._id = uuidv4()
      this.name = faker.commerce.product()
      this.description = faker.commerce.productDescription()
      this.inStock = Math.floor( Math.random() *100)
      this.price = faker.commerce.price()
    }
    createSomeProducts(categoryName,number){
      let products = []
      for(let i = 0; i < number; i++){
        const productInstance = new Product(categoryName)
        const { _id,category,name,description,inStock,price, ...rest } = productInstance
        const obj = { _id,category,name,description,inStock,price}
        products.push(obj)
      }
      return products
    }
  }
  
  const generateCategories = (number) => {
    let collection = []
    const temp = {}
    for(let i=0; i < number; i++){
      const categories = new Category()
      const {_id,name,description,total} = categories
      const obj = {_id,name,description,total}
      if(temp[obj.name]) return
        temp[obj.name] = true
        collection.push(obj)
    }
    return collection
  }
 
  const generateProducts = (categories,numProducts) => {
    const collection = {} 
    categories.forEach(cat => {
      const products = new Product(cat.name)
      let productsInstance = products.createSomeProducts(cat.name,numProducts)
      collection[cat.name] = [...productsInstance]
    })
    return collection
  }
  const fakeCats_0 = generateCategories(3)
  const fakeProds_0 = generateProducts(fakeCats_0,3)
  const inventory = {
    categories: {...fakeCats_0},
    products: {...fakeProds_0}
  }
  const json_inventory = JSON.stringify(inventory)
  console.log(json_inventory)
  // module.exports = json_inventory;
