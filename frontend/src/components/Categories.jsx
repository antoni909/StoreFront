import { useStyles } from "../hooks/useStyles";
import { useSelector, useDispatch } from 'react-redux'
import { setProductList } from '../features/products/productsSlice'
import { setActiveCategory, selectCategories } from '../features/categories/categorySlice'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Products from './Products'



function Categories() {
const categories = useSelector(selectCategories)
const dispatch = useDispatch()
const classes = useStyles()

  return (
    <div>
      <Container 
        maxWidth="sm" 
        component="main" 
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Categories
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color="textSecondary"
          component="p"
        >
          choose a category from below
        </Typography>
        <br />
        <>{categories && categories.categoryList.map((cat) => (
                <button 
                  className={classes.button}
                  key={cat._id}
                  onClick={() => {
                    dispatch(setActiveCategory(cat.name));
                    dispatch(setProductList(cat.name));
                  }}
                >{cat.name}
                </button>
          ))}
        </>
      </Container>
      
      <Products />
    </div>
  );
}

export default Categories;
