import { useState, } from "react";
import * as s from "./style";
import dotdotdot from "../../../assets/dotdotdot.svg";
import UnLikedIcon from "../../../assets/UnLikedIcon.svg";
import MyPosts from "../../../Temp/mypage/mypost/MyPosts";
// import LikedIcon from "../../../assets/LikedIcon.svg";

const Posts = () => {  

  const artistslist = ['뉴진스', '방탄소년단', '에스파',];

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

  const createPost = MyPosts[0].posts.map((post) => {

    return (
      <>
      <s.PostFrame
      >
        <s.leftContainer>
          <s.PostImageFrame>
            <s.PostImage src={post.fileUrl} />
          </s.PostImageFrame>  
        </s.leftContainer>
          <s.rightContainer>
            <s.postInfoWrapper
              key={post.id}
            >
              <s.nicknameWrapper>OnPol1004</s.nicknameWrapper>
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
  });

  // const posts = createPost.map((post) => []);

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper
          
        >
          {artists}
        </s.ArtistsTabWrapper>
        <s.PostsWrapper>
          {createPost}
          {/* {posts.filter(post => post.artist === selectedArtist)} */}
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )
}


export default Posts;