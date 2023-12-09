import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 30px;
`;

export const IndexNumber = styled.div`
  width: 100%;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 5px;
`;
export const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 180px;
  height: 280px;

  border-radius: 20px;
  outline: #d7d7d7 1px solid;
  border-collapse: collapse;
  overflow: hidden;

  box-shadow: 11px 13px 20px 3px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  background-color: #d7d7d7;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ContentLiked = styled.div``;

export const likeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: fit-content;
  height: fit-content;

  margin: 15px 0;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: 700;

  // border: 1px solid black;
`;

export const likeCount = styled.div`
  width: 50%;
`;

export const likeIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-top: 5%;
  padding-right: 10%;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
export const ContentText = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 19px;
  font-weight: 600;
  &:last-child {
    color: #3563e9;
  }
`;

export const ContentTopArea = styled.div`
  display: flex;
  height: 40%;
`;


export const tagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  min-width: 160px;
  max-width: 200px;
  width: 100%;

  margin: 10px 0;

  color: #3f70ff;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 19px;
  font-weight: 600;
  &:last-child {
    color: #3563e9;
  }
/* 
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 19px;
  font-weight: 800; */

  //한줄에 태그 두개씩만 들어가게 하기 추후 기능 필요
`;

export const tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
`;