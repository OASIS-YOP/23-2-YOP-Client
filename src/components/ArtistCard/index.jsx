import { useEffect } from 'react';
import * as s from './ArtistCard.style';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ photo, groupName, artistId }) => {
  const navigate = useNavigate();
  // const handleCardClick = (e) => {
  //   e.stopPropagation();
  // };


  const onClickArtist = (artistID) => {
    navigate(`/communitypage/${artistId}`);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useEffect(() => {
    console.log(artistId);
  });

  return (
    <>
      <s.Wrapper onClick={() => onClickArtist(artistId)}>
        <s.ImageContainer>
          <img src={photo} alt='artist' />
        </s.ImageContainer>
        <s.ArtistName>{groupName}</s.ArtistName>
      </s.Wrapper>
    </>
  );
};

export default ArtistCard;
