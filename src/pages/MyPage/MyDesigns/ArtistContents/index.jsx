import * as s from './style';
import { useState, } from 'react';
import MyDesignCollection from '../../../../components/MyDesignCollection';
import MyCollections from '../../../../Temp/mypage/mydesign/MyCollections';


const ArtistContents = ({ selectedArtistInfo, setSelectedCollection }) => {
  const artistCollections = selectedArtistInfo ? selectedArtistInfo.myCollections : [];

  // const onHandleMouseOver = (e) => {
  //   e.preventDefault();
  //   setIsMouseOver(true);
  // };
  // const onHandleMouseOut = (e) => {
  //   e.preventDefault();
  //   setIsMouseOver(false);
  // };

  // 컬렉션 클릭 시 선택한 컬렉션 업데이트
  const handleCollectionClick = (collectionName) => {
    setSelectedCollection(collectionName);
  };

  // 선택한 컬렉션에 따라 도안 목록 필터링
  // const filteredDesigns = artistCollections.filter(item => item.collectionName === selectedCollection);

  

  return (
    <>
    <s.ContentsWrapper>
      <s.CollectionListWrapper>
        {artistCollections.length === 0 ? (
            <div>아티스트의 도안을 꾸미고 저장해보세요!</div>
          ) : (
          artistCollections.map((item, index) => (
            <s.MyCollectionWrapper key={index}>
              <MyDesignCollection
                onClick={() => handleCollectionClick(item.collectionName)}
                fileUrl={item.fileUrl}
                artistId={selectedArtistInfo.artistId}
                collectionId={item.collectionId}
              />
            </s.MyCollectionWrapper>
          ))
        )}
      </s.CollectionListWrapper>
    </s.ContentsWrapper>
    </>
  )

} 

export default ArtistContents;