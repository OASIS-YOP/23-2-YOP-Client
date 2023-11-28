import styled from 'styled-components';
// import {
//   pointColor,
//   //   primaryColor,
//   //   secondaryColor,
//   whiteColor,
// } from '../../GlobalStyles';

export const ContextMenuContainer = styled.div`
  position: relative;
`;

export const ContextMenu = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  left: x;
  top: y;
  z-index: 1.3;
  font-size: 1.7vh;

  & div {
    padding: 8px;
    cursor: pointer;
  }

  & div:hover {
    background-color: #c1c1c1;
  }
`;
