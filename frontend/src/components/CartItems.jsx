
import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'

export default function CartItems(){
  const cart = useSelector(selectCart)
  console.log(cart && Object.keys(cart.products))
  return(
    <>
      <h2>Your Items</h2>
      {
        cart && Object.keys(cart.products).map((product,idx) => (
          <ul key={idx}>
            <li>{product}</li>
          </ul>
        ))
      
      }
    </>
  )
}
