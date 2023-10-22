import * as s from './style';
import dotdotdot from "../../../assets/dotdotdot.svg";
import UnLikedIcon from "../../../assets/UnLikedIcon.svg";
import LikedIcon from "../../../assets/LikedIcon.svg";
import { useState } from 'react';


const Likes = () => {

  const [ postLikes, setPostLikes ] = useState([
    { id: 1, liked: true, likeCount: 52 },
    { id: 2, liked: true, likeCount: 36 },
    { id: 3, liked: true, likeCount: 10512 },
    { id: 4, liked: true, likeCount: 89 },
  ])

  const userName = [ 'OnPol1004', 'User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10'];

  const users = userName.map((user, index) => {
    return (
      <s.nicknameWrapper
        key={user + index}
      >{user}</s.nicknameWrapper>
    )
  });




  
  const createPost = (post) => {
    if (!post.liked) {
       ; // 좋아요가 false인 포스트는 렌더링하지 않음
    }

    const user = users[post.id - 1];

    return (
      <>
      <s.PostFrame key={post.id}>
        <s.leftContainer>
          <s.PostImage />
        </s.leftContainer>
          <s.rightContainer>
            <s.postInfoWrapper>
              <>{user}</>
              <s.tagsWrapper>
                #소속사 #아티스트 <br/> #멤버이름 #컬렉션명
              </s.tagsWrapper>
              <s.dateWrapper>
                2023.10.13
              </s.dateWrapper>
              <s.likeWrapper>
                <s.likeIcon
                  src={post.liked ? LikedIcon : UnLikedIcon }
                  onClick={() => handleClickLike(post.id)}
                />
                <s.likeCount>
                  {post.likeCount}
                </s.likeCount>
              </s.likeWrapper>
            </s.postInfoWrapper>
            <s.moreIconWrapper>
              <s.moreIcon
                src={dotdotdot}
              />
            </s.moreIconWrapper>
          </s.rightContainer>
        </s.PostFrame>
      </>
    )
  }

  const handleClickLike = (postId) => {
    setPostLikes((prevLikes) => {
      const updatedLikes = prevLikes.map((post) => {
        if(post.id === postId) {
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

  const posts = postLikes.map((post) => createPost(post));

  return (
    <>
      <s.Wrapper> 
        <s.PostsWrapper>
          {posts.length === 0 ? <s.NoLikes>마음에 드는 도안에 좋아요를 눌러보세요!</s.NoLikes> : posts }
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )

}

export default Likes;