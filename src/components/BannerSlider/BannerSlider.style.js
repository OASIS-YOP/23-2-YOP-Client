import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: black;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  width: 100%;
  margin: 0;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
`;

export const DotsWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 10;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin: 0 1% 3%;
  cursor: pointer;
  z-index: 10;
  background-color: gray;
  &.active {
    background-color: #3f70ff;
  }
`;
