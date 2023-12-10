import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  

`;

export const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 250px;
  height: 200px;
  margin-left: 40px;
  margin-top: 5px;
  border-radius: 140px;
  outline: #d7d7d7 1px solid;
  border-collapse: collapse;
  overflow: hidden;

  background-color: white;
  box-shadow: 11px 13px 20px 3px rgba(0, 0, 0, 0.2);

  overflow: hidden;

  background-color: #d7d7d7;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      filter: brightness(80%);
    }
    &:active {
      filter: brightness(100%);
    }
  }
`;
export const ArtistName = styled.div`
  width: 250px;
  height: fit-content;
  margin-top: 11px;
  margin-left: 40px;

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`;

// export const ContentContainer = styled.div`
//   height: 40%;
//   width: 100%;

//   padding: 5%;
//   font-weight: bold;
// `;

// export const ContentBottomArea = styled.div`
//   display: flex;
//   height: 40%;
// `;
