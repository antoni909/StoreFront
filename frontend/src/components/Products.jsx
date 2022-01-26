import { useSelector, useDispatch } from 'react-redux'
import { setActiveProduct, selectProducts } from '../features/products/productsSlice'
import { selectCategories } from '../features/categories/categorySlice'

function Products() {
  const categories = useSelector(selectCategories)
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()

  return (
    <div >
      <h1>Products Component</h1>
      <div>
        active category: {categories && categories.activeCategory}
      </div>
      <div>
        {
        products && products.productlist.map((item,idx)=>(
          <ul>
            <li 
            key={item._id}
            onClick={()=> dispatch(setActiveProduct(item))}
            >
              <p>product: {item.name}</p>
              <p>category: {item.category}</p>
              <p>inStock: {item.inStock}</p>
              <p>price:{item.price}</p>
            </li>
          </ul>))
        }
      </div>

      <div>
        <h2>Active Product</h2>
        <>
        {
          products && products.activeProduct.map((item)=>(
            <>
              <h2 key={item._id}>{item.name}</h2>
              <p>product: {item.name}</p>
              <p>category: {item.category}</p>
              <p>inStock: {item.inStock}</p>
              <p>price:{item.price}</p>
            </>

          ))
        }
        </>
      </div>
    </div>
  );
}

export default Products;
