import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import { ProductCardContainer , Img , FooterDiv } from './products-card.styles.jsx'

import Button from '../button/button.component'

const ProductCard = ({ product }) => {

      const {addItemToCart} = useContext(CartContext)

      const { name, price, imageUrl } = product
      
      const addProductToCart = () => {
            addItemToCart(product)
            
      }

      return (
            <ProductCardContainer>
                  <Img src={imageUrl} alt={name} />
                  <FooterDiv>
                        <span className='name'>{ name}</span>
                        <span className='price'>{ price }</span>
                  </FooterDiv>
                  <Button style={{  width: '80%',
         opacity: 0.7,
         position: 'absolute',
         top: '255px',opacity: '0.85',
           display: 'flex'}} buttonType={'inverted'} onClick={addProductToCart} >
                        Add to cart
                        
                  </Button>

            </ProductCardContainer>
            
      )
}

export default ProductCard