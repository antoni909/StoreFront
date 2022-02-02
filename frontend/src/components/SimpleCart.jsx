import {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'

import Button from "@material-ui/core/Button";
import CartItems from "../components/CartItems";

// note: have an add-to-cart button for each product
// stretch: remove-from-cart button for each product

// when add-to-cart button clicked --> item is added to SimpleCart 
// SimpleCart 
// count === 0
// add inStock === count(added item) - 1
// remove inStock === count(removed item) + 1

export default function SimpleCart({item}){
  const cart = useSelector(selectCart)

  const [show, setShow] = useState(false)

  return(
    <>
      <Button
        color="primary"
        size="small"
        variant="outlined"
        onClick={() => setShow(!show)}
      >Cart: {cart && cart.cartTotals}
      </Button>
      <br />
      {
        show
          ?<>
            <CartItems />
           </>
          :null
      }
    </>
  )

}
