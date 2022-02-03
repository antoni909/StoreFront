import {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card"
import CartItems from "../components/CartItems";

export default function SimpleCart(){
  
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
          ?
          <>
           <br />
           <Card>
            <CartItems />
           </Card>
          </>
          :null
      }
    </>
  )

}
