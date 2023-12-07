import { useEffect, useState } from 'react';
import * as s from './style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';
import commonAPI from '../../../api/commonAPI';

const MyLikes = () => {
  const userId = 1;
  const [myLikePost, setMyLikePost] = useState([]);

  const getMyLike = () => {
    mypageAPI.getMyLike(userId).then((data) => {
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
            <s.NoLikes>마음에 드는 도안에 좋아요를 눌러보세요!</s.NoLikes>
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
  const userId = 1;
  const [isLikePost, setIsLikePost] = useState();

  //여긴 postLike가 필요없음.
  const deleteLike = () => {
    commonAPI.deleteLike(userId, item.postId).then((data) => {
      if (data) {
        console.log(data.message);
        updateMyLike();
      } else {
        console.log('deleteLike error');
      }
    });
  };

  const getIfLikePost = () => {
    commonAPI.getIfLikePost(userId, item.postId).then((data) => {
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
          <s.tagsWrapper>
            #{item.enterComp} #{item.groupName} <br />
            {item.groupName === item.memberName ? '' : `#${item.memberName}`}#
            {item.albumName}
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
