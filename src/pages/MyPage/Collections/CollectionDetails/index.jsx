import { useEffect, useState } from 'react';
import * as s from './style';
import mypageAPI from '../../../../api/mypage/mypageAPI';

const CollectionDetails = ({ selectedArtist, selectedCollection }) => {
  const [collectionPhotocard, setCollectionPhotocard] = useState([]);

  const getCollectionPhotocardList = () => {
    mypageAPI
      .getCollectionPhotocardList(1, decodeURI(selectedCollection))
      .then((data) => {
        console.log(data.collectionPhotocardList);
        setCollectionPhotocard(data.collectionPhotocardList);
      });
  };

  useEffect(() => {
    getCollectionPhotocardList();
  }, []);

  return (
    <>
      <s.Wrapper className={String(selectedArtist)}>
        <s.CollectionName>{selectedCollection}</s.CollectionName>
        <s.PhotocardListWrapper>
          {collectionPhotocard.map((item) => {
            return (
              <s.PhotoCardContainer className={selectedArtist}>
                <s.MemberName className={selectedArtist}>
                  {item.memberName}
                </s.MemberName>
                <s.PhotocardImageFrame className={String(selectedArtist)}>
                  <s.PhotocardImage
                    key={`photocared_${item.photocardId}`}
                    src={item.photocard}
                    alt='photocard'
                  />
                </s.PhotocardImageFrame>
              </s.PhotoCardContainer>
            );
          })}
        </s.PhotocardListWrapper>
      </s.Wrapper>
    </>
  );
};

export default CollectionDetails;
