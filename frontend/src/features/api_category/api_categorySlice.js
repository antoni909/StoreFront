// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import service from '../../services/inventory'

// // thunk
// // DISPATCH pending, fulfilled, rejected
// export const readAllCategories = createAsyncThunk(
//   'api/category/getAll', 
//   async () => {
//     try{
//       const res = await service.getAllCategories()
//       return res
//     }catch(err){
//       console.log('@@@',err)
//     }
//   }
// )

// // recieve dispatch here
// const api_categorySlice = createSlice({
//   name: 'api/category',
//   initialState: { entities: {}, error: null, status: '' },
//   reducers: {},
//   extraReducers: {
//     [readAllCategories.pending] : ({ entities,status }) => {
//       status = 'loading'
//     },
//     [readAllCategories.fulfilled] : ({ entities,status },{ payload }) => {
//       entities = [...payload.data]
//       status = 'success'
//     },
//     [readAllCategories.rejected] : ({ status,error },{ payload }) => {
//       error = { ...payload }
//       status = 'rejected'
//     },
//   }
// })

// export default api_categorySlice.reducer

/*
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const inventoryApi = createApi({
  reducerPath:'inventoryApi',
  baseQuery: fetchBaseQuery( {baseUrl:'http://localhost:3000/'} ),
  
  endpoints: ( build => ({
    
    getAllInventory: build.query({ query: () => `inventory/` }),
    
    updateInventory: build.mutation({ query: ({id,...rest}) => ({
      url: `inventory/${id}`,
      method: 'PUT',
      body: rest
    })}),
    deleteInventory: build.mutation({ query: (id) => ({
      url: `inventory/${id}`,
      method: 'DELETE'
    })}),
  }))

//end
})

export const { useGetAllInventoryQuery,useUpdateInventoryMutation,useDeleteInventoryMutation } = inventoryApi

*/
