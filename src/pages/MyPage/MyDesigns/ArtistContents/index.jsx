import * as s from './style';
import { useState, } from 'react';
import MyDesignCollection from '../../../../components/MyDesignCollection';
import MyCollections from '../../../../Temp/mypage/mydesign/MyCollections';


const ArtistContents = ({ selectedArtistInfo }) => {
  const artistCollections = selectedArtistInfo ? selectedArtistInfo.myCollections : [];

  // const onHandleMouseOver = (e) => {
  //   e.preventDefault();
  //   setIsMouseOver(true);
  // };
  // const onHandleMouseOut = (e) => {
  //   e.preventDefault();
  //   setIsMouseOver(false);
  // };

  

  return (
    <>
    <s.ContentsWrapper>
      <s.CollectionListWrapper>
        {artistCollections.length === 0 ? (
            <div>아티스트의 도안을 꾸미고 저장해보세요!</div>
          ) : (
          artistCollections.map((item, index) => (
            <s.MyCollectionWrapper key={index}>
              <MyDesignCollection fileUrl={item.fileUrl} artistId={selectedArtistInfo.artistId} collectionId={item.collectionId} />
            </s.MyCollectionWrapper>
          ))
        )}
      </s.CollectionListWrapper>
    </s.ContentsWrapper>
    </>
  )

} 

export default ArtistContents;