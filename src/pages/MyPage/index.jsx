import { useState, useEffect } from 'react';
import * as s from './style';
import Profile from '../../assets/Profile.svg';

import Header from '../../components/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import mypageAPI from '../../api/mypage/mypageAPI';

const MyPage = () => {
  const [userId, setUserId] = useState(1);
  const [myProfile, setMyProfile] = useState({});

  const navigate = useNavigate();
  const currentPathname = window.location.pathname;

  const getMyProfile = () => {
    mypageAPI
      .getMyProfile(userId)
      .then((data) => setMyProfile(data.userProfileInfo));
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <Header />
      <s.Wrapper>
        <s.ProfileSpace>
          <s.ProfileWrapper>
            <s.ProfileImageWrapper>
              <s.Profile src={myProfile.avatar} />
            </s.ProfileImageWrapper>
            <s.ProfileTextsWrapper>
              <s.ProfileTexts>{myProfile.nickname}</s.ProfileTexts>
              <s.ProfileTexts className='sub'>
                {myProfile.biography}
              </s.ProfileTexts>
            </s.ProfileTextsWrapper>
          </s.ProfileWrapper>
        </s.ProfileSpace>
        <s.TabMenuWrapper>
          <s.TabMenu
            onClick={() => navigate(`/mypage`)}
            className={currentPathname === '/mypage' ? 'active' : ''}
          >
            포스트
          </s.TabMenu>
          <s.TabMenu
            onClick={() => navigate('/mypage/collections')}
            className={
              currentPathname === '/mypage/collections' ? 'active' : ''
            }
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
    </>
  );
};

export default MyPage;
