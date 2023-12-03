import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 150px;
`;

export const ModalText = styled.div`
  width: 80%;
  height: 40px;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;

export const CodeInput = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 2px solid black;
  margin: 0 auto;
  outline: none;
  font-size: 80px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background-color: #3f70ff;
  color: white;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;
