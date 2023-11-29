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
import { CollectionCard } from '../components/UploadModal/upload.style';

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
    path: '/uploadModal2',
    element: <CollectionCard />,
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
