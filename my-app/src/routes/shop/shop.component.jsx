import { useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils'

import { setCategoriesMap } from '../../store/categories/category.action'

import { Route, Routes } from 'react-router-dom'

import CategoriesPreview from '../categories-preview/categories-preview'

import Category from '../category/category.component'

import './shop.styles.scss'

const Shop = () => {


  const dispatch = useDispatch()


      useEffect(() => {
             
            const getCategoryMap = async () => {
                  const categoryMap = await getCategoriesAndDocument()
                   
                 
                 dispatch(setCategoriesMap(categoryMap))
             }
             
             getCategoryMap()
             
             
       }, [])

      return (
            <Routes>
                  <Route index element={<CategoriesPreview />} />
                  
                  <Route path=':category' element={<Category/> } />
            </Routes>
      )
}

export default Shop