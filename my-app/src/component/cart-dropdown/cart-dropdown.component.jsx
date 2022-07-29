import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {

      const { cartItems } = useContext(CartContext)

      console.log(cartItems)

      const navigate = useNavigate()

      const goToCheckoutHandler = () => {
            navigate('/checkout')
      }


      return (
            <div className='cart-dropdown-container' >
                  <div className='cart-items'>
                        
                        {
                              cartItems.map(item => {
                                    return <CartItem cartItem={item} key={ item.id} />
                              })
                        }
                  </div>

                 
                  <Button onClick = {goToCheckoutHandler} children={'Go to Checkout'} />

            </div>
            
      )
}

export default CartDropdown;