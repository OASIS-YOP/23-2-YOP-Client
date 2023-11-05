import styled from 'styled-components';



export const ArtistsTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: auto;
  height: 30px;

  margin: 0 40px;

  // border: 1px solid red;
`;

export const ArtistsTab = styled.button`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 100%;

  margin: 0 10px;

  border: none;

  background-color: transparent;

  font-size: 15px;
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

export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  width: 95%;
  height: fit-content;

  margin: 0 40px;

`;

export const CollectionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  background-color: white;

  width: 90%;
  height: fit-content;

  margin: 20px 0;

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

  width: 31%;
  box-sizing: border-box;

  padding: none;
  margin: 20px 5px;

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

  margin: 0 20px;

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

export const CollectionInfoWrapper = styled.div`
    display: table-cell;
    vertical-align: middle;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    justify-content: center;
    filter: brightness(100%);

    width: fit-content;
    height: fit-content;

    z-index: 999;
  `;

  export const CollectionCardInfo = styled.div`
    display: absolute;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
  
  `;

    

  //   background-color: white;

  // `;

  // export const InfoWrapper = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: flex-start;
    
  // `;

