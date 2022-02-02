import { useSelector } from "react-redux";
import { selectProducts } from "../features/products/productsSlice";
import { selectCategories } from "../features/categories/categorySlice";

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ProductsPopover from './ProductsPopover'

const test = require('../assets/360x194.png')

function Products() {
  
  const categories = useSelector(selectCategories)
  const products = useSelector(selectProducts)

  return (
      <Container align="center" component="main" maxWidth="md">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >{categories && categories.activeCategory}
        </Typography>
        <Grid container spacing={5} alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
            <>{products && products.productlist.map((item) => (
              <div key={item._id}>
                <Card>
                  <CardHeader
                    title={item.name}
                    titleTypographyProps={{ align: "center" }}
                    subheader={item.category}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    src={test}
                    alt="placeholder image"
                  ></CardMedia>

                  <CardContent>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                    >
                      in stock: {item.inStock}
                    </Typography>
                    <br />
                    <Typography
                      variant="h6"
                      color="textSecondary"
                    >price: {item.price}
                    </Typography>
                  </CardContent>

                  <ProductsPopover item={item} />
                </Card>
                <br />
              </div>

              ))}
            </>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Products;
