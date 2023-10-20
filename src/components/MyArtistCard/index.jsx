import { useState } from 'react';
import * as s from './MyArtistCard.style';

const MyArtistCard = () => {
  // const handleCardClick = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <>
      <s.Wrapper>
        {/** 해당 부분 이미지 추가 필요 * */}
        <s.ImageContainer></s.ImageContainer>
        <s.ArtistName>방탄소년단</s.ArtistName>
      </s.Wrapper>
    </>
  );
};

export default MyArtistCard;
