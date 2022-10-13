// import { useContext } from "react"

// import { CategoriesContext } from "../../contexts/categories.context"

import { useSelector } from "react-redux"

import { selectCategoriesMap } from "../../store/categories/category.selector"


import CategoryPreview from "../../component/category-preview/category-preview.component"


const CategoriesPreview = () => {

      // const { categories} = useContext(CategoriesContext)

      const categoriesMap = useSelector(selectCategoriesMap);
      
     
      // console.log(Object.keys(categoriesMap))

      return (

            
                  
            <>
                  
                        {
                        Object.keys(categoriesMap).map((title) => {
                                    
                              const products = categoriesMap[title]

                              return <CategoryPreview title={title} key={title} product={products} />
                              

                  
                                    
                              })

                        }

                  </>
      )
}

export default CategoriesPreview