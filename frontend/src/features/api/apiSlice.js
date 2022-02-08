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
