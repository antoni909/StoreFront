import { useStyles } from "../hooks/useStyles";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveProduct,
  selectProducts,
} from "../features/products/productsSlice";
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
                      <Typography variant="h5" color="textPrimary">
                        {item.name}
                      </Typography>
                      <Typography variant="p" color="textSecondary">
                        {item.category}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button
                        color="primary"
                        variant="outlined"
                        onClick={() => dispatch(setActiveProduct(item))}
                      >
                        DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                ))}
            </>
          </Grid>
        </Grid>
      </Container>

      {/* <>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          Open Popover
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
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </> */}

      <>
        {products && products.activeProduct.map((item) => (
            <>
              <h2>Active Product</h2>
              <h2 key={item._id}>{item.name}</h2>
              <p>product: {item.name}</p>
              <p>category: {item.category}</p>
              <p>inStock: {item.inStock}</p>
              <p>price:{item.price}</p>
            </>
          ))}
      </>
    </>
  );
}

export default Products;
