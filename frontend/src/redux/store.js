import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import categoriesReducer from '../features/categories/categorySlice'
import counterReducer from '../features/counter/counterSlice'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    devTools: true,
    cart: cartReducer,
    categories: categoriesReducer,
    counter: counterReducer,
    products: productsReducer,
  },
})
