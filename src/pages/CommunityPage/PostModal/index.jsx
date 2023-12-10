import { useEffect, useState } from 'react';
import * as s from './PostModal.style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';
import commonAPI from '../../../api/commonAPI';

const PostModal = ({ item }) => {
  const [isLikePost, setIsLikePost] = useState();
  const [postLikeQuant, setPostLikeQuant] = useState();

  const postLike = () => {
    commonAPI.postLike(item.postId).then((data) => {
      if (data) {
        console.log(data.message);
      } else {
        console.log('postLike error');
      }
    });
  };
  const deleteLike = () => {
    commonAPI.deleteLike(item.postId).then((data) => {
      if (data) {
        console.log(data.message);
      } else {
        console.log('deleteLike error');
      }
    });
  };

  const getIfLikePost = () => {
    commonAPI.getIfLikePost(item.postId).then((data) => {
      setIsLikePost(data);
      console.log(`${item.postId}의 좋아요여부: ${data}`);
    });
  };

  const getPostLikeQuant = () => {
    commonAPI.getPostLikeQuant(item.postId).then(() => {});
  };

  const handleClickLikeIcon = () => {
    setIsLikePost((prev) => !prev);
    isLikePost ? deleteLike() : postLike();
  };

  useEffect(() => {
    getIfLikePost();
  }, []);

  return (
    <s.PostFrame key={item.postId}>
      <s.leftContainer>
        <s.PostImageFrame>
          <s.PostImage src={item.polaroid} />
        </s.PostImageFrame>
      </s.leftContainer>
      <s.rightContainer>
        <s.postInfoWrapper>
          <s.nicknameWrapper>{item.nickname}</s.nicknameWrapper>
          <s.tagsWrapper>
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

export default PostModal;
