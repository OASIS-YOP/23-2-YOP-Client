import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: black;
  margin-bottom: 0;
  scroll-snap-align: center;
`;

export const BannerContent = styled.div`
  width: 100%;
  color: white;

  &img {
    width: 100%;
    object-fit: fill;
  }
`;
