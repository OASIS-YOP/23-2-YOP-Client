import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  min-width: 1000px;

  //드래그 방지
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`;

export const ArtistsTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 30px;

  padding-left: 40px;

`;

export const ArtistsTab = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: fit-content;
  height: 100%;

  margin: 0 10px;

  border: none;

  background-color: transparent;

  font-size: 16px;
  font-weight: bold;
  color: gray;

  cursor: pointer;

  &:hover {
    color: #3F70FF;
  }

  &.active {
    color: black;
  }
`;

export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  width: auto;
  height: fit-content;

  margin: 25px 40px;
`;


export const contextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: fit-content;
  height: fit-content;

  margin-top: 5%;

  font-size: 100%;
  font-weight: 700;

`;
