import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CheckoutItemContainer , ImageContainer ,RemoveButton ,Quantity ,Arrow ,Span, Value ,Img} from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem }) => {
      
      const { name, price, imageUrl, quantity } = cartItem;


      const { clearItemFromCart  , addItemToCart , removeItemFromCart  } = useContext(CartContext)
      
      const clearItemHandler = () => clearItemFromCart(cartItem)

      const incrementHandler = () => addItemToCart(cartItem)

      const decrementHandler = () => removeItemFromCart(cartItem)
      
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