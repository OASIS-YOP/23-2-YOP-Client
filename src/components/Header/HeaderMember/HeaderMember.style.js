import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 100%;

  overflow: hidden;
`;
export const Icon = styled.img`
  width: 100%;
`;
export const Logo = styled.img`
width: 40px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 999;

  width: 100%;
  height: 65px;
  min-width: 1000px;
  /* padding: 20px; */

  background-color: white;

  //드래그 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // border: 1px solid black;
  
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 10%;

  padding: none;
  margin-left: 20px;
  margin-right: 380px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  padding: none;
  margin-right: 15px;

  // border: 1px solid black;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

    text-align: center;
    font-size: 10px;

`;

export const Menu = styled.button`
  border: none;

  margin: 0 8px;

  cursor: pointer;

  font-weight: 500;
  font-size: 14.5px;
  font-family: 'Noto Sans KR', sans-serif;

  background-color: transparent;
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid black;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: auto;
  height: auto;

  padding: 5px;
  margin: 0 0 0 10px;

  cursor: pointer;
`;

export const NicknameWrapper = styled.div`
  height: auto;
  padding: 4px;
  margin-left: 8px;

  font-weight: 500;
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid black;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;
