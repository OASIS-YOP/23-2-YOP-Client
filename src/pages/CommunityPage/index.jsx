import { useEffect, useState } from 'react';
import * as s from './style';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Star from '../../assets/Star.svg';
import EmptyStar from '../../assets/EmptyStar.svg';
import communitypageAPI from '../../api/communitypage/communitypageAPI.js';
import commonAPI from '../../api/commonAPI.js';
import Modal from 'react-modal';
import PostModal from './PostModal/index.jsx';

const CommunityPage = () => {
  const params = useParams();
  const artistId = Number(params.artistId);

  const [artistInfo, setArtistInfo] = useState({});
  const [artistFavoriteQuant, setArtistFavoriteQuant] = useState();
  const [myCollectionQuant, setMyCollectionQuant] = useState();
  const [memberProfile, setMemberProfile] = useState([]);
  const [allPost, setAllPost] = useState([]);
  const [memberPost, setMemberPost] = useState([]);
  const [isClickedMember, setIsClickedMember] = useState(null);

  const [isFavorite, setIsFavorite] = useState();

  const [isClickStar, setIsClickStar] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);


  const fandomName = ['아미', '마이', '유애나', '버니즈'];

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const postModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      zIndex: 999,
    },
    content: {
      background: 'white',
      overflow: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      WebkitUserSelect: 'none',
      borderRadius: '20px',
      outline: 'none',
      zIndex: 10,
    },
  };

  const onCloseModal = () => {
    setIsOpenModal((prev) => !prev);
  };


  const fetchData = async () => {
    try {
      const artistProfileData = await communitypageAPI.getArtistProfile(
        artistId
      );
      setArtistInfo(artistProfileData.ArtistProfile);
      console.log(artistProfileData);

      const allArtistPostData = await communitypageAPI.getAllArtistPost(
        artistId
      );
      setAllPost(allArtistPostData?.allPostList);

      const myCollectionQuantData = await communitypageAPI.getMyCollectionQuant(
        artistId
      );
      setMyCollectionQuant(myCollectionQuantData?.collectionQuant);

      const artistFavoriteQuantData =
        await communitypageAPI.getArtistFavoriteQuant(artistId);
      console.log(artistFavoriteQuantData);
      setArtistFavoriteQuant(artistFavoriteQuantData.favoriteQuant);

      const memberProfileData = await communitypageAPI.getMemberProfile(
        artistId
      );
      setMemberProfile(memberProfileData.memberPhoto);
      console.log(memberProfileData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClickStar = () => {
    isFavorite ? deleteFavoriteArtist() : postFavoriteArtist();
  };

  const handleClickMember = (memberName) => {
    if (artistId === 3) return;
    setIsClickedMember(memberName);
    getMemberPost(memberName);
  };

  const getMemberPost = (memberName) => {
    communitypageAPI.getMemberPost(memberName).then((data) => {
      setMemberPost(data?.memberPostList);
      console.log(data);
    });
  };

  const postFavoriteArtist = () => {
    commonAPI.postFavorite(artistId).then((data) => {
      if (data) {
        console.log('즐겨찾기 성공');
        setIsFavorite(true);
      } else {
        window.alert('즐겨찾기 실패하였습니다. 다시 시도해주세요');
      }
    });
  };
  const deleteFavoriteArtist = () => {
    commonAPI.deleteFavorite(artistId).then((data) => {
      if (data) {
        console.log('즐겨찾기 해제 성공');
        setIsFavorite(false);
      } else {
        window.alert('즐겨찾기 해제 실패하였습니다. 다시 시도해주세요');
      }
    });
  };

  const getIfFavoriteArtist = () => {
    communitypageAPI
      .getIfFavoriteArtist(artistId)
      .then((data) => setIsFavorite(data));
  };

  // const getPostLikeQuant = () => {
  //   communitypageAPI
  //     .getPostLikeQuant(artistId,postId)
  //     .then((data) => console.log(data));
  // };

  useEffect(() => {
    getIfFavoriteArtist();
  }, []);
  useEffect(() => {
    fetchData();
  }, [isFavorite]);

  return (
    <>
    <s.Wrapper>
      <Header />
      <s.ProfileContainer>
        <s.ProfileWrapper>
          <s.ProfileImage>
            {artistInfo && <img src={artistInfo?.photo} alt='artistPhoto' />}
          </s.ProfileImage>
          <s.ProfileInfo>
            {artistInfo && <s.ArtistName>{artistInfo?.groupName}</s.ArtistName>}
            <s.FavoriteQuantWrapper>
              <s.StarIcon
                onClick={handleClickStar}
                src={isFavorite ? Star : EmptyStar}
                alt='star'
              />
              {artistFavoriteQuant && artistFavoriteQuant}
            </s.FavoriteQuantWrapper>
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
            {!memberProfile
              ? allPost.map((item) => (
                  <s.CardImageContainer 
                    onClick={openModal}
                    key={`allPost_${item.postId}`}
                  >
                    <img src={item.polaroid} alt='allPolaroid' />
                  </s.CardImageContainer>
                ))
              : memberPost?.map((item) => (
                  <s.CardImageContainer
                    onClick={openModal}
                    key={`memberPost_${item.postId}`}
                  >
                    <img src={item.polaroid} alt='Polaroid' />
                  </s.CardImageContainer>
                ))}
          </s.ContentWrapper>
        </s.photoCardContainer>
      </s.BodyContainer>
        <Modal
          style={postModalStyle}
          isOpen={isOpenModal}
          onRequestClose={onCloseModal}
        >
          <PostModal />
        </Modal>
      <s.ScrollToTopButton
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        ▲
      </s.ScrollToTopButton>
    </s.Wrapper>
    </>
  );
};

export default CommunityPage;
