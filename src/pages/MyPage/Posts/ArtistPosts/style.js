import styled from 'styled-components';


export const PostFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 48px;

  min-width: 650px;
  min-height: 450px;
  max-width: 900px;
  max-height: 600px;
  width: 65%;
  height: 40vw;

  margin: 20px 0;

  box-shadow: 11px 13px 20px rgba(0, 0, 0, 0.25);

  // border: 9px solid #3F70FF;
`;

export const leftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 55%;
  height: 100%;

  background-color: #3f70ff;

  border-radius: 30px 0 0 30px;
`;

export const PostImageFrame = styled.div`
  min-width: 205px;
  min-height: 300px;
  max-width: 280px;
  max-height: 400px;
  width: 60%;
  height: 27vw;

  overflow: hidden;

  border-radius: 20px;

  background-color: lightgray;

  box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.15);
`;

export const PostImage = styled.img`
  width: 100%;

`;

export const rightContainer = styled.div`
  width: 45%;
  height: 100%;

  background-color: transparent;

  border-radius: 0 30px 30px 0;
`;

export const postInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: fit-content;

  padding-left: 10%;
  padding-top: 15%;

`;

export const nicknameWrapper = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export const tagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  min-width: 160px;
  max-width: 100px;
  width: 20%;

  margin: 10px 0;

  color: #3f70ff;

  font-size: 95%;
  font-weight: 700;

  //한줄에 태그 두개씩만 들어가게 하기 추후 기능 필요
`;

export const dateWrapper = styled.div`
  color: #3f70ff;
  font-size: 90%;
`;

export const likeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: fit-content;

  margin-top: 50%;

  font-size: 200%;
  font-weight: 700;

  // border: 1px solid black;
`;

export const likeCount = styled.div`
  width: 50%;
`;

export const likeIcon = styled.img`
  width: 23%;
  padding-top: 2%;
  margin-right: 5%;

  // &:hover {
  //   cursor: pointer;
  // }

`;

export const moreIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 90%;
  height: fit-content;

  margin-top: 6%;
`;

export const moreIcon = styled.img`
  width: 10%;

  cursor: pointer;
`;