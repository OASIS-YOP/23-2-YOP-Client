import * as s from './style';
import dotdotdot from '../../../../assets/dotdotdot.svg';
import UnLikedIcon from '../../../../assets/UnLikedIcon.svg';
import { useEffect, useState } from 'react';
import mypageAPI from '../../../../api/mypage/mypageAPI';

const CreatePost = ({ selectedArtistInfo, setCurrentArtist, post }) => {
  const artistPosts = selectedArtistInfo ? selectedArtistInfo.posts : [];

  const getMyPost = () => {
    mypageAPI.getMyPost(1, 1).then((data) => console.log(data));
  };

  const deleteMyPost = () => {
    mypageAPI.deleteMyPost(1, 1).then((data) => {
      console.log(data);
    });
  };
  useEffect(() => {
    // getMyPost();
  }, []);
  return (
    <>
      {artistPosts.length === 0 ? (
        <div
          style={{color: 'gray',
            fontWeight: 'bold',
            width: '100%',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >아티스트의 도안을 꾸미고 포스트해보세요!</div>
      ) : (
        artistPosts.map((item, index) => (
          <s.PostFrame key={item.id}>
            <s.leftContainer>
              <s.PostImageFrame>
                <s.PostImage src={item.fileUrl} />
              </s.PostImageFrame>
            </s.leftContainer>
            <s.rightContainer>
              <s.postInfoWrapper>
                <s.nicknameWrapper>OnPol1004</s.nicknameWrapper>
                <s.tagsWrapper>
                  #{item.ent} #{item.artist} <br /> #{item.member} #
                  {item.collection}
                </s.tagsWrapper>
                <s.dateWrapper>2023.10.13</s.dateWrapper>
                <s.likeWrapper>
                  <s.likeIcon src={UnLikedIcon} />
                  <s.likeCount key={item.id}>{item.likeCount}</s.likeCount>
                </s.likeWrapper>
              </s.postInfoWrapper>
              <s.moreIconWrapper>
                <s.moreIcon src={dotdotdot} />
              </s.moreIconWrapper>
            </s.rightContainer>
          </s.PostFrame>
        ))
      )}
    </>
  );
};

export default CreatePost;
