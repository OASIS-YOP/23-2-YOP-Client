import { useState, useEffect } from "react";
import * as s from "./style";
import dotdotdot from "../../../assets/dotdotdot.svg";

const Posts = () => {
  // const [ isClicked, setIsClicked ] = useState(false);

 

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


  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>
          {artists}
        </s.ArtistsTabWrapper>
        <s.PostsWrapper>
          <s.PostFrame>
            <s.leftContainer>
              <s.PostImage />
            </s.leftContainer>
            <s.rightContainer>
              <s.postInfoWrapper>
                <s.nicknameWrapper>
                  {/* 닉네임 */}
                  OnPol1004
                </s.nicknameWrapper>
                <s.tagsWrapper>
                  {/* 태그 */}
                  #태그1 #태그2 #태그3 #태그4 #태그5
                </s.tagsWrapper>
                <s.dateWrapper>
                  {/* 업로드 날짜 */}
                  2023.10.13
                </s.dateWrapper>
                <s.likeWrapper>
                  <p className='icon'>♡</p>
                  <p>1,004</p>
                </s.likeWrapper>
              </s.postInfoWrapper>
              <s.moreIconWrapper>
                <s.moreIcon src={dotdotdot} />
              </s.moreIconWrapper>
            </s.rightContainer>
          </s.PostFrame>
          <s.PostFrame>
            <s.leftContainer>
              <s.PostImage />
            </s.leftContainer>
            <s.rightContainer>
              
            </s.rightContainer>
          </s.PostFrame>
          <s.PostFrame>
            <s.leftContainer>
              <s.PostImage />
            </s.leftContainer>
            <s.rightContainer>
              
            </s.rightContainer>
          </s.PostFrame>
        </s.PostsWrapper>
      </s.Wrapper>
    </>
  )
}

export default Posts;