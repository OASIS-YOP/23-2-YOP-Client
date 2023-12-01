import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 550px;
  /* border: 1px solid black; */
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 24px;
  font-weight: 700;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ArtistsTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 30px;

  padding: 20px 0 0 20px;

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

  font-size: 16px;
  font-weight: bold;
  color: gray;

  &:hover {
    color: #3f70ff;
    cursor: pointer;
  }

  &.active {
    color: black;
  }
`;
export const CollectionCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const CollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28%;
  height: fit-content;
  margin: 28px 24px;
  box-sizing: border-box;
  border-radius: 35px;
  border: 8px solid #82a2ff;

  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const ActivatedCollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    > img {
      filter: brightness(30%);
    }
  }
`;

export const CollectionCardImage = styled.img`
  position: relative;
  display: table;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CollectionInfoWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  justify-content: center;

  width: fit-content;
  height: fit-content;
`;

export const CollectionCardInfo = styled.div`
  display: absolute;
  text-align: center;
  font-size: 1.6vw;
  font-weight: bold;
  line-height: 3vw;
  color: white;
`;

// export const CollectionInfoWrapper = styled.div`
//   display: table-cell;
//   vertical-align: middle;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 30%;
//   box-sizing: border-box;
//   background-color: white;
//   z-index: 999;
// `;
// export const CollectionInfoContainer = styled.div`
//   width: 85%;
//   height: 90%;
//   margin: 15px auto;
// `;

// export const CollectionInfo = styled.p`
//   margin: 5px;
//   font-size: 10px;
//   font-weight: bold;
//   line-height: 10px;
//   &:first-child {
//     font-size: 16px;
//     line-height: 25px;
//   }
// `;
