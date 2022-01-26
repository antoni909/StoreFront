import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import categoriesReducer from '../features/categories/categorySlice'
import productsReducer from '../features/products/productsSlice'

// add new reducer function
export const store = configureStore({
  reducer: {
    devTools: true,
    counter: counterReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
})
