import * as s from './Login.style.js';

export const Login = () => {
  return (
    <s.Wrapper>
      <s.TextContainer>
        <p>함께 즐기는 덕질 생활 '온폴'</p>
        <h1>로그인</h1>
      </s.TextContainer>

      <s.ContentContainer>
        <form type='submit' method='post' action='' id='login-form'>
          <s.Input
            type='text'
            id='email'
            name='email'
            placeholder='이메일'
            className='input-id'
            // onKeyDown={}
            // value={}
            // onChange={}
          />
          <s.Input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호'
            className='input-pw'
            // autoComplete={}
            // onKeyDown={}
            // value={}
            // onChange={}
          />
        </form>
        <s.Button>로그인</s.Button>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
