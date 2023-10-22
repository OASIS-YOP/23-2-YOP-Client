import { useState, } from "react";
import * as s from "./style";
import dotdotdot from "../../../assets/dotdotdot.svg";
import UnLikedIcon from "../../../assets/UnLikedIcon.svg";
// import LikedIcon from "../../../assets/LikedIcon.svg";

const Posts = () => {  
  const postLikes = [
    { id: 1, liked: false, likeCount: 1004 },
    { id: 2, liked: false, likeCount: 86 },
    { id: 3, liked: false, likeCount: 55 },
    { id: 4, liked: false, likeCount: 35 },
  ];

  const artistslist = ['뉴진스', '르세라핌', '방탄소년단'];

  const [selectedArtist, setSelectedArtist] = useState(artistslist[0]);

  const onClickArtist = (artistName) => {
    setSelectedArtist(artistName);
  };

  const artists = artistslist.map((artist, index) => {
    return (
      <s.ArtistsTab
        key={artist + index}
        onClick={() => onClickArtist(artist)}
        className={artist === selectedArtist ? 'active' : ''}
      >{artist}</s.ArtistsTab>
    )
  })

  
  const userName = [ 'OnPol1004', 'User1', 'User2', 'User3', 'User4', 'User5', 'User6', 'User7', 'User8', 'User9', 'User10'];

  const users = userName.map((user, index) => {
    return (
      <s.nicknameWrapper
        key={user + index}
      >{user}</s.nicknameWrapper>
    )
  });


  const createPost = (post) => {

    const user = users[post.id - 1];

    return (
      <>
      <s.PostFrame
      >
        <s.leftContainer>
          <s.PostImage />
        </s.leftContainer>
          <s.rightContainer>
            <s.postInfoWrapper
              key={post.id}
            >
              <>{user}</>
              <s.tagsWrapper>
                #소속사 #아티스트 <br/> #멤버이름 #컬렉션명
              </s.tagsWrapper>
              <s.dateWrapper>
                2023.10.13
              </s.dateWrapper>
              <s.likeWrapper>
                <s.likeIcon
                  src={ UnLikedIcon }
                />
                <s.likeCount
                  key={post.id}
                >
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
        <s.ArtistsTabWrapper
          
        >
          {artists}
        </s.ArtistsTabWrapper>
        <s.PostsWrapper>
          {posts}
          {/* {posts.filter(post => post.artist === selectedArtist)} */}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )
}

export default Posts;