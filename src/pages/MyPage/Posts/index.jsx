import { useState, useEffect } from "react";
import * as s from "./style";

const Posts = () => {
  const [isClicked, setIsClicked] = useState(false);

  // const artists = [뉴진스, 르세라핌, 방탄소년단];


  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>
          <s.ArtistsTab
            // onClick={onClickArtist}
            isClicked={isClicked}
            className={isClicked ? 'active' : ''}
            artistIndex={0}
          >뉴진스</s.ArtistsTab>
          <s.ArtistsTab>{ }</s.ArtistsTab>
        </s.ArtistsTabWrapper>
      </s.Wrapper>
    
    </>
  )
}

export default Posts;