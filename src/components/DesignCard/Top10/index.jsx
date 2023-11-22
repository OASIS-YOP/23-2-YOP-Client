import { useState } from 'react';
import * as s from '../DesignCard.style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';

const Top10DesignCard = ({ photo, index }) => {
  // const handleClickLikeIcon = () => {};

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
            <s.likeIcon src={LikedIcon} />
            <s.likeCount>1000</s.likeCount>
          </s.likeWrapper>
        </s.ContentLiked>
        <s.ContentText>{photo.nickname}</s.ContentText>
        <s.ContentText>
          #{photo.enterComp}#{photo.groupName}
          <br />#{photo.memberName}#{photo.albumName}
        </s.ContentText>
      </s.ContentContainer>
    </s.Wrapper>
  );
};

export default Top10DesignCard;
