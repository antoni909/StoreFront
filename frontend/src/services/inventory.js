import axios from 'axios'

const service = {
getAllCategories : async () => {
  try{
    const categories = await axios.get('/categories')
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
