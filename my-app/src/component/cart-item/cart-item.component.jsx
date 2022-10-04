import {CartItemContainer , ItemDetails, Img} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
      
      const {name , quantity , imageUrl ,price} = cartItem

      return (
            <CartItemContainer >
                  <Img src={imageUrl} alt={`${name}`} />

                  <ItemDetails>
                                          
                  <span className='name'>
                    {name}
                  </span>

                        <span className='price'>{quantity} X ${price}</span>

                        

                  </ItemDetails>

            </CartItemContainer>      
      )
      
}

export default CartItem;
