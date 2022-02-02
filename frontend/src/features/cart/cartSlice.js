import { createSlice } from '@reduxjs/toolkit'
// cart state is arr of added products object

// reducer: add the selected item to the cart
// reducer: adds the product to the arr of items in state
const initialState = {
  cartTotals: 0,
  products: {}
}
export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
  addToCart: (state,action)=>{
    const name = action.payload.name
    if(state.products[name]){
      state.products[name] = [...state.products[name],{...action.payload}]
    }else{
      state.products[name] = [{...action.payload}]
    }
  },
  updateCartTotals: (state,action) => {
    state.cartTotals += action.payload
  }
}
})

export const { addToCart, updateCartTotals } = cartSlice.actions
export const selectCart = (state) => state.cart
export default cartSlice.reducer
