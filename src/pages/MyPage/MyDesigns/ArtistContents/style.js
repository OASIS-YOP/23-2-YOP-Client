import styled from 'styled-components';



export const ArtistsTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 30px;

  padding-left: 80px;

  // border: 1px solid red;
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

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: gray;

  cursor: pointer;

  &:hover {
    color: #3F70FF;
  }

  &.active {
    color: black;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  width: 100%;
  height: fit-content;

  margin: 0 13px;

`;

export const CollectionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: white;

  width: 100%;
  height: fit-content;

  margin: 25px 0;

  // border: 1px solid red;
`;

export const MyCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 769px) and (max-width: 1617px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 1618px) {
    width: 350px;
    height: 350px;
  } */

  width: 25.2%;
  box-sizing: border-box;

  padding: none;
  margin: 23px 24px;

  border: 8px solid #82a2ff;
  border-radius: 35px;

  /* box-shadow: 11px 13px 20px rgba(0, 0, 0, 0.25); */

  overflow: hidden;
`;

export const EmptyMessage = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: gray;

`;


export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 0 30px;

  &:hover {
    cursor: pointer;

    > img {
      filter: brightness(30%);
    }
  };

  &:active{
    > img {
      filter: brightness(50%);
    }

  };

  /* @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  };

  @media (min-width: 769px) and (max-width: 1617px) {
    width: 250px;
    height: 250px;
  };

  @media (min-width: 1618px) {
    width: 350px;
    height: 350px;
  }; */

`;


export const CollectionImage = styled.img`
  position: relative;
  dipaly: table;
  padding: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  /* @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  };

  @media (min-width: 769px) and (max-width: 1617px) {
    width: 250px;
    height: 250px;
  };

  @media (min-width: 1618px) {
    width: 350px;
    height: 350px;
  }; */

`;



