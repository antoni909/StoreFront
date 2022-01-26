import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

 

// const list = [electronics,alcohol,automotive]
const list = {
  electronics: [
    {_id: uuidv4(),
    name: 'mac book pro ',
    category: 'electronics',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
    {_id: uuidv4(),
    name: 'iPad ',
    category: 'electronics',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
  ],
  alcohol: [
    {_id: uuidv4(),
    name: 'vodka',
    category: 'alcohol',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
    {_id: uuidv4(),
    name: 'tequila',
    category: 'alcohol',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    }
  ],
  automotive: [
    {
    _id: uuidv4(),
    name: 'carburator',
    category: 'automotive',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
    {
    _id: uuidv4(),
    name: 'muffler',
    category: 'automotive',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
  ]
}

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
      if(Object.keys(list).includes(action.payload)){
        state.productlist = [...list[action.payload]]
      }
      
    },
  }
})

export const { setProductList, setActiveProduct } = productsSlice.actions
export const selectProducts = (state) => state.products
export default productsSlice.reducer
