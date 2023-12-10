import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: white;
  scroll-snap-align: center;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  min-width: 1000px;
  color: white;


  & > img {
    width: 100%;
    object-fit: fill;
  }
`;
