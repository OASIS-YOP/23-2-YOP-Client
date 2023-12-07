import { useState } from 'react';
import * as s from '../LoginModal/modal.style'; //LoginModal의 style을 함께 씀
import landingpageAPI from '../../api/landingpage/landingpageAPI';

export const Join = () => {
  const [user, setUser] = useState({
    nickname: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleRegister = () => {
    landingpageAPI.register(user).then((data) => {
      if (data) {
        console.log('회원가입 성공');
      } else {
        console.log('회원가입 실패');
      }
    });
  };
  return (
    <s.Wrapper>
      <s.TextContainer>
        <p>함께 즐기는 덕질 생활 '온폴'</p>
        <h1>회원가입</h1>
      </s.TextContainer>

      <s.ContentContainer>
        <form type='submit' method='post' action='' id='login-form'>
          <s.Input
            type='text'
            id='nickname'
            name='nickname'
            placeholder='닉네임'
            onChange={handleChange}
          />
          <s.Input
            type='text'
            id='email'
            name='username'
            placeholder='이메일'
            onChange={handleChange}
            // onKeyDown={}
            // value={}
          />
          <s.Input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호'
            onChange={handleChange}
            // autoComplete={}
            // onKeyDown={}
            // value={}
          />
        </form>
        <s.Button onClick={handleRegister}>가입하기</s.Button>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
