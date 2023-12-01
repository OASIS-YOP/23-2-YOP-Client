import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 270px;
  padding: 15px 15px;
  /* border: 1px solid black; */
`;

export const Text = styled.p`
  width: 420px;
  height: 25px;

  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export const BodyWrapper = styled.div`
  display: flex;
  width: 420px;
  height: 140px;
  margin-top: 20px;
  gap: 20px;
`;

export const BodyItem = styled.div`
  width: 200px;
  height: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110px;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.bg && props.bg};

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Icon = styled.img`
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ButtonLabel = styled.p`
  width: 115px;
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 5px 0 0 0;
  color: white;
`;

export const BodyLabel = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: rgba(137, 137, 137, 1);
`;
