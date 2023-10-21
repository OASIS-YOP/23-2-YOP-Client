import { useState } from 'react';
import * as s from '../DesignCard.style';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';

const Top10DesignCard = ({ photoCard }) => {
  // const handleClickLikeIcon = () => {};

  return (
    <s.Wrapper>
      {/** 해당 부분 이미지 추가 필요 * */}
      <s.IndexNumber>{photoCard.index}</s.IndexNumber>
      <s.ImageContainer>
        <img width={180} height={280} src={photoCard.fileUrl} alt='도안' />
      </s.ImageContainer>
      <s.ContentContainer>
        <s.ContentLiked>
          <s.likeWrapper>
            <s.likeIcon src={LikedIcon} />
            <s.likeCount>{photoCard.likeCount}</s.likeCount>
          </s.likeWrapper>
        </s.ContentLiked>
        <s.ContentText>{photoCard.userName}</s.ContentText>
        <s.ContentText>
          #{photoCard.enterComp}#{photoCard.groupName}
          <br />#{photoCard.memberName}#{photoCard.albumName}
        </s.ContentText>
      </s.ContentContainer>
    </s.Wrapper>
  );
};

export default Top10DesignCard;
