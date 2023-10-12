import { useState, useEffect } from 'react';
import * as s from './style';
import Profile from '../../assets/Profile.svg';
import Posts from './Posts';
import Collections from './Collections';
import MyDesigns from './MyDesigns';
import Likes from './Likes';
import Header from '../../components/Header';


const MyPage = () => {

  const [ isPostsTab, setIsPostsTab ] = useState(true);
  const [ isCollectionsTab, setIsCollectionsTab ] = useState(false);
  const [ isMyDesignsTab, setIsMyDesignsTab ] = useState(false);
  const [ isLikesTab, setIsLikesTab ] = useState(false);

  const onClickPostsTab = () => {
    setIsPostsTab(true);
    setIsCollectionsTab(false);
    setIsMyDesignsTab(false);
    setIsLikesTab(false);
  }

  const onClickCollectionsTab = () => {
    setIsPostsTab(false);
    setIsCollectionsTab(true);
    setIsMyDesignsTab(false);
    setIsLikesTab(false);
  }

  const onClickMyDesignsTab = () => {
    setIsPostsTab(false);
    setIsCollectionsTab(false);
    setIsMyDesignsTab(true);
    setIsLikesTab(false);
  }

  const onClickLikesTab = () => {
    setIsPostsTab(false);
    setIsCollectionsTab(false);
    setIsMyDesignsTab(false);
    setIsLikesTab(true);
  }

  useEffect(() => {
    const effect = () => {
      if (isPostsTab) {
        return <Posts />;
      } else if (isCollectionsTab) {
        return <Collections />;
      } else if (isMyDesignsTab) {
        return <MyDesigns />;
      } else if (isLikesTab) {
        return <Likes />;
      }
    };
    return () => {
      effect();
    };
  }, [isPostsTab, isCollectionsTab, isMyDesignsTab, isLikesTab]);

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
          onClick={onClickPostsTab}
          className={isPostsTab ? 'active' : ''}
        >포스트</s.TabMenu>
        <s.TabMenu 
          onClick={onClickCollectionsTab}
          className={isCollectionsTab ? 'active' : ''}
        >컬렉션</s.TabMenu>
        <s.TabMenu
          onClick={onClickMyDesignsTab}
          className={isMyDesignsTab ? 'active' : ''}  
        >내 도안</s.TabMenu>
        <s.TabMenu 
          onClick={onClickLikesTab}
          className={isLikesTab ? 'active' : ''}
        >좋아요</s.TabMenu>
      </s.TabMenuWrapper>
      <s.ContentsWrapper>
        {isPostsTab && <Posts />}
        {isCollectionsTab && <Collections />}
        {isMyDesignsTab && <MyDesigns />}
        {isLikesTab && <Likes />}
      </s.ContentsWrapper>
    </s.Wrapper>
  );
};

export default MyPage;