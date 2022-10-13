import { useSelector } from 'react-redux'

// import { CartContext } from '../../contexts/cart.context'

import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../store/cart/cart.selector'

import {CartDropdownContainer , CartItems ,EmptyMessageSpan} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {

      const  cartItems  = useSelector(selectCartItems)

      

      const navigate = useNavigate()

      const goToCheckoutHandler = () => {
            navigate('/checkout')
      }


      return (
            <CartDropdownContainer >
                  <CartItems>
                        
                        {
                         cartItems.length ?  ( cartItems.map(item => {
                                    return <CartItem cartItem={item} key={ item.id} />
                         })) : (
                                          <EmptyMessageSpan>Your Cart is Empty</EmptyMessageSpan>
                              )
                        }
                  </CartItems>

                 
                  <Button onClick = {goToCheckoutHandler} children={'Go to Checkout'} />

            </CartDropdownContainer>
            
      )
}

export default CartDropdown;