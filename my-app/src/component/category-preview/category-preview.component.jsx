import ProductCard from '../products-card/products-card.component';

import { Link } from 'react-router-dom';

import {CategoryPreviewContainer , PreviewContainer , ProductLink} from './category-preview.styles.jsx'



const CategoryPreview = ({ title, product }) => {
      
      return (
            <CategoryPreviewContainer>
                  <h2><ProductLink to={title}>{title.toUpperCase()}</ProductLink></h2>

                  <PreviewContainer>
                        {
                              product.filter((_, index) => index < 4).map((product) => {

                                   return <ProductCard key={product.id} product={ product } />

                                    
                              })
                              
                        }
                  </PreviewContainer>

            </CategoryPreviewContainer>
            
      )
}

export default CategoryPreview;