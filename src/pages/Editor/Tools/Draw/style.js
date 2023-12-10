import styled from 'styled-components';
// import { pointColor, whiteColor } from '../../../../GlobalStyles';

export const PaintContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
 
  padding: 30px;
`;

// &:hover {
//   background-color: ${pointColor};
//   cursor: pointer;
// }

// &:active {
//   background-color: ${whiteColor};
// }

export const BtnChangeColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 34px;

  padding: 0 10px;
`
export const BtnChangeColor = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: 100%;

    border: 1px solid #B7C0D8;
    border-radius: 13px;
  
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

export const BtnChangeColorIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 15px;

  fill: ${({ isActive }) => (isActive ? 'black' : '#CCCCCC')};

  margin-right: 6px;
`

export const BtnChangeColorLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 13.4px;
  
  color: ${({ isActive }) => (isActive ? 'black' : '#CCCCCC')};
`


export const BtnAddObjWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 34px;

  padding: 0 10px;

`;
export const BtnAddObj = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: fit-content;
    height: 100%;

    border: 1px solid #B7C0D8;
    border-radius: 13px;
  
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
export const BtnAddObjLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 13.4px;
  
  color: ${({ isActive }) => (isActive ? 'black' : '#CCCCCC')};
`;
export const BtnAddObjIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 15px;

  fill: ${({ isActive }) => (isActive ? 'black' : '#CCCCCC')};

  margin-right: 6px;
`;

export const BtnFixObj = styled.button`

`;

export const ColorpickerWrapper = styled.div`
  
  width: fit-content;
  height: fit-content;
  margin: 30px auto;
`;

export const Margin = styled.div`
  height: 20px;
`