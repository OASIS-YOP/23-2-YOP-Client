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


  border: 1px solid red;
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

