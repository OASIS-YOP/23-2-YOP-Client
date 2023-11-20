import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border: 1px solid black;/// */
  width: 500px;
  height: 400px;
`;

export const HeaderLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 30px;
  margin-top: 10px;
`;

export const HeaderLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: gray;
  color: white;
  border-radius: 20px;
`;

export const CollectionCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
  /* margin-top: 50px;
  margin-left: 50px; */
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CollectionCard = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  border: 1px solid 3F70FF;
  margin: 0 15px 40px 15px;
  overflow: hidden;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 30px;
  margin-top: 10px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: grey;
  color: white;
  border-radius: 20px;

  &:nth-child(2) {
    font-weight: bold;
    color: black;
  }
`;

export const PolaroidWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;
  /* margin-top: 50px;
  margin-left: 50px; */
  img {
    width: 100%;
    height: 100%;
  }
`;

export const PolaroidCard = styled.div`
  width: 120px;
  height: 200x;
  border-radius: 10px;
  border: 1px solid 3F70FF;
  margin: 0 15px 40px 15px;
  overflow: hidden;
  img {
    width: 120%;
    height: 200%;
  }
`;
