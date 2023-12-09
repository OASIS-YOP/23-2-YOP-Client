import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 1000px;
  height: 100%;

  //드래그 방지
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  width: 100%;
  height: 55.5vh;
  position: relative;
  background-color: #3f70ff;
`;

export const BannerContent = styled.div`
  width: auto;
  height: auto;
  color: white;
  margin: 0 auto;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 30px;
  font-weight: 800;
`;

export const PageLabel = styled.p`
  height: fit-content;
  margin: 40px 20px 40px 20px;
  padding: 15px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: 800;

  & span {
    float: right;
    margin-right: 50px;
    
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: gray;
    cursor: pointer;
  }
`;

export const TextIfEmptyArtist = styled.div`
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
export const RealTimeDesignWrapper = styled.div`
  display: flex;
  justify-content: row;
  flex-direction: center;
  align-items: center;
  margin: 0 auto;

  width: 95%;
  height: 350px;

  border-radius: 15px;
  background-color: #d7d7d7;
`;

export const DesignCardContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

export const ContentRowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

`;

export const CollectionBox = styled.div`
  width: 40%;
  height: fit-content;
`;

export const CollectionRowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin-bottom: 40px;
`;

export const IndexNumber = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: 800;
  margin: 0 15px 0 30px;
`;

export const AlbumImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`;

export const CollectionTextBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
export const CollectionText = styled.div`
  margin-left: 20px;
  height: fit-content;
  line-height: 40px;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  &:first-child {
    font-size: 23px;
  }
  &:nth-child(2) {
    font-size: 18px;
    color: #3563e9;
  }
  &:last-child {
    font-size: 20px;
  }
`;
export const FireIcon = styled.img`
  margin-left: 0;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;
export const AllArtistBox = styled.div`
  display: flex;
  width: 50%;
  height: fit-content;
  /* margin-left: 14vw; */
  flex-direction: column;
`;
export const EnterCompanyLabel = styled.div`
  margin: 0 20px 20px 30px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: 800;
`;

////Top10DesignCard
export const Top10CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-left: 30px;
`;

export const Top10CardIndexNumber = styled.div`
  width: 100%;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: 800;
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
  font-size: 20px;
  font-weight: 700;
  &:last-child {
    color: #3563e9;
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #3f70ff;
  color: white;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
