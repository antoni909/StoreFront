import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import filtered from '../../helpers/createCategories'

const catA = {
  _id: uuidv4(),
  name:'electronics',
  description:'we only sell Apple Products',
  count:Math.floor( Math.random() *100),
}
const catB = {
  _id: uuidv4(),
  name:'alcohol',
  description:'we only sell HARDCORE liquor',
  count:Math.floor( Math.random() *100),
}
const catC = {
  _id: uuidv4(),
  name:'automotive',
  description:'car stuff',
  count:Math.floor( Math.random() *100),
}

const initialState = {
  activeCategory: '',
  categoryList: [catA,catB,catC,...filtered]
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
