import { useContext , useState , useEffect } from 'react'

import { useParams } from 'react-router-dom'
import ProductCard from '../../component/products-card/products-card.component'

import { CategoriesContext } from '../../contexts/categories.context'

import './category.styles.scss'

const Category = () => {

      const { category } = useParams()

      const { categories } = useContext(CategoriesContext)
      
      const [products, setProducts] = useState(categories[category])

      useEffect(() => {

            setProducts(categories[category])
            
      }, [categories , category])
      
     

      return (

            <>

                  <h2 className='title'>{category.toUpperCase()}</h2>

                  <div className='category-container'>
                  
                        {
                        products &&  products.map((product) => <ProductCard product={product} key={product.id } />)

                  }
                        
                  </div>
            </>
      )
      
}

export default Category;