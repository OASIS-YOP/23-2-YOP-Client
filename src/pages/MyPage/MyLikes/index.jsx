import { useEffect, useState } from 'react';
import * as s from './style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';
import commonAPI from '../../../api/commonAPI';

const MyLikes = () => {
  const [myLikePost, setMyLikePost] = useState([]);

  const getMyLike = () => {
    mypageAPI.getMyLike().then((data) => {
      setMyLikePost(data.myLikeList);
      console.log(data.myLikeList);
    });
  };

  useEffect(() => {
    getMyLike();
  }, []);
  return (
    <>
      <s.Wrapper>
        <s.PostsWrapper>
          {myLikePost.length === 0 ? (
            <s.NoLikes
              style={{
                color: 'gray',
                fontFamily: 'Noto Sans KR',
                fontSize: '18px',
                fontWeight: '600',
                width: '100%',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '30px',
              }}
            >마음에 드는 도안에 좋아요를 눌러보세요!</s.NoLikes>
          ) : (
            <>
              {myLikePost &&
                myLikePost.map((item) => (
                  <MyLikePost item={item} updateMyLike={getMyLike} />
                ))}
            </>
          )}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  );
};

const MyLikePost = ({ item, updateMyLike }) => {
  const [isLikePost, setIsLikePost] = useState();

  //여긴 postLike가 필요없음.
  const deleteLike = () => {
    commonAPI.deleteLike(item.postId).then((data) => {
      if (data) {
        console.log(data.message);
        updateMyLike();
      } else {
        console.log('deleteLike error');
      }
    });
  };

  const getIfLikePost = () => {
    commonAPI.getIfLikePost(item.postId).then((data) => {
      setIsLikePost(data);
    });
  };

  const handleClickLikeIcon = () => {
    setIsLikePost((prev) => !prev);
    deleteLike();
  };

  useEffect(() => {
    getIfLikePost();
  }, []);

  return (
    <s.PostFrame key={item.id}>
      <s.leftContainer>
        <s.PostImageFrame>
          <s.PostImage src={item.polaroid} />
        </s.PostImageFrame>
      </s.leftContainer>
      <s.rightContainer>
        <s.postInfoWrapper>
          <s.nicknameWrapper>{item.nickname}</s.nicknameWrapper>
          <s.tagsWrapper >
            <s.tag>
            #{item.enterComp}
            </s.tag>
            <s.tag>
              #{item.groupName}
            </s.tag>
            <s.tag>
              {item.groupName === item.memberName ? '' : `#${item.memberName}`}
            </s.tag>
            <s.tag>
              #{item.albumName}
            </s.tag>
          </s.tagsWrapper>
          <s.dateWrapper>
            {item?.postDateTime?.slice(0, item?.postDateTime.indexOf('T'))}
          </s.dateWrapper>
          <s.likeWrapper>
            <s.likeIcon
              src={isLikePost ? LikedIcon : UnLikedIcon}
              onClick={handleClickLikeIcon}
            />
            <s.likeCount>{item.likeQuant}</s.likeCount>
          </s.likeWrapper>
        </s.postInfoWrapper>
      </s.rightContainer>
    </s.PostFrame>
  );
};

export default MyLikes;
