import { useStyles } from "../hooks/useStyles";
import { useSelector, useDispatch } from "react-redux";
import { setActiveProduct,selectProducts } from "../features/products/productsSlice";
import { selectCategories } from "../features/categories/categorySlice";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useState } from "react";
import Popover from "@mui/material/Popover";

function Products() {
  const classes = useStyles();
  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();


  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event,item) => {
    setAnchorEl(event.currentTarget);
    console.log('*',event.currentTarget)
    dispatch(setActiveProduct(item))
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Container maxWidth="md" component="main">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {categories && categories.activeCategory}
        </Typography>
        <Grid container spacing={5} alignItems="stretch">
          <Grid item xs={12} sm={6} md={4}>
            <>
              {products &&
                products.productlist.map((item) => (
                  <Card key={item._id}>
                    <CardHeader
                      title={item.name}
                      titleTypographyProps={{ align: "center" }}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <Typography 
                        variant="p" 
                        color="textPrimary"
                      >{item.category } 
                      </Typography>
                      <Typography 
                        variant="p" 
                        color="textSecondary"
                      >{item.description}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button
                        aria-describedby={id}
                        color="primary"
                        variant="outlined"
                        onClick={(e) => handleClick(e,item)}
                      >
                        DETAILS
                      </Button>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Typography 
                          sx={{ p: 2 }}
                        >
                            {products && products.activeProduct.map((item) => (
                              <>
                                <Typography
                                  key={item._id}
                                  variant="p" 
                                  color="textPrimary"
                                >inStock: {item.inStock}
                                </Typography>
                                <Typography
                                  key={item._id}
                                  variant="p" 
                                  color="textPrimary"
                                  >price:{item.price}
                                </Typography>
                              </>
                            ))}
                        </Typography>
                      </Popover>
                    </CardActions>
                  </Card>
                ))}
            </>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Products;
