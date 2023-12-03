import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/router';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RecoilRoot><RouterProvider router={router} /></RecoilRoot>);
