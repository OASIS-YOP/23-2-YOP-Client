import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: #3f70ff;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export const ProfileImage = styled.div`
  flex: 0 0 auto;
  width: 250px;
  height: 200px;
  margin-left: 25px;
  margin-top: 5px;
  border-radius: 140px;
  outline: #d7d7d7 1px solid;
  border-collapse: collapse;
  overflow: hidden;

  background-color: white;
  box-shadow: 11px 13px 20px 3px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  background-color: #d7d7d7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const ProfileInfo = styled.div`
  width: fit-content;
  height: 100%;
  border: 1px solid black;
`;

export const ArtistName = styled.p`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;
