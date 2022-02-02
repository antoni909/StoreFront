import { useSelector, useDispatch } from "react-redux";
import { setActiveProduct, selectProducts } from "../features/products/productsSlice";
import { useState } from "react";
import { addToCart } from "../features/cart/cartSlice"

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Popover from "@mui/material/Popover";
import Typography from "@material-ui/core/Typography";

const ProductsPopover = ({item}) => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    dispatch(setActiveProduct(item));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <CardActions>
        <Button
          aria-describedby={id}
          color="primary"
          size="small"
          variant="text"
          onClick={(e) => handleClick(e, item)}
        >
          info
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Typography sx={{ p: 2 }}>
            {products && products.activeProduct.map((item) => (
                <>
                  <Typography 
                    key={item._id} 
                    variant="p" 
                    color="textPrimary"
                  >{item.description}
                  </Typography>
                </>
              ))}
          </Typography>
        </Popover>

        <Button 
          color="primary"
          size="small"
          variant="outlined"
          onClick={() => {dispatch(addToCart(item))}}
        > + cart
        </Button>

      </CardActions>
    </>
  );
};

export default ProductsPopover;
