import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import categoriesReducer from '../features/categories/categorySlice'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    devTools: true,
    counter: counterReducer,
    categories: categoriesReducer,
    products: productsReducer,

  },
})
