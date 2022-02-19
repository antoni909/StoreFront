// import { createSlice } from '@reduxjs/toolkit'
// import { readAllCategories } from '../categories/categorySlice'

// export const productsSlice = createSlice({
//   name: 'products',
//   initialState : {
//     productlist: [],
//     activeProduct: [],
//     entities: {},
//     map: [], 
//     error: null, 
//     status: ''
//   },
//   reducers: {
//     fetchProductData: (state)=>{},
//     setActiveProduct: (state,action)=> {
//       state.activeProduct = [action.payload]
//     },
//     setProductList: (state,action)=> {
//       if(Object.keys(state.map).includes(action.payload)){
//         state.productlist = [...state.map[action.payload]]
//       }else{ console.log('empty map') }
//     },
//   },
//   extraReducers: {
//     [readAllCategories.pending] : (state) => {
//       state.status = 'loading'
//     },
//     [readAllCategories.fulfilled] : ( state ,{ payload }) => {
//       state.entities = {...payload.data}
//     },
//     [readAllCategories.rejected] : (state,{ payload }) => {
//       state.error = { ...payload }
//       state.status = 'rejected'
//     }
//   }
// })

// export const { fetchProductData, setProductList, setActiveProduct } = productsSlice.actions
// export const selectProducts = (state) => state.products
// export default productsSlice.reducer
