import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import cartReducer from '../features/cart/cartSlice'
import categoriesReducer from '../features/categories/categorySlice'
// import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoriesReducer,
    // products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false
  }),
})

setupListeners(store.dispatch)
