import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  min-width: 1000px;
  width: 97%;
  height: fit-content;

  padding-bottom: 100px;

  margin-top: 40px;

  border-radius: 30px;

  &.4 {
    background: linear-gradient(
      to bottom,
      rgba(107, 119, 226, 100%),
      rgba(173, 68, 106, 55.21%),
      rgba(130, 127, 167, 0%)
    );

    color: white;
  }

  &.1 {
    background: linear-gradient(
      to bottom,
      rgba(255, 108, 2, 80%),
      rgba(254, 229, 2, 70%),
      rgba(130, 127, 167, 0%)
    );
    color: white;
  }
`;

export const CollectionName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;
  margin-bottom: 20px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 30px;
  font-weight: 900;

  width: 100%;
  height: fit-content;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;

  padding-right: 20px;
`;

export const PhotocardListWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;

  width: 100%;
  height: fit-content;

  margin: 40px 40px; */

  display: flex;
  flex-direction: row;
  width: fit-content;
  height: 45vh;
  justify-content: center;
  align-items: center;

  margin: 0 40px;
  margin-bottom: 40px;
`;

export const VersionLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5vw;
  height: fit-content;

  margin-top: 60px;
  margin-right: 30px;

  font-size: 22px;
  font-weight: 800;
`;

export const PhotoCardContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 400px;

  margin: 20px 20px; */

  width: 12vw;
  height: fit-content;
  /* &.4 {
    width: 12%;
  }

  &.1 {
  }

  &.2 {
    width: 12%;
  } */

  &:hover {
    transform: scale(1.1);
    filter: brightness(100%);
  }
`;
export const MemberName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 400;

  color: #898989;

  margin-top: 10px;
  margin-bottom: 30px;

  /* &.뉴진스 {
    color: white;
  }

  &.방탄소년단 {
    color: white;
  } */
`;

export const PhotocardImageFrame = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 400px;

  overflow: hidden;

  object-fit: contain;

  border-radius: 20px;

  background-color: lightgray; */
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightgray;

  width: 11vw;
  height: 16vw;
  /* min-width: 120px; */
  margin: 0 15px 0 15px;
  border-radius: 20px;
  outline: #d7d7d7 1px solid;
  border-collapse: collapse;
  overflow: hidden;

  box-shadow: 11px 13px 20px 3px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  background-color: #d7d7d7;
  cursor: pointer;
  transition: all 0.1s linear;

  /* box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.4); */
`;

export const PhotocardImage = styled.img`
  /* width: 100%; */
  /* height: 100%; */

  object-fit: cover;
  /* display: flex; */
  /* padding: 0; */

  width: 100%;
  height: 100%;

  &.locked {
    filter: blur(8px) brightness(90%);
  }
`;

export const InputCodeButton = styled.button`
  position: absolute;
  right: 80px;
  top: 430px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  color: black;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  font-weight: 600;
  z-index: 998;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(50%);
  }
`;
