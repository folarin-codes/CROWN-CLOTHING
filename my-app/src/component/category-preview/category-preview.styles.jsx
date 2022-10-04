import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
    
`
  
export const PreviewContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 -moz-column-gap: 20px;
  column-gap: 20px;
`  
  
export const ProductLink = styled(Link)`
 font-size: 28px;
 margin-bottom: 25px;
 cursor: pointer;

`  

// .category - preview - container {
//       display: flex;
//       flex-direction: column;
//       margin-bottom: 30px;
    
//       .title {
//         font-size: 28px;
//         margin-bottom: 25px;
//         cursor: pointer;
//       }
    
//       .preview {
//         display: grid;
//         grid-template-columns: repeat(4, 1fr);
//         -moz-column-gap: 20px;
//              column-gap: 20px;
//       }
//     }
    