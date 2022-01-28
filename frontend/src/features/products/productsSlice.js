import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { listCatsProds } from '../../helpers/createCategories'

// console.log({...listCatsProds})

const list = {
  electronics: [
    {_id: uuidv4(),
    name: 'mac book pro ',
    category: 'electronics',
    description: 'some description',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
    {_id: uuidv4(),
    name: 'iPad ',
    category: 'electronics',
    description: 'some description',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
  ],
  alcohol: [
    {_id: uuidv4(),
    name: 'vodka',
    category: 'alcohol',
    description: 'some description',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
    {_id: uuidv4(),
    name: 'tequila',
    category: 'alcohol',
    description: 'some description',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    }
  ],
  automotive: [
    {
    _id: uuidv4(),
    name: 'carburator',
    category: 'automotive',
    description: 'some description',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
    {
    _id: uuidv4(),
    name: 'muffler',
    category: 'automotive',
    description: 'some description',
    inStock: Math.floor( Math.random() *100),
    price: `$${Math.floor( Math.random() *100)}`,
    },
  ]
}

const dynamicList = {...list,...listCatsProds}

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
