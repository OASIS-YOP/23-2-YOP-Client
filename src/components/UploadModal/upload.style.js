import styled from 'styled-components';

export const Wrapper = styled.div`
  /* border: 1px solid black; */
  width: 650px;
  height: 520px;

  padding: 15px 20px;
`;

export const HeaderLabelWrapper = styled.div`
  display: flex;
  justify-content: flex-satrt;
  align-items: center;
  width: 100%;
  height: 40px;

  > span {
    font-size: 22px;
    font-weight: 700;

    margin: 0 10px;
    
    color : #515151;
  }
`;

export const HeaderLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  background-color: gray;
  color: white;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 700;

  padding: 0 15px;
`;

export const CollectionCardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 430px;
  border-radius: 20px;
  margin: 40px auto;
  img {
    width: 100%;
    height: 100%;
  }


  border: 1px solid black;
`;

export const CollectionCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid #3f70ff;
  margin: 15px;
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
  border: 1px solid #3f70ff;
  margin: 0 15px 40px 15px;
  overflow: hidden;
  img {
    width: 120%;
    height: 200%;
  }
`;

export const ButtonWrappper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  height: 30px;
  margin-top: 10px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: grey;
  color: white;
  border-radius: 20px;
`;

export const ThirdModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  background-color: gray;
  color: white;
  border-radius: 20px;
`;

export const EditingCardWrapper = styled.div`
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

export const EditingCard = styled.div`
  width: 240px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #3f70ff;
  margin: 0 15px 40px 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
