// import './component/category-item/category-item.component'
import { Outlet } from 'react-router-dom' 
import Directory from '../../component/directory/directory.component'

const Home = () => {
  

      return (
            <>
          
            <Directory />  <Outlet/>
   
                  
           </>
  
  
 
)
  
}

export default Home