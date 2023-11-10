import { useState } from 'react';
import * as s from './ArtistCard.style';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ photo, groupName, artistId }) => {
  const navigate = useNavigate();
  // const handleCardClick = (e) => {
  //   e.stopPropagation();
  // };

  return (
    <>
      <s.Wrapper onClick={() => navigate(`/communitypage/${artistId}`)}>
        <s.ImageContainer>
          <img src={photo} alt='artist' />
        </s.ImageContainer>
        <s.ArtistName>{groupName}</s.ArtistName>
      </s.Wrapper>
    </>
  );
};

export default ArtistCard;
