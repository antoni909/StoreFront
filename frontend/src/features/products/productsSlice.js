import { createSlice } from '@reduxjs/toolkit'
import { listCatsProds } from '../../helpers/createCategories'

// fetch products from Server API
const dynamicList = {...listCatsProds}

const initialState = {
  productlist: [],
  activeProduct: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setActiveProduct: (state,action)=> {
      state.activeProduct = [action.payload]
    },
    setProductList: (state,action)=> {
      if(Object.keys(dynamicList).includes(action.payload)){
        state.productlist = [...dynamicList[action.payload]]
      }
      
    },
  }
})
export const { setProductList, setActiveProduct } = productsSlice.actions
export const selectProducts = (state) => state.products
export default productsSlice.reducer
