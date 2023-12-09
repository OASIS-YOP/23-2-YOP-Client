import * as s from './HeaderMember.style';
import React from 'react';
import Blogo from '../../../assets/Blogo.svg';
import Avatar from '../../../assets/Avatar.svg';

import { useRecoilState, useResetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { myProfileState } from '../../../recoil/user';
import { LoginState } from '../../../states/LoginState';
import mypageAPI from '../../../api/mypage/mypageAPI';

const HeaderMember = () => {
  const [ isLogin, setLogin ] = useRecoilState(LoginState);
  const [myProfile, setMyProfile] = useRecoilState(myProfileState);
  const resetMyProfile = useResetRecoilState(myProfileState);

  const getMyProfile = () => {
    mypageAPI
      .getMyProfile()
      .then((data) => setMyProfile(data?.userProfileInfo));
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  const onClickLogOut = () => {
    setLogin(false);
    resetMyProfile(myProfileState);
    localStorage.removeItem('atk');
  };

  const onClickMenu = (e) => {
    if (window.confirm('변경사항이 저장되지 않습니다. 저장하지 않고 계속 하시겠습니까?')) {
      const menuIndex = e.target.dataset.menuIndex;
      if (menuIndex === '1') {
        window.location.href = '/mainpage';
      } else if ( menuIndex === '2') {
        window.location.href = '/editor';
      } else if (menuIndex === '3') {
        window.location.href = '/allartist';
      } else if (menuIndex === '4') {
        onClickLogOut();
        window.location.href = '/editor';
      } else if (menuIndex === '5') {
        window.location.href = '/mypage';
      }
    } else {
      return;
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
            <s.IconWrapper>
              <s.Icon src={myProfile.avatar} onClick={onClickMenu} data-menu-index='5' />
            </s.IconWrapper>
            <s.NicknameWrapper onClick={onClickMenu} data-menu-index='5'>
              {myProfile.nickname}
            </s.NicknameWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
    </>
  );
};

export default HeaderMember;
