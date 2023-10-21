import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  padding-bottom: 30px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
`;
