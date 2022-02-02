import { useSelector } from 'react-redux'
import { selectCart } from '../features/cart/cartSlice'
// note: have an add-to-cart button for each product
// stretch: remove-from-cart button for each product

// when add-to-cart button clicked --> item is added to SimpleCart 
// SimpleCart 
// count === 0
// add inStock === count(added item) - 1
// remove inStock === count(removed item) + 1
export default function SimpleCart(){
  const cart = useSelector(selectCart)
  console.log('SimpleCart: ', cart)
  return(
    <>Cart: {cart.length}</>
  )

}
