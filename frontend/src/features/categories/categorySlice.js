import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: '',
  categoryList: ['electronics','clothing & shoes','alcohol']
}

// reducer functions must be given state && action args
export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state,action)=>{
      state.activeCategory = action.payload},
    addToCategoryList: (state,action)=>{
      state.categoryList.push(action.payload)
    },
  }
})

export const { setActiveCategory, addToCategoryList } = categorySlice.actions
export const selectCategories = (state)=> state.categories
export default categorySlice.reducer
