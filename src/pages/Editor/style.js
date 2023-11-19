import styled from 'styled-components';

//전체 래퍼
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  min-width: 1200px;
  height: 100%;
  
`;

//헤더 제외 래퍼
export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;

  width: 100%;
  min-width: 1000px;
  height: 100%;
  overflow: hidden;

  background-color: #F5F5F5;


`;

//캔버스 포함 공간
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: transparent;

  width: 70%;
  height: 100%;
`;


export const TopMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  background-color: #F0F0F0;
`;

export const TopMenuGroupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 50%;
  height: 100%;

`;

export const TopMenuButtonLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: end;

  width: 100%;
  height: 100%;

  padding-left: 10px;
`;

export const TopMenuButtonRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: end;

  width: 100%;
  height: 100%;

  padding-right: 10px;
`;

export const TopMenuButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 130px;
  height: 80%;

  border-top-left-radius: 20px;
  border-top-right-radius:  20px;
  border: none;

  padding: 0 10px;

  margin: 0 2.5px;

  background-color: ${({ isActive }) => (isActive ? 'white' : '#F5F5F5F5')};


  &:hover {
    cursor: ${({isActive}) => isActive ? 'pointer' : 'not-allowed'};
  };

`;

export const TopMenuButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 3px;

  width: 20px;

  fill: ${({ isActive }) => (isActive ? 'black' : '#898989')};

  
`;

export const TopMenuButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;

  text-align: center;

  width: fit-content;
  height: 100%;

  margin: 0 3px;

  color: ${({ isActive }) => (isActive ? 'black' : '#898989')};


`;

export const CanvasSpaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  width: 100%;
  height: 100%;

  padding: 40px 0;

  background-color: #F5F5F5;


`;

export const CanvasWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  width: 340px;
  height: 492px;

  border: 4px dashed #CCCCCC;

  overflow: hidden;
  scroll: none;

  margin-bottom: 20px;

`;


export const LayerButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-bottom: 10px;
`;

export const LayerButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 87px;
  height: 27px;

  background-color: white;
  border: 1px solid #CCCCCC;
  border-radius: 5px;

  overflow: hidden;

  margin: 0 2px;

  &:hover {
    cursor: ${({isActive}) => isActive ? 'pointer' : ''};
  }


`;

export const LayerButtonIcon = styled.img`
  width: 18px;

  margin: 0 1.5%;
`;

export const LayerButtonLabel = styled.div`
  font-size: 11px;
  font-weight: 700;

  color: #898989;

  margin: 0 1.5%;

`;

export const SelectedObjects = styled.div`
  font-size: 12px;
  font-weight: 700;

  color: #898989;
`;


//툴박스 공간
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 30%;
  height: 100%;

  /* border: 1px solid blue; */

  background-color: #F5F5F5;

`;

export const ToolContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;


`;

export const ToolLabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 75px;

`;

export const ToolLabel = styled.button`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 20%;
  height: 90%;

  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius:  20px;

  padding: 15px;

  margin: 0 2px;

  background-color: white;
  /* background-color: ${({ isActive }) => (isActive ? 'white' : '#F0F0F0')}; */

`;

export const ToolLabelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;


  fill : ${({ isActive }) => (isActive ? 'black' : 'rgba(137, 137, 137, 1)')};

`;

export const ToolLabelText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: 700;

  color: ${({ isActive }) => (isActive ? 'black' : 'rgba(137, 137, 137, 1)')};

`;


