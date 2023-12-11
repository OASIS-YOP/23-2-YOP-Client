import styled from 'styled-components';

export const DesignsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  width: 90%;
  height: fit-content;
  //드래그 방지
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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

  margin: 0 40px;

  // border: 1px solid red;
`;

export const DesignImageFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 188px;

  margin: 20px 20px;

  overflow: hidden;

  border-radius: 20px;

  background-color: lightgray;

  box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.4);
  &:hover {
    transition: all 0.1s linear;
    transform: scale(1.1);
    > img {
    }
    cursor: pointer;
  }

  &:active {
    > img {
      filter: brightness(0.9);
    }
  }
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
  //드래그 방지
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;

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

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
`;
