import { useContext } from "react"

import { CategoriesContext } from "../../contexts/categories.context"


import CategoryPreview from "../../component/category-preview/category-preview.component"


const CategoriesPreview = () => {

      const { categories} = useContext(CategoriesContext)
      
     
      console.log(Object.keys(categories))

      return (

            
                  
                  <>
                        {
                        Object.keys(categories).map((title) => {
                                    
                              const products = categories[title]

                              return <CategoryPreview title={title} key={title} product={products} />
                              

                  
                                    
                              })

                        }

                  </>
      )
}

export default CategoriesPreview