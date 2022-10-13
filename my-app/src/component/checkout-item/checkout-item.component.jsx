import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector'

import {addItemToCart , removeItemFromCart , clearItemFromCart} from '../../store/cart/cart.actions'


import {CheckoutItemContainer , ImageContainer ,RemoveButton ,Quantity ,Arrow ,Span, Value ,Img} from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {

      const dispatch = useDispatch()
      
      const { name, price, imageUrl, quantity } = cartItem;

      const cartItems = useSelector(selectCartItems)

     

      
      const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem))

      const incrementHandler = () => dispatch(addItemToCart(cartItems,cartItem))

      const decrementHandler = () => dispatch(removeItemFromCart(cartItems,cartItem))
      
      return (
            <CheckoutItemContainer>
                  <ImageContainer>
                        <Img src={imageUrl} alt={ name} />

                  </ImageContainer>

                  <Span> { name }</Span>
                  <Quantity>
                        <Arrow onClick={decrementHandler}>&#10094;</Arrow>

                        <Value>{quantity}</Value>

                        <Arrow onClick={incrementHandler}>&#10095;</Arrow>
                      
                  </Quantity>
                  <Span>{ price }</Span>
                  <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>

            </CheckoutItemContainer>
            
      )
}

export default CheckoutItem;