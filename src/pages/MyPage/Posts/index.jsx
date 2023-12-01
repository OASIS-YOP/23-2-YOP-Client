import { useEffect, useState } from 'react';
import * as s from './style';
import dotdotdot from '../../../assets/dotdotdot.svg';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';
// import LikedIcon from "../../../assets/LikedIcon.svg";

const Posts = () => {
  const [userId, setUserId] = useState(1);
  const [postArtistList, setPostArtistList] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState();
  const [artistPost, setArtistPost] = useState([]);
  const [isClickDot, setIsClickDot] = useState(false);

  const getMyPostArtistTab = () => {
    mypageAPI.getMyPostArtistTab(userId).then((data) => {
      setPostArtistList(data.postArtistList);
      setSelectedArtist(data.postArtistList[0].artistId);
    });
  };

  const getMyPost = () => {
    mypageAPI.getMyPost(userId, selectedArtist).then((data) => {
      setArtistPost(data.myPostList);
    });
  };

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
  };

  const handleClickdot = () => {
    setIsClickDot((prev) => !prev);
  };

  const handleClickDel = (userId, postId) => {
    setIsClickDot(false);
    deleteMyPost(userId, postId);
    getMyPost(userId, selectedArtist);
  };

  const deleteMyPost = (postId) => {
    mypageAPI.deleteMyPost(userId, postId).then((data) => {
      console.log(data);
    });
  };

  const artists = postArtistList.map((item) => {
    return (
      <s.ArtistsTab
        key={`postArtist_${item.artistId}`}
        onClick={() => onClickArtist(item.artistId)}
        className={item.artistId === selectedArtist ? 'active' : ''}
      >
        {item.groupName}
      </s.ArtistsTab>
    );
  });

  //포스트 목록
  const ArtistPosts = () => {
    return (
      <>
        {selectedArtist === 0 ? (
          <div
            style={{
              color: 'gray',
              fontWeight: 'bold',
              width: '100%',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            아티스트의 도안을 꾸미고 포스트해보세요!
          </div>
        ) : (
          artistPost?.map((item) => (
            <>
              <s.PostFrame key={`post_${item.postId}`}>
                <s.leftContainer>
                  <s.PostImageFrame>
                    <s.PostImage src={item.polaroid} />
                  </s.PostImageFrame>
                </s.leftContainer>
                <s.rightContainer>
                  <s.postInfoWrapper>
                    <s.nicknameWrapper>{item.nickname}</s.nicknameWrapper>
                    <s.tagsWrapper>
                      #{item.enterComp} #{item.groupName} <br />
                      {item.groupName === item.memberName
                        ? ''
                        : `#${item.memberName}`}
                      #{item.albumName}
                    </s.tagsWrapper>
                    <s.dateWrapper>
                      {item.postDateTime?.slice(
                        0,
                        item.postDateTime?.indexOf('T')
                      )}
                    </s.dateWrapper>
                    <s.likeWrapper>
                      <s.likeIcon src={UnLikedIcon} />
                      <s.likeCount key={item.id}>{item.likeQuant}</s.likeCount>
                    </s.likeWrapper>
                  </s.postInfoWrapper>
                  <s.moreIconWrapper>
                    <s.moreIcon src={dotdotdot} onClick={handleClickdot} />
                  </s.moreIconWrapper>
                </s.rightContainer>
              </s.PostFrame>
              {isClickDot && (
                <s.deleteButton onClick={() => handleClickDel(item.postId)}>
                  삭제
                </s.deleteButton>
              )}
            </>
          ))
        )}
      </>
    );
  };

  useEffect(() => {
    getMyPostArtistTab();
  }, []);
  useEffect(() => {
    getMyPost();
  }, [selectedArtist]);

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        <s.PostsWrapper>
          <ArtistPosts />
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  );
};

export default Posts;
