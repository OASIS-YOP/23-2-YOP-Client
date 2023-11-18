import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  width: 97%;
  height: fit-content;
  
  margin-top: 40px;

  border-radius: 30px;

  &.뉴진스 {
    background: 
    linear-gradient(
      to bottom, 
      rgba(107, 119, 226, 100%),
      rgba(173, 68, 106, 55.21%),
      rgba(130, 127, 167, 0%)
    );

    color: white;
  }

  &.방탄소년단 {
    background:
    linear-gradient(
      to bottom, 
      rgba(255, 108, 2, 80%),
      rgba(254, 229, 2, 70%),
      rgba(130, 127, 167, 0%)
    );
    color: white;

  }


`



export const CollectionName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;

  font-size: 30px;
  font-weight: bold;

  width: 100%;
  height: fit-content;

`;

// export const VersionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;

//   width: 1%;
//   height: 100%;

//   padding: 80px 0;


// `;

// export const Version = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: 50%;

//   font-size: 20px;
//   font-weight: bold;


// `

export const PhotocardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;

  width: 100%;
  height: 800px;

  margin: 40px 40px;


  // border: 1px solid red;
`;

export const PhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  margin: 20px 20px;

  &.뉴진스 {
    width: 12%;
  }

  &.방탄소년단 {
    width: 10%;
  }

  &.에스파 {
    width: 12%;
  }

`
export const MemberName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;

  margin-top: 10px;
  margin-bottom: 30px;

  &.뉴진스 {
    color: white;
  }

  &.방탄소년단 {
    color: white;
  }

`

export const PhotocardImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  width: 100%;
  height: fit-content;

  overflow: hidden;

  border-radius: 20px;

  background-color: lightgray;

  box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.4);

`;


export const PhotocardImage = styled.img`
  display: flex;
  padding: 0;

  background-color: lightgray;

 
  &.locked {
    filter: blur(5px);
  }

  &.뉴진스 {
    width: 100%;
  }

  &.방탄소년단 {
    width: 230%;
  }

  &.에스파 {
    width: 100%;
  }


`;