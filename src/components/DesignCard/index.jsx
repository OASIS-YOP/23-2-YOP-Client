import { useState } from 'react';
import * as s from './DesignCard.style';
import UnLikedIcon from '../../assets/UnLikedIcon.svg';
import LikedIcon from '../../assets/LikedIcon.svg';

const DesignCard = ({ index }) => {
  //더미데이터(임시)

  const photoCard = {
    fileUrl: `${process.env.PUBLIC_URL}/images/hani.jpeg`,
    userName: 'OnPol1004',
    enterComp: 'ADOR',
    groupName: '뉴진스',
    memberName: '하니',
    albumName: 'GET_UP',
    version: '',
    likeCount: '1004',
  };

  // const handleClickLikeIcon = () => {};

  return (
    <s.Wrapper>
      {/** 해당 부분 이미지 추가 필요 * */}
      <s.IndexNumber>{index}</s.IndexNumber>
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

export default DesignCard;
