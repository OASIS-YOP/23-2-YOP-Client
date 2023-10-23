import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import MainPage from './pages/MainPage/index';
import MyPage from './pages/MyPage/index';

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
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
