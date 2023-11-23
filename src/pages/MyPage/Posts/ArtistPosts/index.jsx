import * as s from './style';
import dotdotdot from '../../../../assets/dotdotdot.svg';
import UnLikedIcon from '../../../../assets/UnLikedIcon.svg';
import { useEffect, useState } from 'react';
import mypageAPI from '../../../../api/mypage/mypageAPI';

const CreatePost = ({ selectedArtist }) => {
  const [userId, setUserId] = useState(1);
  const [artistPost, setArtistPost] = useState([]);
  const [isClickDot, setIsClickDot] = useState(false);

  const handleClickdot = () => {
    setIsClickDot((prev) => !prev);
  };

  const handleClickDel = (userId, postId) => {
    setIsClickDot(false);
    deleteMyPost(userId, postId);
    getMyPost(userId, selectedArtist);
  };
  const getMyPost = () => {
    mypageAPI.getMyPost(userId, selectedArtist).then((data) => {
      setArtistPost(data.myPostList);
      console.log(data.myPostList);
    });
  };

  const deleteMyPost = (postId) => {
    mypageAPI.deleteMyPost(userId, postId).then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    getMyPost(userId, selectedArtist);
  }, []);

  return (
    <>
      {selectedArtist === 0 ? (
        <div
          style={{
            color: 'gray',
            fontWeight: 'bold',
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
        artistPost?.map((item) => (
          <>
            <s.PostFrame key={`post_${item.postId}`}>
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
                    {item.groupName === item.memberName
                      ? ''
                      : `#${item.memberName}`}
                    #{item.albumName}
                  </s.tagsWrapper>
                  <s.dateWrapper>
                    {item?.postDateTime.slice(
                      0,
                      item?.postDateTime.indexOf('T')
                    )}
                  </s.dateWrapper>
                  <s.likeWrapper>
                    <s.likeIcon src={UnLikedIcon} />
                    <s.likeCount key={item.id}>{item.likeQuant}</s.likeCount>
                  </s.likeWrapper>
                </s.postInfoWrapper>
                <s.moreIconWrapper>
                  <s.moreIcon src={dotdotdot} onClick={handleClickdot} />
                </s.moreIconWrapper>
              </s.rightContainer>
            </s.PostFrame>
            {isClickDot && (
              <s.deleteButton onClick={() => handleClickDel(item.postId)}>
                삭제
              </s.deleteButton>
            )}
          </>
        ))
      )}
    </>
  );
};

export default CreatePost;
