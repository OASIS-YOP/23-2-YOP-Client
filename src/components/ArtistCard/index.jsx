import { useState } from 'react';
import * as s from './ArtistCard.style';

const ArtistCard = ({ fileUrl, artistName }) => {
  // const handleCardClick = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <>
      <s.Wrapper>
        {/** 해당 부분 이미지 추가 필요 * */}
        <s.ImageContainer>
          <img src={fileUrl} alt='artist' />
        </s.ImageContainer>
        <s.ArtistName>{artistName}</s.ArtistName>
      </s.Wrapper>
    </>
  );
};

export default ArtistCard;
