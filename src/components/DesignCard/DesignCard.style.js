import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 30px;
`;

export const IndexNumber = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: bold;
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
  font-size: 20px;
  font-weight: bold;
  &:last-child {
    color: #3563e9;
  }
`;

export const ContentTopArea = styled.div`
  display: flex;
  height: 40%;
`;
