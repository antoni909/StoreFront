import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from '../../services/inventory'

export const readAllCategories = createAsyncThunk(
  'api/category/getAll', 
  async () => {
    try { return await service.getAllCategories() }
    catch(err){ console.log('ERR',err) }
  }
)

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategoryName: '',
    activeCategoryId: '',
    activeProduct: [],
    categories_map: {},
    products_map: {},
    categoryList: [],
    productList: [],
    error: null, 
    status: ''
  },
  reducers: {
    setActiveProduct: (state,action)=> {
      state.activeProduct = [action.payload]
      state.productList = [...state.products_map[action.payload.catId]]
    },
    setActiveCategory: (state,action)=>{
      state.activeCategoryId = action.payload.catId
      state.activeCategoryName = action.payload.catName
    },
  },
  extraReducers: {
    [readAllCategories.pending] : (state) => {
      state.status = 'loading'
    },
    [readAllCategories.fulfilled] : ( state ,action) => {
      const cats_map = {}
      const prods_map = {}
      action.payload.data.forEach(el => {
        cats_map[el.id] = el
        prods_map[el.id] = [...el.products]
      })
      state.categories_map = {...cats_map}
      state.products_map = {...prods_map}
      state.categoryList = [...action.payload.data]
      state.status = 'success'
      },
    [readAllCategories.rejected] : (state,{ payload }) => {
      state.error = { ...payload }
      state.status = 'rejected'
    }
  }
})

export const { setActiveCategory, setActiveProduct  } = categorySlice.actions
export const selectCategories = (state) => state.categories
export default categorySlice.reducer
