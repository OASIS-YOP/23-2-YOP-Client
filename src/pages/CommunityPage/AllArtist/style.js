import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 40px 20px 40px 20px;
  padding: 15px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
`;

export const HeaderBox = styled.div`
  //드래그 방지
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: 100%;
  height: 20vh;
  background-color: #3f70ff;
`;

export const PageLabel = styled.div`
  //드래그 방지
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  width: fit-content;
  height: fit-content;
  margin: 40px 20px 40px 20px;
  padding: 15px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: 800;
`;

export const EnterCompLabel = styled.p`
  //드래그 방지
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  height: 40px;
  font-size: 21px;
  padding-left: 40px;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
`;

export const TextIfEmptyArtist = styled.div`
  //드래그 방지
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 30px;

  margin: 0 auto;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;

  color: gray;
`;
