import styled from 'styled-components';


export const CollectionCard = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  border: 8px solid #82a2ff;
  margin: 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    > img {
      filter: brightness(30%);
    }
  }

  &:active {
    > img {
      filter: brightness(50%);
    }
  }
`;

export const CollectionCardImageWrapper = styled.div`
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
  }

  &:active {
    > img {
      filter: brightness(50%);
    }
  }

`;

export const CollectionCardImage = styled.img`
  position: relative;
  dipaly: table;
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
  filter: brightness(100%);

  width: fit-content;
  height: fit-content;

  z-index: 998;
`;

export const CollectionCardInfo = styled.div`
  display: absolute;
  text-align: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: white;
`;