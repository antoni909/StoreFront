import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  map : {},
  productlist: [],
  activeProduct: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductData: (state,action)=>{
      const fetchedMap = action.payload[0]['products']
      state.map = {...fetchedMap}
    },
    setActiveProduct: (state,action)=> {
      state.activeProduct = [action.payload]
    },
    setProductList: (state,action)=> {
      if(Object.keys(state.map).includes(action.payload)){
        state.productlist = [...state.map[action.payload]]
      }
    },
  }
})

export const { fetchProductData, setProductList, setActiveProduct } = productsSlice.actions
export const selectProducts = (state) => state.products
export default productsSlice.reducer
