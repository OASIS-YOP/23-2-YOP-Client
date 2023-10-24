import { useState, useEffect } from 'react';
import * as s from './style';
import Profile from '../../assets/Profile.svg';

import Header from '../../components/Header';
import { Outlet, useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const currentPathname = window.location.pathname;

  return (
    <s.Wrapper>
      <Header />
      <s.ProfileSpace>
        <s.ProfileWrapper>
          <s.ProfileImageWrapper>
            <s.Profile src={Profile} />
          </s.ProfileImageWrapper>
          <s.ProfileTextsWrapper>
            <s.ProfileTexts>Onpol1004</s.ProfileTexts>
            <s.ProfileTexts className='sub'>자기소개</s.ProfileTexts>
          </s.ProfileTextsWrapper>
        </s.ProfileWrapper>
      </s.ProfileSpace>
      <s.TabMenuWrapper>
        <s.TabMenu
          onClick={() => navigate('/mypage')}
          className={currentPathname === '/mypage' ? 'active' : ''}
        >
          포스트
        </s.TabMenu>
        <s.TabMenu
          onClick={() => navigate('/mypage/collections')}
          className={currentPathname === '/mypage/collections' ? 'active' : ''}
        >
          컬렉션
        </s.TabMenu>
        <s.TabMenu
          onClick={() => navigate('/mypage/mydesigns')}
          className={currentPathname === '/mypage/mydesigns' ? 'active' : ''}
        >
          내 도안
        </s.TabMenu>
        <s.TabMenu
          onClick={() => navigate('/mypage/mylikes')}
          className={currentPathname === '/mypage/mylikes' ? 'active' : ''}
        >
          좋아요
        </s.TabMenu>
      </s.TabMenuWrapper>
      <s.ContentsWrapper>
        <Outlet />
      </s.ContentsWrapper>
    </s.Wrapper>
  );
};

export default MyPage;
