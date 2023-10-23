import { useState } from 'react';
import * as s from './style';
import CollectionCards from '../../../Temp/mypage/CollectionCards';
import Lock from '../../../assets/Lock.svg';
const Collections = () => {
  const artistslist = ['뉴진스', '르세라핌', '방탄소년단'];

  const artists = artistslist.map((artist, index) => (
    <s.ArtistsTab key={artist + index}>{artist}</s.ArtistsTab>
  ));

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        <s.CollectionCardsContainer>
          {CollectionCards.map((item) => (
            <CollectionCard collection={item} />
          ))}
        </s.CollectionCardsContainer>
      </s.Wrapper>
    </>
  );
};

const CollectionCard = ({ collection }) => {
  const [ismouseOver, setIsMouseOver] = useState(false);

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };
  return (
    <s.CollectionCardWrapper>
      {collection.isActivated ? (
        <>
          <s.CollectionCardImage src={collection.fileUrl} alt='collection' />
          <s.CollectionInfoWrapper>
            <s.CollectionInfoContainer>
              <s.CollectionInfo>{collection.albumName}</s.CollectionInfo>
              <s.CollectionInfo>
                활성일 : {collection.activatedDate}
              </s.CollectionInfo>
              <s.CollectionInfo>
                수집률 :{' '}
                {(collection.myQuant / collection.photoCardQuant) * 100}%
              </s.CollectionInfo>
              <s.CollectionInfo>
                포카수 : {collection.myQuant}/{collection.photoCardQuant}장
              </s.CollectionInfo>
            </s.CollectionInfoContainer>
          </s.CollectionInfoWrapper>
        </>
      ) : (
        <>
          <s.InActivatedCollectionCardImage
            src={collection.fileUrl}
            alt='collection'
            onMouseOut={onHandleMouseOut}
          />
          {ismouseOver ? (
            <s.InputCodeButton onMouseOver={onHandleMouseOver}>
              코드 입력
            </s.InputCodeButton>
          ) : (
            <s.InActivatedLockWrapper>
              <img src={Lock} alt='lock' onMouseOver={onHandleMouseOver} />
            </s.InActivatedLockWrapper>
          )}
        </>
      )}
    </s.CollectionCardWrapper>
  );
};
export default Collections;
