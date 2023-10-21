import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 1000px;
  height: 100%;
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  width: 100%;
  height: 60vh;

  background-color: #3f70ff;
`;

export const BannerContent = styled.div`
  width: auto;
  height: auto;
  color: white;
  margin: 0 auto;
  font-size: 30px;
  font-weight: 800;
`;

export const PageLabel = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 40px 20px 40px 20px;
  padding: 15px;
  font-size: 25px;
  font-weight: bold;
`;

export const RealTimeDesignWrapper = styled.div`
  display: flex;
  justify-content: row;
  flex-direction: center;
  align-items: center;
  margin: 0 auto;

  width: 95%;
  height: 300px;

  border-radius: 15px;
  background-color: #d7d7d7;
`;

export const DesignCardContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

export const ContentRowBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const CollectionBox = styled.div`
  width: 40%;
  height: fit-content;
`;

export const CollectionRowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  margin-bottom: 40px;
`;

export const IndexNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 0 15px 0 30px;
`;

export const AlbumImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`;

export const CollectionTextBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
export const CollectionText = styled.div`
  margin-left: 20px;
  height: fit-content;
  line-height: 40px;

  font-weight: bold;
  &:first-child {
    font-size: 23px;
  }
  &:nth-child(2) {
    font-size: 18px;
    color: #3563e9;
  }
  &:last-child {
    font-size: 20px;
  }
`;
export const FireIcon = styled.img`
  margin-left: 0;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;
export const AllArtistBox = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;
export const EnterCompanyLabel = styled.div`
  margin: 0 20px 20px 30px;
  font-size: 20px;
  font-weight: bold;
`;
