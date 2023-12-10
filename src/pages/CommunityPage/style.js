import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-width: 1000px;
  height: 100%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 240px;
  background-color: #3f70ff;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto 0;
`;
export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20%;
  height: 80%;
  margin-left: 25px;
  margin-top: 5px;
  border-radius: 140px;

  border-collapse: collapse;
  overflow: hidden;

  background-color: white;
  box-shadow: 11px 13px 20px 3px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  background-color: #d7d7d7;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
export const ProfileInfo = styled.div`
  width: fit-content;
  height: 100%;
  margin: auto 0;
  padding: 20px;
  /* border: 1px solid black; */
`;

export const ArtistName = styled.p`
  margin-top: 10px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  color: white;
  font-weight: 800;
`;

export const FavoriteQuantWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;

  margin-right: 20px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  color: white;
  font-weight: 700;
`;

export const StarIcon = styled.img`
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ArtistInfoText = styled.p`
  margin-bottom: 10px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15.5px;
  font-weight: 700;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding-top: 20px;
`;
export const MemberCardsWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 50vh;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
`;

export const MemberCardContainer = styled.div`
  width: 180px;
  height: fit-content;
`;

export const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 261px;
  /* min-width: 120px; */
  margin: 0 15px 0 15px;
  border-radius: 20px;
  outline: #d7d7d7 1px solid;
  border-collapse: collapse;
  overflow: hidden;

  box-shadow: 11px 13px 20px 3px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  background-color: #d7d7d7;
  cursor: pointer;
  transition: all 0.1s linear;

  img {
    height: 100%;
    width: 100%;

    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const MemberCardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 261px;
`;

export const MemberNameLabel = styled.p`
  text-align: center;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
`;

export const showAllPostButton = styled.button`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  border: none;
  margin-right: 20px;
  background-color: #3f70ff;
  color: white;
  float: right;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const photoCardContainer = styled.div`
  width: 95%;
  height: 100vh;
  background-color: #ede5e5;
  margin-top: 50px;
  border-radius: 15px;
  padding: 30px 0 30px 0;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 85%;
  height: 90%;
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #3f70ff;
  color: white;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const PostingButton = styled.button`
  position: fixed;
  bottom: 20px;
  width: 70px;
  height: 50px;
  border-radius: 30px;
  border: none;
  background-color: #898989;
  color: white;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
