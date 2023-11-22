import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: fit-content;
  min-height: 550px;

  background-color: transparent;


`

export const TopButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 50px;

  padding: 0 10px;

  margin-top: 50px;
  


`;

export const TopButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 35px;

  border: 1px solid #B7C0D8;
  border-radius: 15px;
 
  margin: 0 8px;

  background-color: white;

  &:hover {
    background-color: white;
    background-color: #CCD0DD;
    cursor: pointer;
  };

  &:active {
    background-color: white;
  };

`;

export const TopButtonIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 6px;

`;

export const TopButtonLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 13.4px;
  
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 100%;

  
  margin-top: 35px;

`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 50px;

  margin: 5px 0;

  margin-collase: collapse;

`;

export const FilterIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-right: 10px;

  width: 20px;

  fill: black;
`;

export const FilterLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 50px;
  

  font-weight: 500;
  font-size: 13.4px;

  margin-right: 10px;
`;

export const FilterSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;


  width: 200px;

  height: 20px;

  // 추가된 부분: 가운데 선 스타일링
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 1.8px; // 선의 너비
    background-color: #B7C0D8; // 선의 색상

    z-index: 998;
  }
`;

export const devider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #B7C0D8;

  width: 100%;
  height: 1px;

  margin-top: 35px;


`;




