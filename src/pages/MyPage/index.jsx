// import { useState } from 'react';
import * as s from './style';
import Blogo from '../../assets/Blogo.svg';
import Avatar from '../../assets/Avatar.svg';
import Profile from '../../assets/Profile.svg';


const MyPage = () => {

  // const [ isPostsTab, setIsPostsTab ] = useState(true);
  // const [ isCollectionsTab, setIsCollectionsTab ] = useState(false);
  // const [ isMyDesignsTab, setIsMyDesignsTab ] = useState(false);
  // const [ isLikesTab, setIsLikesTab ] = useState(false);

  // const onClickPostsTab = () => {
  //   setIsPostsTab(true);
  //   setIsCollectionsTab(false);
  //   setIsMyDesignsTab(false);
  //   setIsLikesTab(false);
  // }

  // const onClickCollectionsTab = () => {
  //   setIsPostsTab(false);
  //   setIsCollectionsTab(true);
  //   setIsMyDesignsTab(false);
  //   setIsLikesTab(false);
  // }

  // const onClickMyDesignsTab = () => {
  //   setIsPostsTab(false);
  //   setIsCollectionsTab(false);
  //   setIsMyDesignsTab(true);
  //   setIsLikesTab(false);
  // }

  // const onClickLikesTab = () => {
  //   setIsPostsTab(false);
  //   setIsCollectionsTab(false);
  //   setIsMyDesignsTab(false);
  //   setIsLikesTab(true);
  // }

  // useEffect(() => {
  //   const effect = () => {
  //     if (isPostsTab) {
  //       return <Posts />;
  //     } else if (isCollectionsTab) {
  //       return <Collections />;
  //     } else if (isMyDesignsTab) {
  //       return <MyDesigns />;
  //     } else if (isLikesTab) {
  //       return <Likes />;
  //     }
  //   };
  //   return () => {
  //     effect();
  //   };
  // }, [input]);

  return (
    <s.Wrapper>
      <s.Header>
        <s.LogoWrapper>
          <s.Logo src={Blogo} />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Menu>편집기</s.Menu>
          <s.Menu>커뮤니티</s.Menu>
          <s.Menu>마이페이지</s.Menu>
          <s.Menu>로그아웃</s.Menu>
          <s.UserWrapper>
            <s.Icon src={Avatar} />
            <s.NicknameWrapper>Onpol1004</s.NicknameWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
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
        <s.TabMenu>포스트</s.TabMenu>
        <s.TabMenu>컬렉션</s.TabMenu>
        <s.TabMenu>내 도안</s.TabMenu>
        <s.TabMenu>좋아요</s.TabMenu>
      </s.TabMenuWrapper>
      <s.ContentsWrapper>
        콘텐츠 들어갈 곳
      </s.ContentsWrapper>
    </s.Wrapper>
  );
};

export default MyPage;