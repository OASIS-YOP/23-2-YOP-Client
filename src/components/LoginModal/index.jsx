import * as s from './modal.style.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LoginState, myProfileState } from '../../recoil/user.js';

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
        console.log(data);
        localStorage.setItem('atk', data.token);
        window.alert('회원님, 환영합니다!');
        setAccessToken(data.token);
        navigate('/mainpage');
        setIsLoggedIn(true);
      } else {
        console.log('로그인 실패');
        window.alert('등록된 회원이 아닙니다.');
      }
    });
  };

  useEffect(() => {
    if (accessToken) localStorage.setItem('atk', accessToken);
    if (localStorage.getItem('atk')) setIsLoggedIn(true);
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
