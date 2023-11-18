import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import CommunityPage from '../pages/CommunityPage';

import Posts from '../pages/MyPage/Posts/index';
import Collections from '../pages/MyPage/Collections';
import MyDesigns from '../pages/MyPage/MyDesigns';
import MyLikes from '../pages/MyPage/MyLikes';
import AllArtist from '../pages/CommunityPage/AllArtist';
import UploadModal from '../components/UploadModal';
import Editor from '../pages/Editor';
import Editor2 from '../pages/Editor2';

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
    path: '/communitypage/:artistId',
    element: <CommunityPage />,
  },
  {
    path: '/allartist',
    element: <AllArtist />,
  },
  {
    path: '/upload',
    element: <UploadModal />,
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
  {
    path: '/editor2',
    element: <Editor2 />,
  },
]);

export default router;
