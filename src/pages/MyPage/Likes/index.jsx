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

  const userlist = [ 'User1', ];

  const users = userlist.map((user, index) => {
    return (
      <s.nicknameWrapper
        key={index}
      >
       {user} 
      </s.nicknameWrapper>
    )
  })





  const createPost = (post) => {
    return (
      <>
      <s.PostFrame key={post.id}>
        <s.leftContainer>
          <s.PostImage />
        </s.leftContainer>
          <s.rightContainer>
            <s.postInfoWrapper>
              {users}
              <s.tagsWrapper>
                #태그1 #태그2 #태그3 #태그4 #태그5
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
      return prevLikes.map((post) => {
        if(post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1}
        } else {
          return post;
        }
      })
    })
  };

  const posts = postLikes.map((post) => createPost(post));

  return (
    <>
      <s.Wrapper> 
        <s.PostsWrapper>
          {posts}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )

}

export default Likes;