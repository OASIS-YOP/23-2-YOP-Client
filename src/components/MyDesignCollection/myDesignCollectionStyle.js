import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin: 0 25px;

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
  display: table;
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

  z-index: 998;
`;

export const CollectionCardInfo = styled.div`
  display: absolute;
  text-align: center;
  font-size: 25px;
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
