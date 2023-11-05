import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  min-width: 1000px;
`;
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

  &.active {
    color: black;
  }
`;

export const CollectionCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: center;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  padding-top: 20px;
`;

////CollectionCard

export const CollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30%;
  margin: 30px 5px;
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
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all linear 200ms;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  box-sizing: border-box;
  background-color: white;
  z-index: 999;
`;
export const CollectionInfoContainer = styled.div`
  width: 85%;
  height: 90%;
  margin: 15px auto;
`;

export const CollectionInfo = styled.p`
  margin: 5px;
  font-size: 10px;
  font-weight: bold;
  line-height: 10px;
  &:first-child {
    font-size: 16px;
    line-height: 25px;
  }
`;

export const InActivatedCollectionCardImage = styled.img`
  position: absolute;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px);
`;

export const InActivatedLockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background-color: #6a7db4;
  z-index: 999;
  cursor: pointer;

  &img {
    width: auto;
    height: auto;
  }
`;

export const InputCodeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;
  font-size: 18px;
  font-weight: 600;
  z-index: 999;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(50%);
  }
`;
