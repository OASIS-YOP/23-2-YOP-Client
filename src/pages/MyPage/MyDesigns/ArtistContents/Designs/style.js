import styled from 'styled-components';


export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  width: 90%;
  height: fit-content;

`;


export const DesignListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: white;

  width: 100%;
  height: fit-content;

  margin: 20px 40px;

  // border: 1px solid red;
`;

export const DesignImageFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;


  min-width: 205px;
  min-height: 300px;
  max-width: 280px;
  max-height: 400px;
  width: 20%;
  height: 27vw;

  margin: 20px 20px;

  overflow: hidden;

  border-radius: 20px;

  background-color: lightgray;

  box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.4);

  &:hover {
    > img {
      filter: brightness(110%) blur(2.5px);
    }
  };
`;

export const DesignImage = styled.img`
  position: relative;
  display: table;
  padding: 0;

  background-color: lightgray;

  width: auto;
  height: 110%;


`;


export const DesignInfoWrapper = styled.div`
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

  export const DesignCardInfo = styled.div`
    display: absolute;
    text-align: center;
    color: white;

    font-size: 13px;
    
  
  `;

  export const DeleteButton = styled.button`
    border: none;
    border-radius: 8px;

    margin-bottom: 10px;

    font-size: 15px;

    &:hover {
      cursor: pointer;
      background-color: lightgray;
    }

    &:active {
      /* transform: translateY(4px); */
      background-color: gray;
    }

  `
