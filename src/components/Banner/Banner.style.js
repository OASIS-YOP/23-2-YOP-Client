import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1800px;
  background-color: black;
  margin-bottom: 0;
  /* padding-top: 400px; */
  scroll-snap-align: center;
`;

export const BannerContent = styled.div`
  width: 100%;
  color: white;

  & > img {
    width: 1800px;
    object-fit: fill;
  }
`;
