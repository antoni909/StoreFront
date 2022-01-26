import Products from './Products'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveCategory, selectCategories } from '../features/categories/categorySlice'

function Categories() {
const categories = useSelector(selectCategories)
const dispatch = useDispatch()
// can use addToCategoryList to add new categories if need to
// can use setActiveCategory to set clicked category as active category
  return (
    <div >
      <h1>Categories Component</h1>
      <>
        <div>
          current active: {categories && categories.activeCategory}
        </div>
        category list: {categories && categories.categoryList.map( (cat,idx) => (

            <ul>
              <li 
                key={idx}
                onClick={()=> dispatch(setActiveCategory(cat))}
              >{cat}
              </li>
            </ul>

        ))}
      </>
      <p>dispatch action when item clicked</p>
      <Products />
    </div>
  );
}

export default Categories;
