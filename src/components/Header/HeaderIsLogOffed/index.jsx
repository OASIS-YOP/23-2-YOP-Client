import * as s from './HeaderIsLogOffed.style';
import React from 'react';
import Blogo from '../../../assets/Blogo.svg';
import Avatar from '../../../assets/Avatar.svg';
import { useNavigate } from 'react-router-dom';

const HeaderIsLogOffed = () => {
  const navigate = useNavigate();

  const onClickMenu = (e) => {
    const menuIndex = e.target.dataset.menuIndex;
    if (menuIndex === '1') {
      navigate('/mainpage');
    } else if (menuIndex === '2') {
      navigate('/editor');
    } else if (menuIndex === '3') {
      navigate('/allartist');
    } else if (menuIndex === '4') {
      navigate('/');
    } else if (menuIndex === '5') {
      navigate('/mypage');
    }
  };

  return (
    <>
      <s.Header>
        <s.LogoWrapper>
          <s.Logo src={Blogo} onClick={onClickMenu} data-menu-index='1' />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Menu onClick={onClickMenu} data-menu-index='2'>
            편집기
          </s.Menu>
          <s.Menu onClick={onClickMenu} data-menu-index='3'>
            커뮤니티
          </s.Menu>
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
