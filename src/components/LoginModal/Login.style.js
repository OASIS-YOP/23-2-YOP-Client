import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 15vh;
  padding-top: 10px;
  text-align: center;
  line-height: 20px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 30vh;
  margin-top: 15px;
  text-align: center;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 10px 0;
  padding: 3px 15px;
  border: none;
  border-radius: 70px;
  background-color: #ede5e5;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
  background-color: #3f70ff;
  margin-top: 30px;
  border: none;
  border-radius: 40px;
  color: white;
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;
