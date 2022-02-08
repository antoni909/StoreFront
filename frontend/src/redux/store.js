import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { inventoryApi } from '../features/api/apiSlice'
import cartReducer from '../features/cart/cartSlice'
import categoriesReducer from '../features/categories/categorySlice'
import productsReducer from '../features/products/productsSlice'

export const store = configureStore({
  reducer: {
    [inventoryApi.reducerPath] : inventoryApi.reducer,
    cart: cartReducer,
    categories: categoriesReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false
  }).concat(inventoryApi.middleware),
})

setupListeners(store.dispatch)
