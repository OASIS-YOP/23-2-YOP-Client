import styled from 'styled-components';
// import { pointColor, whiteColor } from '../../../../GlobalStyles';

export const ContainerText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  padding: 20px;
`;

// &:hover {
//   /* background-color: ${pointColor}; */
//   cursor: pointer;
// }

// &:active {
//   /* background-color: ${whiteColor}; */
// }

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 34px;

  padding: 0 10px;

  margin: 10px 0;
`
export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 100%;

  border: 1px solid #B7C0D8;
  border-radius: 14px;

  margin: 0 8px;

  background-color: white;

  &:hover {  
      background-color: #CCD0DD;
      cursor: pointer;
      background-color: ${({ disabled }) => ( disabled ? 'white' : '#CCD0DD')};
      cursor: ${({ disabled }) => ( disabled ? 'default' : 'pointer')};
  };

  &:active {
    background-color: white;
  };
`;
export const BtnLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 13.4px;
  
  color: ${({ isActive }) => (isActive ? 'black' : '#CCCCCC')};
`;
export const BtnIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 15px;

  fill: ${({ isActive }) => (isActive ? 'black' : '#CCCCCC')};

  margin-right: 6px;
`;

export const SelectFont = styled.select`
  width: 230px;
  height: 80%;
  border: 1px solid #B7C0D8;
  border-radius: 5px;
  margin: 0 8px;
  background-color: white;

`

export const SelectFontSize = styled.select`
  width: 100px;
  height: 80%;
  border: 1px solid #B7C0D8;
  border-radius: 5px;
  margin: 0 8px;
  background-color: white;
`

export const Margin = styled.div`
  height: 20px;
`




export const BtnFixImage = styled.button``;

export const BtnFixText = styled.button``;
export const BtnChangeColor = styled.button``;
export const BtnDrawText = styled.button``;

export const BtnFontChange = styled.button``;

export const BtnBackgroundColor = styled.button``;

export const ColorpickerWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 1vh auto;
`;

