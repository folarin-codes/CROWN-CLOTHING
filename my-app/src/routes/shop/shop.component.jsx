import { useContext } from "react"

import { ProductContext } from "../../contexts/products.context"

import ProductCard from "../../component/products-card/products-card.component"

import './shop.styles.scss'

const Shop = () => {

      const { products } = useContext(ProductContext)
      
      console.log(products.id)

      return (

            <div className="product-container">
                  {
                        products.map((product) => {
                              return (
                                    <ProductCard product={product} key={product.id} />
                              )
                        })
                  }
     
            </div>
      )
}

export default Shop