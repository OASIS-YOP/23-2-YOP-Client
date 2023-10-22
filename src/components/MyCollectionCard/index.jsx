import * as s from './myCollectionCardStyle.js';
import { useState } from 'react';


const MyCollectionCard = ({ fileUrl }) => {

  // const [isHovered, setIsHovered] = useState(false);

  return (
      <s.ImageContainer
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <s.CollectionImage src={fileUrl} alt='내 컬렉션' />
      </s.ImageContainer>
  );
}


export default MyCollectionCard;