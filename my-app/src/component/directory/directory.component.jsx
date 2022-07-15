import './directory.style.scss'
import CategoriesItem from '../category-item/category-item.component' 

const Directory = ({categories}) => {
      return (
            <div className='directory-container'>
            {
              categories.map(({ title, id,imageUrl  }) => {
                return (
                  <CategoriesItem title={title} key={ id} imageUrl={imageUrl} />
               
                )
              })
            }
          </div>
            
      )
}

export default Directory