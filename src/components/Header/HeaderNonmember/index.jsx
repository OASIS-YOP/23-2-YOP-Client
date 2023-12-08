import * as s from './HeaderNonmember.style';
import React from 'react';
import Blogo from '../../../assets/Blogo.svg';
import Avatar from '../../../assets/Avatar.svg';

import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { myProfileState } from '../../../recoil/user';

const HeaderNonmember = () => {
  const onClickMenu = (e) => {
    if (window.confirm('변경사항이 저장되지 않습니다. 저장하지 않고 계속 하시겠습니까?')) {
      const menuIndex = e.target.dataset.menuIndex;
        if (menuIndex === '1') {
          window.location.href = '/';
        } else if ( menuIndex === '2') {
          
        }
    } else {
      return;
    }
  };

  const adPhrases = [ 
    '내가 꾸민 포토카드 공유하면 미공개 포카 럭키드로우의 행운이! →',
    '최애가 그린 스티커로 폴꾸하기 →',
    '다른 사람이 꾸민 나의 최애가 궁금하다면? →',
    '내가 모은 포토카드를 한 눈에 확인할 수 있는 방법 →',
  ]

  const randomPhrases = adPhrases[Math.floor(Math.random() * adPhrases.length)];

  return (
    <>
      <s.Header >
        <s.LogoWrapper>
          <s.Logo src={Blogo} onClick={onClickMenu} data-menu-index='1' />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Description>{ randomPhrases }</s.Description>
          <s.JoinButton 
            onClick={onClickMenu} data-menu-index='4'>
            회원가입하기
          </s.JoinButton>
          <s.UserWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
    </>
  );
};

export default HeaderNonmember;
