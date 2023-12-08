import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1800px;
  background-color: white;
  margin-bottom: 0;
  padding-left: 120px;
  scroll-snap-align: center;
`;

export const BannerContent = styled.div`
  width: 100%;
  color: white;

  & > img {
    width: 1500px;
    object-fit: fill;
  }
`;
