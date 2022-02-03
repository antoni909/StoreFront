import { useSelector } from "react-redux";
import { selectProducts } from "../features/products/productsSlice";
import { selectCategories } from "../features/categories/categorySlice";
import test from '../assets/360x194.png'

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ProductsPopover from './ProductsPopover'

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
        <Grid 
          container 
          spacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >{products && products.productlist.map((item) => (
          <Grid 
            item 
            xs={4}
            key={item._id}
          >
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
          </Grid>
          ))}
        </Grid>
      </Container>
  );
}

export default Products;
