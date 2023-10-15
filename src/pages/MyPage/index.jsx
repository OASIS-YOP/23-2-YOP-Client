import { useState, useEffect } from 'react';
import * as s from './style';
import Profile from '../../assets/Profile.svg';
import Posts from './Posts';
import Collections from './Collections';
import MyDesigns from './MyDesigns';
import Likes from './Likes';
import Header from '../../components/Header';


const MyPage = ( ) => {

  const [ isPostsTab, setIsPostsTab ] = useState(true);
  const [ isCollectionsTab, setIsCollectionsTab ] = useState(false);
  const [ isMyDesignsTab, setIsMyDesignsTab ] = useState(false);
  const [ isLikesTab, setIsLikesTab ] = useState(false);

  const onClickTab = (e) => {
    if( e.target.tabIndex === 0 ) {
      setIsPostsTab(true);
      setIsCollectionsTab(false);
      setIsMyDesignsTab(false);
      setIsLikesTab(false);
    } else if ( e.target.tabIndex === 1 ) {
      setIsPostsTab(false);
      setIsCollectionsTab(true);
      setIsMyDesignsTab(false);
      setIsLikesTab(false);
    } else if ( e.target.tabIndex === 2 ) {
      setIsPostsTab(false);
      setIsCollectionsTab(false);
      setIsMyDesignsTab(true);
      setIsLikesTab(false);
    } else if ( e.target.tabIndex === 3 ) {
      setIsPostsTab(false);
      setIsCollectionsTab(false);
      setIsMyDesignsTab(false);
      setIsLikesTab(true);
    }
  }
  

  useEffect(() => {
    const tabMenuToggle = () => {
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
      tabMenuToggle();
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
          onClick={onClickTab}
          className={isPostsTab ? 'active' : ''}
          tabIndex={0}
        >포스트</s.TabMenu>
        <s.TabMenu 
          onClick={onClickTab}
          className={isCollectionsTab ? 'active' : ''}
          tabIndex={1}
        >컬렉션</s.TabMenu>
        <s.TabMenu
          onClick={onClickTab}
          className={isMyDesignsTab ? 'active' : ''}
          tabIndex={2}  
        >내 도안</s.TabMenu>
        <s.TabMenu 
          onClick={onClickTab}
          className={isLikesTab ? 'active' : ''}
          tabIndex={3}
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