import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'

import { setIsCartOpen } from '../../store/cart/cart.actions'


// import { CartContext } from '../../contexts/cart.context'
// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import {CartIconContainer , ItemCountConatainer , ShoppingIcon} from './cart-icon.styles'

const CartIcon = () => {

      const dispatch = useDispatch()

      const cartCount = useSelector(selectCartCount)

      const isCartOpen = useSelector(selectIsCartOpen)

      
      const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

      return (

            <CartIconContainer onClick={toggleCartOpen}>
                  <ShoppingIcon   />
                  <ItemCountConatainer>{ cartCount }</ItemCountConatainer>

            </CartIconContainer>
      )
}

export default CartIcon;