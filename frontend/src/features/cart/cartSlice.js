import { createSlice } from '@reduxjs/toolkit'
// cart state is arr of added products object

// reducer: add the selected item to the cart
// reducer: adds the product to the arr of items in state
const initialState = []
export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers: {
  addToCart: (state,action)=>{
    console.log('CART ST: ',action)
  },
}
})

export const { addToCart } = cartSlice.actions
export const selectCart = (state) => state.cart
export default cartSlice.reducer
