import * as s from './style';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';

import ArtistInfo from '../../Temp/communitypage/ArtistInfo.js';
import { useState } from 'react';

const CommunityPage = () => {
  const [artistInfo, setArtistInfo] = useState({
    groupName: ArtistInfo.groupName,
    photo: ArtistInfo.photo,
    fandomName: ArtistInfo.fandomName,
    enterComp: ArtistInfo.enterComp,
    favoriteQuant: ArtistInfo.favoriteQuant,
    collectionQuant: ArtistInfo.collectionQuant,
    myCollectionQuant: ArtistInfo.myCollectionQuant,
  });

  const params = useParams();
  const artistId = Number(params.artistId.substring(1));
  console.log(artistInfo);
  return (
    <>
      <Header />
      <s.ProfileContainer>
        <s.ProfileWrapper>
          <s.ProfileImage>
            <img />
          </s.ProfileImage>
          <s.ProfileInfo>
            <s.ArtistName>{artistInfo.groupName}</s.ArtistName>
          </s.ProfileInfo>
        </s.ProfileWrapper>
      </s.ProfileContainer>
    </>
  );
};

export default CommunityPage;
