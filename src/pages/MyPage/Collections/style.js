import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  min-width: 1000px;

  //드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
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

////CollectionCard

export const CollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28%;
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
  width: 110%;
  height: 110%;
  object-fit: cover;
  filter: blur(5px) brightness(50%);
`;

export const InActivatedLockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 15px;
  background-color: #6a7db4;
  z-index: 998;
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
  z-index: 998;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(50%);
  }
`;
