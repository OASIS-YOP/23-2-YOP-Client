import { useEffect, useState } from 'react';
import * as s from '../DesignCard.style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';
import commonAPI from '../../../api/commonAPI';

const Top10DesignCard = ({ photo, index, updateHot10 }) => {
  const [isLikePost, setIsLikePost] = useState();

  const getIfLikePost = () => {
    commonAPI.getIfLikePost(photo.postId).then((data) => {
      setIsLikePost(data);
    });
  };
  const deleteLike = () => {
    commonAPI.deleteLike(photo.postId).then((data) => {
      if (data) {
        console.log(data.message);
        updateHot10();
      } else {
        console.log('delete error');
      }
    });
  };

  const postLike = () => {
    commonAPI.postLike(photo.postId).then((data) => {
      if (data) {
        console.log(data.message);
        updateHot10();
      } else {
        console.log('delete error');
      }
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
    <s.Wrapper>
      {/** 해당 부분 이미지 추가 필요 * */}
      <s.IndexNumber>{index}</s.IndexNumber>
      <s.ImageContainer>
        <img width={180} height={280} src={photo.polaroid} alt='도안' />
      </s.ImageContainer>
      <s.ContentContainer>
        <s.ContentLiked>
          <s.likeWrapper>
            <s.likeIcon
              src={isLikePost ? LikedIcon : UnLikedIcon}
              onClick={handleClickLikeIcon}
            />
            <s.likeCount>{photo.likeQuant}</s.likeCount>
          </s.likeWrapper>
        </s.ContentLiked>
        <s.ContentText>{photo.nickname}</s.ContentText>
        <s.tagsWrapper>
        <s.tag>
          #{photo.enterComp}
        </s.tag>
        <s.tag>
          #{photo.groupName}
        </s.tag>
        <s.tag>
         {photo.groupName === photo.memberName ? '' : photo.memberName}
        </s.tag>
        <s.tag>
          #{photo.albumName}
        </s.tag>
        </s.tagsWrapper>
      </s.ContentContainer>
    </s.Wrapper>
  );
};

export default Top10DesignCard;
