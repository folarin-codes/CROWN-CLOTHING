import { useContext } from "react"

import { ProductContext } from "../../contexts/products.context"

import ProductCard from "../../component/products-card/products-card.component"

import './shop.styles.scss'

const Shop = () => {

      const { products } = useContext(ProductContext)
      
      console.log(products)

      return (

            <div className="product-container">
                  {
                        products?.map((products) => {
                              return (
                                    <ProductCard product={products} key={products.id} />
                              )
                        })
                  }
     
            </div>
      )
}

export default Shop