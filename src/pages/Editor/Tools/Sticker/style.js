import styled from 'styled-components';
// import // pointColor,
// //   primaryColor,
// //   secondaryColor,
// // whiteColor,
// '../../../../GlobalStyles';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

`;

export const StickerTabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  padding: 0;

`;

export const StickerTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  width: fit-content;
  height: 50px;

  margin: 0;
  padding: 0 20px;
  
  font-weight: 600;

  &.active {
    background-color: #f0f0f0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }


`;

export const StickerListC = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;

  overflow-y: scroll;
  
  width: 97%;
  height: 400px;
  
  padding: 10px 10px;

  //스크롤바 커스텀 기능 조사중...

    & img {
      vertical-align: middle;
      align-self: center;
      margin: 15px; /* 각 요소 사이에 간격 */
      padding: 10px;
      width: 110px;
      height: auto;
      
      &:hover {
        cursor: pointer;
        opacity: 0.85;
      }

    }

`;

export const StickerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;

  overflow-y: scroll;
  
  width: 97%;
  height: 460px;
  
  padding: 10px 10px;

  //스크롤바 커스텀 기능 조사중...

    & img {
      vertical-align: middle;
      align-self: center;
      margin: 15px; /* 각 요소 사이에 간격 */
      padding: 10px;
      width: 150px;
      height: auto;
      
      &:hover {
        cursor: pointer;
        opacity: 0.85;
      }

    }

`;

export const ColorTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  width: 100%;
  height: 60px;

  &:hover {
    cursor: pointer;
  }

`;

// export const ColorTabTitle = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   margin: 0 15px;

//   font-weight: 500;
//   font-size: 15px;
// `;

export const ColorTab = styled.div`
  width: 20px;
  height: 20px;

  margin: 0 20px;

  border-radius: 100px;

  background-color: ${({ color }) => color};

`;
