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
  width: 30%;
  padding-bottom: 30%;
  margin: 30px 10px;
  border-radius: 35px;
  border: 5px solid #82a2ff;
`;
