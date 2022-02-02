import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartTotals: 0,
  products: {},
  productTotals: {}
}
export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
  addToCart: (state,action) => {
    const name = action.payload.name
    if(state.products[name]){
      state.products[name] = [...state.products[name],{...action.payload}]
    }else{
      state.products[name] = [{...action.payload}]
    }
    state.cartTotals++
  },
  addToCartTotals: (state,action) => {
    const num = action.payload
    num > 0
      ? state.cartTotals++
      : state.cartTotals--
  },
  updateProductTotals: (state,action) => {
    const name = action.payload.prod
    const num = action.payload.num

    if(!state.productTotals[name]){ state.productTotals[name] = num }
    num > 0
      ? state.productTotals[name]++
      : state.productTotals[name]--
  }

}})

export const { addToCart, addToCartTotals, updateProductTotals
} = cartSlice.actions
export const selectCart = (state) => state.cart
export default cartSlice.reducer
