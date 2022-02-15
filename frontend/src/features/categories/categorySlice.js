import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: '',
  categoryList: []
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoryData: (state,action)=>{
      const list = Object.values(action.payload[0]['categories'])
      state.categoryList = [...list]
    },
    setActiveCategory: (state,action)=>{
      state.activeCategory = [...action.payload]},
    addToCategoryList: (state,action)=>{
      state.categoryList.push(action.payload)
    }
  }
})

export const { fetchCategoryData ,setActiveCategory, addToCategoryList } = categorySlice.actions
export const selectCategories = (state) => state.categories
export default categorySlice.reducer
