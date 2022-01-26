import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import categoriesReducer from '../features/categories/categorySlice'

// add new reducer function
export const store = configureStore({
  reducer: {
    devTools: true,
    counter: counterReducer,
    categories: categoriesReducer,
  },
})
