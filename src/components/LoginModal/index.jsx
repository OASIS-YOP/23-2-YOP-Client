import { useNavigate } from 'react-router-dom';
import * as s from './modal.style.js';
import { useState } from 'react';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onClickLogInToMainpage = () => {
    navigate('/mainpage');
  };

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
            id='email'
            name='email'
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
