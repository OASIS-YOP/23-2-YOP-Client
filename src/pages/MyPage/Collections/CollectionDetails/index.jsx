import { useState } from 'react';
import * as s from './style';
import CollectionCards from '../../../../Temp/mypage/CollectionCards';

const CollectionDetails = ({ selectedCollection, selectedArtist }) => {
  const collectionList = CollectionCards.find(
    (collection) => collection.artistName === selectedArtist
  )?.collections || [];

  const currentCollection = collectionList.find(
    (collection) => collection.albumName === selectedCollection)?.photoCards || [];

  const cardsV1 = currentCollection.find((card) => card.version === '1')?.cards || [];



  return (
    <>
      <s.Wrapper className={selectedArtist}>
        <s.CollectionName>
            {selectedCollection}
        </s.CollectionName>
        <s.PhotocardListWrapper>
          {/* <s.VersionContainer>
            <s.Version>
              V1
            </s.Version>
            <s.Version>
              V2
            </s.Version>
          </s.VersionContainer> */}
          { cardsV1.map((card, index) => {
            return (
              <s.PhotoCardContainer
                className={selectedArtist}
              >
                <s.MemberName
                  className={selectedArtist}
                >
                  {card.member}
                </s.MemberName>
                <s.PhotocardImageFrame
                className={selectedArtist}>
                  <s.PhotocardImage
                    key={card + index}
                    src={card.fileUrl}
                    className={`${card.isActivated ? '' : 'locked'} ${selectedArtist}`}      
                    alt='photocard'
                  />
                </s.PhotocardImageFrame>
              </s.PhotoCardContainer>
            )
            }
          )}
        </s.PhotocardListWrapper> 
      </s.Wrapper>
    </>

  );
};

export default CollectionDetails;
