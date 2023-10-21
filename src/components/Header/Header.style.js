import styled from 'styled-components';

export const Icon = styled.img``;
export const Logo = styled.img`
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: auto;
  height: 35px;
  padding: 20px;

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

  width: 30%;
  height: 100%;

  padding: none;
  margin-right: 300px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  padding: none;

  // border: 1px solid black;
`;

export const Menu = styled.button`
  border: none;

  margin: 0 8px;

  cursor: pointer;

  font-weight: bold;

  background-color: transparent;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: auto;

  padding: 5px;
  margin-left: 15px;

  // border: 1px solid black;
`;

export const NicknameWrapper = styled.div`
  height: auto;

  margin-left: 8px;

  font-weight: bold;
`;
