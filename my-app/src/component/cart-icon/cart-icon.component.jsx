import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'
// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'

import {CartIconContainer , ItemCountConatainer , ShoppingIcon} from './cart-icon.styles'

const CartIcon = () => {

      const { isCartOpen, setIsCartOpen , cartCount } = useContext(CartContext)
      
      const toggleCartOpen = () => {
            setIsCartOpen(!isCartOpen)
      }

      return (

            <CartIconContainer onClick={toggleCartOpen}>
                  <ShoppingIcon   />
                  <ItemCountConatainer>{ cartCount }</ItemCountConatainer>

            </CartIconContainer>
      )
}

export default CartIcon;