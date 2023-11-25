import styled from 'styled-components';
// import // pointColor,
// //   primaryColor,
// //   secondaryColor,
// // whiteColor,
// '../../../../GlobalStyles';



export const StickerList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; ;
  justify-content: space-evenly;

  overflow-y: scroll;
  
  width: 95%;
  height: 560px;
  
  padding: 30px 10px;

  //스크롤바 커스텀 기능 조사중...

    & img {
      vertical-align: middle;
      align-self: center;
      margin: 10px; /* 각 요소 사이에 간격 */
      padding: 10px;
      
      &:hover {
        cursor: pointer;
        opacity: 0.85;
      }

    }

`;
