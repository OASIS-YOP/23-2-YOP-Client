import { useEffect, useState } from 'react';
import * as s from './style';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Star from '../../assets/Star.svg';
import ArtistInfo from '../../Temp/communitypage/ArtistInfo.js';
import communitypageAPI from '../../api/communitypage/communitypageAPI.js';

const CommunityPage = () => {
  const [artistInfo, setArtistInfo] = useState({});
  const [artistFavoriteQuant, setArtistFavoriteQuant] = useState();
  const [myCollectionQuant, setMyCollectionQuant] = useState();

  const params = useParams();
  const userId = 1;
  const artistId = Number(params.artistId);

  const [memberProfile, setMemberProfile] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [memberPost, setMemberPost] = useState([]);
  const [isClickedName, setIsClickedName] = useState('');

  const fandomName = ['아미', '마이', '유애나', '버니즈'];

  const getArtistProfile = () => {
    communitypageAPI.getArtistProfile(artistId).then((data) => {
      setArtistInfo(data?.ArtistProfile);
      console.log(data);
    });
  };

  const getMemberProfile = () => {
    communitypageAPI
      .getMemberProfile(artistId)
      .then((data) => setMemberProfile(data?.memberPhoto));
  };
  const getArtistFavoriteQuant = () => {
    communitypageAPI.getArtistFavoriteQuant(artistId).then((data) => {
      console.log(data);
      setArtistFavoriteQuant(data?.favoriteQuant);
    });
  };

  const getMyCollectionQuant = () => {
    communitypageAPI.getMyCollectionQuant(artistId, userId).then((data) => {
      setMyCollectionQuant(data?.collectionQuant);
    });
  };

  const getMemberPost = (memberName) => {
    if (artistId === 3) return;
    communitypageAPI.getMemberPost(memberName).then((data) => {
      setMemberPost(data?.memberPostList);
      console.log(data);
    });
  };

  const handleClickMember = (memberName) => {
    getMemberPost(memberName);
  };

  const getAllArtistPost = () => {
    communitypageAPI
      .getAllArtistPost(artistId)
      .then((data) => setAllPost(data?.allPostList));
  };

  // const getPostLikeQuant = () => {
  //   communitypageAPI
  //     .getPostLikeQuant(artistId,postId)
  //     .then((data) => console.log(data));
  // };

  useEffect(() => {
    console.log(artistId);
    getArtistProfile();
    getArtistFavoriteQuant();
    getMyCollectionQuant();
    getMemberProfile();
  }, []);

  useEffect(() => {
    getAllArtistPost();
  }, []);

  // useEffect(() => {
  // getPostLikeQuant();
  // }, [artistInfo, artistFavoriteQuant]);
  return (
    <>
      <Header />

      <s.ProfileContainer>
        <s.ProfileWrapper>
          <s.ProfileImage>
            {/* artistInfo는 db에있던 데이터, ArtistInfo는 더미데이터 */}
            {artistInfo?.photo && (
              <img src={artistInfo?.photo} alt='artistPhoto' />
            )}
          </s.ProfileImage>
          <s.ProfileInfo>
            {artistInfo && <s.ArtistName>{artistInfo?.groupName}</s.ArtistName>}
            <s.ArtistStars>
              <img src={Star} alt='star' />
              {artistFavoriteQuant && artistFavoriteQuant}
            </s.ArtistStars>
            <s.ArtistInfoText>
              팬덤명 : {fandomName[artistId - 1]} <br />
              {artistInfo && `소속 : ${artistInfo?.enterComp}`}
            </s.ArtistInfoText>
            <s.ArtistInfoText>
              내가 가진 컬렉션 : {myCollectionQuant && myCollectionQuant}
              {artistInfo && `/${artistInfo?.collectionQuant}`}
            </s.ArtistInfoText>
          </s.ProfileInfo>
        </s.ProfileWrapper>
      </s.ProfileContainer>
      <s.BodyContainer>
        {!memberProfile ? (
          ''
        ) : (
          <s.MemberCardsWrapper>
            {memberProfile?.map((item, index) => (
              <s.MemberCardContainer key={`member_${index + 1}`}>
                <s.MemberNameLabel>{item?.name}</s.MemberNameLabel>
                <s.CardImageContainer
                  onClick={() => handleClickMember(item.name)}
                >
                  <img src={item?.memphoto} alt='memberPhoto' />
                </s.CardImageContainer>
              </s.MemberCardContainer>
            ))}
          </s.MemberCardsWrapper>
        )}
        <s.photoCardContainer>
          <s.ContentWrapper>
            {allPost &&
              allPost.map((item) => {
                <s.CardImageContainer>
                  <img />
                </s.CardImageContainer>;
              })}
          </s.ContentWrapper>
        </s.photoCardContainer>
      </s.BodyContainer>
    </>
  );
};

export default CommunityPage;
