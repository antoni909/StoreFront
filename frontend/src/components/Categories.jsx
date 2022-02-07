import { useStyles } from "../hooks/useStyles";
import { useSelector, useDispatch } from 'react-redux'
import { setProductList } from '../features/products/productsSlice'
import { setActiveCategory, selectCategories } from '../features/categories/categorySlice'

import Card from "@material-ui/core/Card"
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';

import Products from './Products'
import SimpleCart from './SimpleCart'


function Categories() {
const categories = useSelector(selectCategories)
const dispatch = useDispatch()
const classes = useStyles()

  return (
    <>
      <Container 
        maxWidth="md" 
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


        <Grid container spacing={2}>
          <Grid  item xs={9}>
            <Card>{categories && categories.categoryList.map((cat) => (
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
            </Card>
            <br />
          </Grid>

          <Grid item xs={3}>
            <SimpleCart />
          </Grid>

        </Grid>

      </Container>
      <Products />
    </>
  );
}

export default Categories;
