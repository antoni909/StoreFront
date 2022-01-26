import Products from './Products'
import { 
  useSelector, 
  useDispatch } from 'react-redux'
import { setProductList } from '../features/products/productsSlice'
import { 
  setActiveCategory, 
  selectCategories } from '../features/categories/categorySlice'

function Categories() {
const categories = useSelector(selectCategories)
const dispatch = useDispatch()

  return (
    <div >
      <h1>Categories Component</h1>
      <div>
        category list: {categories && categories.categoryList.map( (cat) => (
            <ul>
              <li 
                key={cat._id}
                onClick={()=> {
                  dispatch(setActiveCategory(cat.name))
                  dispatch(setProductList(cat.name))
                }}
              >
              {cat.name}
              </li>
            </ul>
        ))}
      </div>
      <p>dispatch action when item clicked</p>
      <Products />
    </div>
  );
}

export default Categories;
