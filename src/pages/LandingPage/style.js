import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  padding: 30px;
  background-color: #3f70ff;
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: flex-start;
  width: 100%;
  height: 80px;
`;

export const LogoWrapper = styled.div`
  width: auto;
  height: 100%;
  text-align: center;
`;

export const Logo = styled.img``;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 70%;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  height: 20vh;
`;

export const Button = styled.button`
  margin: 10px;
  width: 70px;
  height: 30px;
  border: 1.5px solid #696969;
  border-radius: 8px;
  background-color: white;
  color: #696969;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.7);
  }
`;
