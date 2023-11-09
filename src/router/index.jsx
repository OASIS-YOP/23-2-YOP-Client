import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/index';
import MainPage from '../pages/MainPage/index';
import MyPage from '../pages/MyPage/index';
import CommunityPage from '../pages/CommunityPage';

import Posts from '../pages/MyPage/Posts/index';
import Collections from '../pages/MyPage/Collections/index';
import MyDesigns from '../pages/MyPage/MyDesigns/index';
import MyLikes from '../pages/MyPage/MyLikes/index';
import AllArtist from '../pages/CommunityPage/AllArtist';
import Editor from '../pages/Editor';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/mainpage',
    element: <MainPage />,
  },
  {
    path: '/communitypage',
    element: <CommunityPage />,
  },
  {
    path: '/allartist',
    element: <AllArtist />,
  },
  {
    path: '/mypage',
    element: <MyPage />,
    children: [
      {
        path: '',
        element: <Posts />,
      },
      {
        path: '/mypage/collections',
        element: <Collections />,
      },
      {
        path: '/mypage/mydesigns',
        element: <MyDesigns />,
      },
      {
        path: '/mypage/mylikes',
        element: <MyLikes />,
      },
    ],
  },
  {
    path: '/editor',
    element: <Editor />,
  },
]);

export default router;
