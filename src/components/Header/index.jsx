import * as s from './Header.style';
import React from 'react';
import Blogo from '../../assets/Blogo.svg';
import Avatar from '../../assets/Avatar.svg';

const Header = () => {
  const onClickMenu = (e) => {
    const menuIndex = e.target.dataset.menuIndex;
    if (menuIndex === '0') {
      window.location.href = '/mainpage';
    } else if (menuIndex === '3') {
      window.location.href = '/';
    } else if (menuIndex === '4') {
      window.location.href = '/mypage';
    }
  };

  return (
    <>
      <s.Header>
        <s.LogoWrapper>
          <s.Logo src={Blogo} onClick={onClickMenu} data-menu-index='0' />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Menu>편집기</s.Menu>
          <s.Menu>커뮤니티</s.Menu>
          <s.Menu onClick={onClickMenu} data-menu-index='3'>
            로그아웃
          </s.Menu>
          <s.UserWrapper>
            <s.Icon src={Avatar} onClick={onClickMenu} data-menu-index='4' />
            <s.NicknameWrapper onClick={onClickMenu} data-menu-index='4'>
              Onpol1004
            </s.NicknameWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
    </>
  );
};

export default Header;
