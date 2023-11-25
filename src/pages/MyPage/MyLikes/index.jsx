import * as s from './style';
import dotdotdot from '../../../assets/dotdotdot.svg';
import UnLikedIcon from '../../../assets/UnLikedIcon.svg';
import LikedIcon from '../../../assets/LikedIcon.svg';
import { useEffect, useState } from 'react';
import mypageAPI from '../../../api/mypage/mypageAPI';

const MyLikes = () => {
  const userId = 1;
  const [myLikePost, setMyLikePost] = useState([]);
  const [postLikes, setPostLikes] = useState([
    { id: 1, liked: true, likeCount: 52 },
    { id: 2, liked: true, likeCount: 36 },
    { id: 3, liked: true, likeCount: 10512 },
    { id: 4, liked: true, likeCount: 89 },
  ]);

  const getMyLike = () => {
    mypageAPI.getMyLike(userId).then((data) => {
      setMyLikePost(data.myLikeList);
      console.log(data.myLikeList);
    });
  };
  const userName = [
    'OnPol1004',
    'User1',
    'User2',
    'User3',
    'User4',
    'User5',
    'User6',
    'User7',
    'User8',
    'User9',
    'User10',
  ];

  const handleClickLike = (postId) => {
    setPostLikes((prevLikes) => {
      const updatedLikes = prevLikes.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
          };
        }
        return post;
      });
      const updatedPosts = updatedLikes.filter((post) => post.liked);
      return updatedPosts;
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
              {myLikePost.map((item) => (
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
                        <s.likeIcon
                          src={LikedIcon}
                          // onClick={() => handleClickLike(post.id)}
                        />
                        <s.likeCount>{item.likeQuant}</s.likeCount>
                      </s.likeWrapper>
                    </s.postInfoWrapper>
                  </s.rightContainer>
                </s.PostFrame>
              ))}
            </>
          )}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  );
};

export default MyLikes;
