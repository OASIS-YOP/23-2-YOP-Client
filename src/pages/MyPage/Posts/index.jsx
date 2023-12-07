import { useEffect, useState } from 'react';
import * as s from './style';
import dotdotdot from '../../../assets/dotdotdot.svg';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';
import LikedIcon from '../../../assets/LikedIcon.svg';
import commonAPI from '../../../api/commonAPI';

const Posts = () => {
  const [postArtistList, setPostArtistList] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(0);
  const [artistPost, setArtistPost] = useState([]);
  const [isClickDot, setIsClickDot] = useState(false);

  const getMyPostArtistTab = () => {
    mypageAPI.getMyPostArtistTab().then((data) => {
      if (data.postArtistList.length === 0) {
        return;
      } else {
        setPostArtistList(data?.postArtistList);
        setSelectedArtist(data?.postArtistList[0]?.artistId);
      }
    });
  };

  const getMyPost = () => {
    mypageAPI.getMyPost(selectedArtist).then((data) => {
      setArtistPost(data?.myPostList);
    });
  };

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
  };

  const handleClickdot = () => {
    setIsClickDot((prev) => !prev);
  };

  const handleClickDel = (postId) => {
    setIsClickDot(false);
    deleteMyPost(postId);
    getMyPost(selectedArtist);
  };

  const deleteMyPost = (postId) => {
    mypageAPI.deleteMyPost(postId).then((data) => {
      console.log(data);
    });
  };

  const artists = postArtistList?.map((item) => {
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
          {selectedArtist === 0 ? (
            <div
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: '18px',
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
            artistPost &&
            artistPost?.map((item) => (
              <ArtistPosts
                key={`post_${item.postId}`}
                post={item}
                isClickDot={isClickDot}
                handleClickdot={handleClickdot}
                handleClickDel={handleClickDel}
                updateMyPost={getMyPost}
              />
            ))
          )}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  );
};

//포스트 목록
const ArtistPosts = ({
  post,
  isClickDot,
  handleClickdot,
  handleClickDel,
  updateMyPost,
}) => {
  const [isLikePost, setIsLikePost] = useState();

  const postLike = () => {
    commonAPI.postLike(post.postId).then((data) => {
      if (data) {
        console.log(data.message);
        updateMyPost();
      } else {
        console.log('postLike error');
      }
    });
  };

  const deleteLike = () => {
    commonAPI.deleteLike(post.postId).then((data) => {
      if (data) {
        console.log(data.message);
        updateMyPost();
      } else {
        console.log('deleteLike error');
      }
    });
  };

  const getIfLikePost = () => {
    commonAPI.getIfLikePost(post.postId).then((data) => {
      setIsLikePost(data);
      console.log(`${post.postId}의 좋아요여부: ${data}`);
    });
  };

  const handleClickLikeIcon = () => {
    setIsLikePost((prev) => !prev);
    isLikePost ? deleteLike() : postLike();
  };

  useEffect(() => {
    getIfLikePost();
  }, []);
  return (
    <>
      <s.PostFrame key={`post_${post.postId}`}>
        <s.leftContainer>
          <s.PostImageFrame>
            <s.PostImage src={post.polaroid} />
          </s.PostImageFrame>
        </s.leftContainer>
        <s.rightContainer>
          <s.postInfoWrapper>
            <s.nicknameWrapper>{post.nickname}</s.nicknameWrapper>
            <s.tagsWrapper>
              #{post.enterComp} #{post.groupName} <br />
              {post.groupName === post.memberName ? '' : `#${post.memberName}`}#
              {post.albumName}
            </s.tagsWrapper>
            <s.dateWrapper>
              {post.postDateTime?.slice(0, post.postDateTime?.indexOf('T'))}
            </s.dateWrapper>
            <s.likeWrapper>
              <s.likeIcon
                src={isLikePost ? LikedIcon : UnLikedIcon}
                onClick={handleClickLikeIcon}
              />
              <s.likeCount>{post.likeQuant}</s.likeCount>
            </s.likeWrapper>
          </s.postInfoWrapper>
          <s.moreIconWrapper>
            <s.moreIcon src={dotdotdot} onClick={handleClickdot} />
          </s.moreIconWrapper>
        </s.rightContainer>
      </s.PostFrame>
      {isClickDot && (
        <s.deleteButton onClick={() => handleClickDel(post.postId)}>
          삭제
        </s.deleteButton>
      )}
    </>
  );
};

export default Posts;
