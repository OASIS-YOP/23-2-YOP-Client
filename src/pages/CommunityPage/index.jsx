import { useState } from 'react';
import * as s from './style';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Star from '../../assets/Star.svg';
import ArtistInfo from '../../Temp/communitypage/ArtistInfo.js';

const CommunityPage = () => {
  const [artistInfo, setArtistInfo] = useState({});

  const params = useParams();
  const artistId = Number(params.artistId.substring(1));
  const member = ['RM', '진', 'SUGA', '제이홉', '지민', 'V', '정국'];

  return (
    <>
      <Header />
      <s.ProfileContainer>
        <s.ProfileWrapper>
          <s.ProfileImage>
            <img src={ArtistInfo.photo} alt='artistPhoto' />
          </s.ProfileImage>
          <s.ProfileInfo>
            <s.ArtistName>{ArtistInfo.groupName}</s.ArtistName>
            <s.ArtistStars>
              <img src={Star} alt='star' />
              {ArtistInfo.favoriteQuant}
            </s.ArtistStars>
            <s.ArtistInfoText>
              팬덤명 : {ArtistInfo.fandomName} <br />
              소속 : {ArtistInfo.enterComp}
            </s.ArtistInfoText>
            <s.ArtistInfoText>
              내가 가진 컬렉션 : {ArtistInfo.myCollectionQuant}/
              {ArtistInfo.collectionQuant}
            </s.ArtistInfoText>
          </s.ProfileInfo>
        </s.ProfileWrapper>
      </s.ProfileContainer>
      <s.BodyContainer>
        <s.MemberCardsWrapper>
          {member.map((item) => (
            <s.MemberCardContainer>
              <s.MemberNameLabel>{item}</s.MemberNameLabel>
              <s.CardImageContainer>
                <img />
              </s.CardImageContainer>
            </s.MemberCardContainer>
          ))}
        </s.MemberCardsWrapper>
        <s.photoCardContainer>
          <s.ContentWrapper>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
            <s.CardImageContainer>
              <img />
            </s.CardImageContainer>
          </s.ContentWrapper>
        </s.photoCardContainer>
      </s.BodyContainer>
    </>
  );
};

export default CommunityPage;
