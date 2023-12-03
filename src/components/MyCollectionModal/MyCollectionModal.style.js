import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 550px;
  /* border: 1px solid black; */
`;

export const ModalTitle = styled.div`
  width: 100%;
  height: 30px;
  font-size: 24px;
  font-weight: 700;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ArtistsTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 30px;

  padding: 20px 0 0 20px;

  // border: 1px solid red;
`;
export const ArtistsTab = styled.button`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 100%;

  margin: 0 10px;

  border: none;

  background-color: transparent;

  font-size: 16px;
  font-weight: bold;
  color: gray;

  &:hover {
    color: #3f70ff;
    cursor: pointer;
  }

  &.active {
    color: black;
  }
`;
export const CollectionCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  flex-wrap: wrap;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const CollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28%;
  height: fit-content;
  margin: 28px 24px;
  box-sizing: border-box;
  border-radius: 35px;
  border: 8px solid #82a2ff;

  overflow: hidden;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export const ActivatedCollectionCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    > img {
      filter: brightness(30%);
    }
  }
`;

export const CollectionCardImage = styled.img`
  position: relative;
  display: table;
  padding: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CollectionInfoWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  justify-content: center;

  width: fit-content;
  height: fit-content;
`;

export const CollectionCardInfo = styled.div`
  display: absolute;
  text-align: center;
  font-size: 1.1em;
  font-weight: bold;
  line-height: 1.5em;
  color: white;
`;

////////////////CollectionDetail

export const ModalCollectionDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  width: 97%;
  height: fit-content;

  margin-top: 20px;

  border-radius: 30px;

  &.4 {
    background: linear-gradient(
      to bottom,
      rgba(107, 119, 226, 100%),
      rgba(173, 68, 106, 55.21%),
      rgba(130, 127, 167, 0%)
    );

    color: white;
  }

  &.1 {
    background: linear-gradient(
      to bottom,
      rgba(255, 108, 2, 80%),
      rgba(254, 229, 2, 70%),
      rgba(130, 127, 167, 0%)
    );
    color: white;
  }
`;

export const CollectionName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;

  width: 100%;
  height: fit-content;
`;

// export const VersionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;

//   width: 1%;
//   height: 100%;

//   padding: 80px 0;

// `;

// export const Version = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: 50%;

//   font-size: 20px;
//   font-weight: bold;

// `

export const PhotocardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;

  margin: 40px 40px;

  // border: 1px solid red;
`;

export const PhotoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 380px;

  margin: 20px 20px;

  /* &.4 {
    width: 12%;
  }

  &.1 {
  }

  &.2 {
    width: 12%;
  } */
`;
export const MemberName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 15px;
  font-weight: bold;

  margin-top: 10px;
  margin-bottom: 15px;

  /* &.뉴진스 {
    color: white;
  }

  &.방탄소년단 {
    color: white;
  } */
`;

export const PhotocardImageFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 400px;

  overflow: hidden;

  object-fit: contain;

  border-radius: 20px;

  background-color: lightgray;

  box-shadow: 11px 13px 25px rgba(0, 0, 0, 0.4);
`;

export const PhotocardImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  display: flex;
  padding: 0;

  background-color: lightgray;

  -webkit-user-drag: none;

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;