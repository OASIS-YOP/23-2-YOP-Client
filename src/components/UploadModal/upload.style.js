import styled from 'styled-components';

export const Wrapper = styled.div`
  //드래그 방지
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  width: 660px;
  height: 510px;

  padding: 23px 23px;
`;

export const HeaderLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-satrt;
  align-items: center;
  width: 100%;
  height: 43px;

  margin-bottom: 30px;

  > span {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 22px;
    font-weight: 700;

    margin: 0 15px;

    color: #515151;
  }
`;

export const HeaderLabel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  background-color: gray;
  color: white;
  border-radius: 20px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18.5px;
  font-weight: 600;
  border: none;

  padding: 0 20px;

  &.active {
    cursor: pointer;

    &:hover {
      filter: brightness(80%);
    }
  }

  &#active {
    background-color: #3f70ff;
  }
`;

export const HeaderLabelName = styled.div``;

export const NoCollectionWrapper = styled.div``;
export const NoCollectionText = styled.div``;

export const ArtistTabWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  height: 35px;
  padding-left: 23px;
  /* border: 1px solid red; */
  margin-top: 15px;
`;

export const ArtistTab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  margin: 0 8px;
  border: none;
  background-color: transparent;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16.5px;
  font-weight: 500;
  color: gray;

  &:hover {
    color: #3f70ff;
    cursor: pointer;
  }

  &.active {
    color: black;
    &:hover {
      color: #3f70ff;
      cursor: pointer;
    }
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  width: 100%;
  height: fit-content;
`;

export const CollectionCardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 420px;
  border-radius: 20px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }

  //   /* border: 1px solid black; */
`;

// export const DesignsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   flex-wrap: nowrap;

//   width: 90%;
//   height: fit-content;

// `;

// export const DesignListWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;

//   background-color: white;

//   width: 100%;
//   height: fit-content;

//   margin: 0 40px;

//   // border: 1px solid red;
// `;

export const UploadStepWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  width: 90%;
  height: 350px;
`;

export const SelectedDesignWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 20px;

  overflow: hidden;

  border-radius: 20px;

  box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.4);

  &:hover {
    > img {
      filter: brightness(70%);
    }
  }
`;

export const SelectedDesignImage = styled.img`
  width: 200px;
  height: 290px;
`;

export const SelectedDesignInfoWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  justify-content: center;
  filter: brightness(100%);

  width: fit-content;
  height: fit-content;

  z-index: 998;
`;

export const SelectedDesignInfo = styled.div`
  display: absolute;
  text-align: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: white;
`;

export const SelectedDesignContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin: 20px 40px;
`;

export const SelectedDesignContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 3px 0;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: black;
`;

export const PostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 40px;

  border: none;
  border-radius: 30px;

  background-color: gray;

  color: white;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #3f70ff;
  }

  &:active {
    background-color: gray;
  }

  margin-top: 30px;
`;
