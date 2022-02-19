import { useSelector } from "react-redux";
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
  return (
      <Container 
        align="center" 
        component="main" 
        maxWidth="md"
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >{categories && categories.activeCategoryName}  
        </Typography>
        <Grid container spacing={3}>

        <>
          {categories.activeCategoryId
            ?categories.productList.map((item) => (

            <Grid item xs={3} key={item.id}>
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
                  >
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                    >{`$${item.price}`}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="textSecondary"
                    >in stock: {item.inStock}
                    </Typography>
                  </CardContent>

                  <ProductsPopover item={item} />

                </Card>
            </Grid>
            ))
            : null
          } 
        </>

        </Grid>

      </Container>
  );
}

export default Products;
