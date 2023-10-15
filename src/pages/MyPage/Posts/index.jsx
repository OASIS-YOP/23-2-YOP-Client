import { useState, useEffect } from "react";
import * as s from "./style";
import dotdotdot from "../../../assets/dotdotdot.svg";
import UnLikedIcon from "../../../assets/UnLikedIcon.svg";
import LikedIcon from "../../../assets/LikedIcon.svg";

const Posts = () => {
  // const [ isClicked, setIsClicked ] = useState(false);
  const [ postLikes, setPostLikes ] = useState([
    { id: 1, liked: false, likeCount: 0 },
    { id: 2, liked: false, likeCount: 0 },
    { id: 3, liked: false, likeCount: 0 },
    { id: 4, liked: false, likeCount: 0 },
  ])

  const artistslist = ['뉴진스', '르세라핌', '방탄소년단'];

  const artists = artistslist.map((artist, index) => {
    return (
      <s.ArtistsTab
        // onClick={onClickArtist}
        // isClicked={isClicked}
        // className={isClicked ? 'active' : ''}
        key={index}
      >{artist}</s.ArtistsTab>
    )
  })

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

  const createPost = (post) => {
    return (
      <>
      <s.PostFrame key={post.id}>
        <s.leftContainer>
          <s.PostImage />
        </s.leftContainer>
          <s.rightContainer>
            <s.postInfoWrapper>
              <s.nicknameWrapper>
                OnPol1004
              </s.nicknameWrapper>
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

  const posts = postLikes.map((post) => createPost(post));

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>
          {artists}
        </s.ArtistsTabWrapper>
        <s.PostsWrapper>
          {posts}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )
}

export default Posts;