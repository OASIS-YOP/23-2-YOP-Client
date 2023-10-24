import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/index';
import MainPage from '../pages/MainPage/index';
import MyPage from '../pages/MyPage/index';

import Posts from '../pages/MyPage/Posts/index';
import Collections from '../pages/MyPage/Collections/index';
import MyDesigns from '../pages/MyPage/MyDesigns/index';
import MyLikes from '../pages/MyPage/MyLikes/index';

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
]);

export default router;