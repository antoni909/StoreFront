import axios from 'axios'

const service = {
getAllCategories : async () => {
  try{
    const categories = await axios.get('http://localhost:3000/categories')
    return categories
  }catch(e){
    console.log('ERR getAllCategories',e)
  }
},
getCategory : () => {},
updateCategoryById : () => {},
deleteCategory : () => {},

getAllProducts : () => {},
getProductById : () => {},
getProductCatId : () => {},
updateProductById: () => {},
deleteProductById : () => {},
postCategory : () => {},
postProduct : () => {},
}

export default service
/*
| READ ALL    |      GET      | /categories       |
| READ ONE    |      GET      | /categories/:id   |
| CREATE ONE  |      POST     | /categories       |
| UPDATE ONE  |      PUT      | /categories/:id   |
| DELETE ONE  |      DEL      | /categories/:Id   |
| READ ALL    |      GET      | /products         |
| READ ONE    |      GET      | /products/:id     |
| READ ONE    |      GET      | /products/:catId  |
| CREATE ONE  |      POST     | /products/        |
| UPDATE ONE  |      PUT      | /products/:id     |
| DELETE ONE  |      DEL      | /products/:id     |
*/
