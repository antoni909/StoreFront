import { useSelector, useDispatch } from "react-redux";
import { addToCartTotals, selectCart, updateProductTotals } from "../features/cart/cartSlice"

import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';

export default function CartItems(){
  const dispatch = useDispatch()
  const cart = useSelector(selectCart)
  return(
    <>
      <h2>Your Items</h2>
      {
        cart && Object.keys(cart.products).map((prod) => (
          <>
            <div key={prod._id}>
              <span>
                <>{prod}: </> 
                <Tooltip title="remove">
                <IconButton
                  onClick={()=>{
                    const item = {num: -1, prod}
                    dispatch(addToCartTotals(item.num))
                    dispatch(updateProductTotals(item))
                  }}
                >
                  <RemoveIcon 
                    color="primary"
                    fontSize="small"

                  />
                </IconButton>
                </Tooltip>
  
                  {cart && cart.productTotals[prod]}

                <Tooltip title="add">
                  <IconButton
                    onClick={()=>{
                      const item = {num : 1, prod}
                      dispatch(addToCartTotals(item.num))
                      dispatch(updateProductTotals(item))
                    }}
                  >
                    <AddIcon 
                      color="primary"
                      fontSize="small"
                    
                    />
                  </IconButton>
                </Tooltip>
              </span>
            </div>
            <br />
          </>
        ))
      }
    </>
  )
}
