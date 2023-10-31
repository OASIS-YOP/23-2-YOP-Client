import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  width: auto;
  height: fit-content;

  margin: 0 40px;

`;

export const CollectionListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: white;

  width: 90%;
  height: fit-content;

  margin: 20px 40px;

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

  width: 30%;
  box-sizing: border-box;

  padding: none;
  margin: 15px 20px;

  border: 8px solid #82a2ff;
  border-radius: 35px;

  box-shadow: 11px 13px 20px rgba(0, 0, 0, 0.25);

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

