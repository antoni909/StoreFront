import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import api_categorySliceReducer from '../features/api/api_categorySlice'
import cartReducer from '../features/cart/cartSlice'
import categoriesReducer from '../features/categories/categorySlice'
// import { inventoryApi } from '../features/api/apiSlice'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    // [inventoryApi.reducerPath] : inventoryApi.reducer,
    api_Categories: api_categorySliceReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false
  }),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //   serializableCheck: false
  // }).concat(inventoryApi.middleware),
})

setupListeners(store.dispatch)
