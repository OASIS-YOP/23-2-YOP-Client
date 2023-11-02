import * as s from './myDesignCollectionStyle.js';
import { useState } from 'react';
import MyCollections from '../../Temp/mypage/mydesign/MyCollections';


const MyDesignCollection = ({ fileUrl, artistId, collectionId }) => {
  const [ ismouseOver, setIsMouseOver] = useState(false);

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const artist = MyCollections.find((artist) => artist.artistId === artistId);
  if (!artist) {
    return null; // Handle the case when artist is not found
  }
  const collection = artist.myCollections.find((collection) => collection.collectionId === collectionId);
  if (!artist) {
    return null; // Handle the case when artist is not found
  }

  console.log(artist);

  return (
      <s.ImageContainer
        onMouseOut={onHandleMouseOut}
        onMouseOver={onHandleMouseOver} 
        ismouseOver={ismouseOver}
      >
        <s.CollectionImage src={fileUrl} alt='내 컬렉션' />
        { ismouseOver &&
          <s.CollectionInfoWrapper>
            <s.CollectionCardInfo>
              { collection.collectionName }
              <br/>
              { collection.myDesigns.length }/{ collection.totalSlot }
            </s.CollectionCardInfo>
          </s.CollectionInfoWrapper>}
      </s.ImageContainer>
  );
}


export default MyDesignCollection;