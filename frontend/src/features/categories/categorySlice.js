import { createSlice } from "@reduxjs/toolkit";
import filtered from '../../helpers/createCategories'

// fetch 'filtered' from Server API

const initialState = {
  activeCategory: '',
  categoryList: [...filtered]
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state,action)=>{
      state.activeCategory = action.payload},
    addToCategoryList: (state,action)=>{
      state.categoryList.push(action.payload)
    }
  }
})

export const { setActiveCategory, addToCategoryList } = categorySlice.actions
export const selectCategories = (state) => state.categories
export default categorySlice.reducer
