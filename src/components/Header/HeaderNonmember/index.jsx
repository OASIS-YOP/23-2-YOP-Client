import * as s from './HeaderNonmember.style';
import React from 'react';
import Blogo from '../../../assets/Blogo.svg';
import Avatar from '../../../assets/Avatar.svg';

import Modal from 'react-modal';
import { Join } from '../../JoinModal';
import { LoginInEditor } from '../../LoginModal/InEditor';

import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { myProfileState } from '../../../recoil/user';

const HeaderNonmember = ( {isBackImgEmpty} ) => {
  const onClickMenu = (e) => {
    if(isBackImgEmpty) {
      const menuIndex = e.target.dataset.menuIndex;
          if (menuIndex === '1') {
           window.location.href = '/';
          }
    } else {
      if (
        window.confirm(
          '변경사항이 저장되지 않습니다. 저장하지 않고 계속 하시겠습니까?'
        )
      ) {
        const menuIndex = e.target.dataset.menuIndex;
        if (menuIndex === '1') {
          window.location.href = '/';
        }

      } else {
          return;
      }
    }
  };

  const adPhrases = [ 
    '내가 꾸민 포토카드 공유하면 미공개 포카 럭키드로우의 행운이! →',
    '최애가 그린 스티커로 폴꾸하기 →',
    '다른 사람이 꾸민 나의 최애가 궁금하다면? →',
    '내가 모은 포토카드를 한 눈에 확인할 수 있는 방법 →',
  ]

  const randomPhrases = adPhrases[Math.floor(Math.random() * adPhrases.length)];

  const [isClickedLogin, setIsClickedLogin] = useState(false);
  const [isClickedJoin, setIsClickedJoin] = useState(false);

  const onClickLogin = () => {
    setIsClickedLogin((prev) => !prev);
    setIsClickedJoin(false);
  };
  const onClickJoin = () => {
    setIsClickedJoin((prev) => !prev);
    setIsClickedLogin(false);
  };
  // 모달 스타일
  const LoginModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: 998,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
      overflow: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '15px',
      outline: 'none',
      zIndex: 10,
    },
  };
  
  return (
    <>
      <s.Header >
        <s.LogoWrapper>
          <s.Logo src={Blogo} onClick={onClickMenu} data-menu-index='1' />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Description>{ randomPhrases }</s.Description>
          <s.JoinButton 
            onClick={onClickJoin} data-menu-index='2'>
            회원가입
          </s.JoinButton>
          <Modal
                isOpen={isClickedJoin}
                style={LoginModalStyle}
                onRequestClose={onClickJoin} // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
              >
                <Join />
              </Modal>
          <s.LogInButton
            onClick={ onClickLogin }
            data-menu-index='3'
          >
            로그인
          </s.LogInButton>
          <Modal
            isOpen={isClickedLogin}
            style={LoginModalStyle}
            onRequestClose={onClickLogin} // 오버레이나 esc를 누르면 핸들러 동작
            ariaHideApp={false}
          >
            <LoginInEditor />
          </Modal>
          <s.UserWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
    </>
  );
};

export default HeaderNonmember;
