import { useEffect, useState } from 'react';
import * as s from './PostModal.style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';
import commonAPI from '../../../api/commonAPI';

const PostModal = ({ item }) => {
  const [isLikePost, setIsLikePost] = useState();
  const [postLikeQuant, setPostLikeQuant] = useState(item.likeQuant);

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
    commonAPI.getPostLikeQuant(item.postId).then((data) => {
      console.log(data);
      setPostLikeQuant(data.postLikeQuant);
    });
  };

  const handleClickLikeIcon = async () => {
    try {
      setIsLikePost((prev) => !prev);

      if (isLikePost) {
        deleteLike(); // 좋아요 삭제 API 호출
      } else {
        postLike(); // 좋아요 추가 API 호출
      }

      getPostLikeQuant(); // 좋아요 수 업데이트
    } catch (e) {
      console.log('Error in handleClickLikeIcon:', e);
    }
  };

  useEffect(() => {
    getIfLikePost();
  }, [postLikeQuant]);

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
            <s.likeCount>{postLikeQuant}</s.likeCount>
          </s.likeWrapper>
        </s.postInfoWrapper>
      </s.rightContainer>
    </s.PostFrame>
  );
};

export default PostModal;
