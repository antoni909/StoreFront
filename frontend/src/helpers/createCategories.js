import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker'

class Category{
  constructor(){
    this._id = uuidv4()
    this.name = faker.commerce.department()
    this.description = faker.commerce.productDescription()
    this.total = Math.floor( Math.random() *100)
  }
  createSomeCategories(number){
    let collection = []
    for(let i=0; i< number;i++){
      collection.push(new Category())
    }
    return collection
  }
}

const categories = new Category()
const fakeCats = categories.createSomeCategories(100)
const makeUnique = (arr) => {
  const collection = []
  const temp = {}
  arr.forEach(object => {
    if(temp[object.name]) return
    temp[object.name] = true
    collection.push(object)
  })
  return collection
}
const filtered = makeUnique(fakeCats)

class Product{
  constructor(category){
    this.category = category
    this._id = uuidv4()
    this.name = faker.commerce.product()
    this.description = faker.commerce.productDescription()
    this.inStock = Math.floor( Math.random() *100)
    this.price = faker.commerce.price()
  }
  createSomeProducts(category,number){
    let productsFromCategory = []
    for(let i = 0; i < number; i++){
      productsFromCategory.push(new Product(category))
    }
    return productsFromCategory
  }
}

const generateProducts = (categories,numProducts) => {
  const collection = {} 

  categories.forEach(cat => {
    const products = new Product(cat.name)
    let list = products.createSomeProducts(cat.name,numProducts)
    collection[cat.name] = [...list]
  })

  return collection
}
export const listCatsProds = generateProducts(filtered,15)

export default filtered
