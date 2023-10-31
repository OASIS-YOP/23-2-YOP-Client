import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  min-width: 1000px;

  //드래그 방지
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
`

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

  width: 80%;
  height: fit-content;

  margin: 20px 40px;

  // border: 1px solid red;
`;

export const MyCollectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
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
  }


  padding: none;
  margin: 15px 20px;

  border: 8px solid #82a2ff;
  border-radius: 20px;

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

`



