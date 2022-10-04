import { useState, createContext , useEffect } from "react";


import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
      categories: {},
      setCategories : ()=> null

})


 export const CategoriesProvider = ({ children }) => {
      
 
      const [categories, setCategories] = useState({})

       useEffect(() => {
             
            const getCategoryMap = async () => {
                  const categoryMap = await getCategoriesAndDocument()
                   
                 
                  setCategories(categoryMap)
             }
             
             getCategoryMap()
             
             
       }, [])
       
  
       

      
      const value = {
            categories ,
            setCategories
      }
      return (
            <CategoriesContext.Provider value = {value} >
                  {children}
            </CategoriesContext.Provider>
          
      )
}
