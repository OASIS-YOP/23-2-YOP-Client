import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 1000px;
  width: 100%;
  height: 100%;

  /* min-width: 1000px; */

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

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 500;
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
  width: 85%;
  height: 90%;
  margin: 10px auto;
  padding-top: 20px;
`;

////CollectionCard

export const CollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28%;
  margin: 28px 28px;
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

  /*
  &:hover {
    transform: scale(1.1);
    transition: all linear 200ms;
  } */
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

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4vw;
  font-weight: 500;
  line-height: 2.5vw;
  color: white;
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

export const InputCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AlbumName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;

  line-height: 2vw;

  margin: 15px;

  text-align: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.4vw;
  font-weight: 500;

  color: white;

  z-index: 998;
`;

export const InputCodeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9vw;
  height: 2vw;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: black;

  margin-top: 10px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2vw;
  font-weight: 500;
  z-index: 998;
  cursor: pointer;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(50%);
  }
`;
