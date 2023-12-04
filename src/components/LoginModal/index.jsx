import * as s from './modal.style.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginState } from '../../states/LoginState.js';

import landingpageAPI from '../../api/landingpage/landingpageAPI.js';

export const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [accessToken, setAccessToken] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onClickLogInToMainpage = () => {
    landingpageAPI.login(user).then((data) => {
      if (data) {
        setAccessToken(data.token);
        window.alert('로그인 성공했습니다.');
        navigate('/mainpage');
      } else {
        console.log('로그인 실패');
      }
    });
  };

  useEffect(() => {
    if (accessToken) localStorage.setItem('accessToken', accessToken);
    if (localStorage.getItem('accessToken')) setIsLoggedIn(true);
  });

  return (
    <s.Wrapper>
      <s.TextContainer>
        <p>함께 즐기는 덕질 생활 '온폴'</p>
        <h1>로그인</h1>
      </s.TextContainer>

      <s.ContentContainer>
        <form type='submit' method='post'>
          <s.Input
            type='text'
            id='username'
            name='username'
            placeholder='이메일'
            onChange={handleChange}
          />
          <s.Input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호'
            onChange={handleChange}
          />
        </form>
        <s.Button onClick={onClickLogInToMainpage}>로그인</s.Button>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
