import * as s from './HeaderIsLogOffed.style';
import React from 'react';
import Blogo from '../../../assets/Blogo.svg';
import Avatar from '../../../assets/Avatar.svg';

const HeaderIsLogOffed = () => {
  const onClickMenu = (e) => {
    const menuIndex = e.target.dataset.menuIndex;
    if (menuIndex === '1') {
      window.location.href = '/mainpage';
    } else if ( menuIndex === '2') {
      window.location.href = '/editor';
    } else if (menuIndex === '3') {
      window.location.href = '/allartist';
    } else if (menuIndex === '4') {
      window.location.href = '/';
    } else if (menuIndex === '5') {
      window.location.href = '/mypage';
    }
  };

  return (
    <>
      <s.Header >
        <s.LogoWrapper>
          <s.Logo src={Blogo} onClick={onClickMenu} data-menu-index='1' />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Menu onClick={onClickMenu} data-menu-index='2'>편집기</s.Menu>
          <s.Menu onClick={onClickMenu} data-menu-index='3'>커뮤니티</s.Menu>
          <s.Menu onClick={onClickMenu} data-menu-index='4'>
            로그아웃
          </s.Menu>
          <s.UserWrapper>
            <s.Icon src={Avatar} onClick={onClickMenu} data-menu-index='5' />
            <s.NicknameWrapper onClick={onClickMenu} data-menu-index='5'>
              Onpol1004
            </s.NicknameWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
    </>
  );
};

export default HeaderIsLogOffed;
