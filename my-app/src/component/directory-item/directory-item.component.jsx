import { DirectoryContainer, BackgroundImage, DirectoryItemContainer, Heading2, Paragraph } from './directory-item.styles'

import { useNavigate } from 'react-router-dom'


const DirectoryItem = ({ title , imageUrl , route}) => {


  
  
const navigate = useNavigate()


const onNavigateHandler = () => navigate(route)

      return (

      <DirectoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
          <DirectoryItemContainer>
            <Heading2>{title}</Heading2>
            <Paragraph>Shop Now</Paragraph>

          </DirectoryItemContainer>
          </DirectoryContainer>
            
      )
      
}

export default DirectoryItem