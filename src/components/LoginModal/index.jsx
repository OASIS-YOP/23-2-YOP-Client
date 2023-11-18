import * as s from './modal.style.js';

export const Login = () => {

  const onClickLogInToMainpage = (e) => {
    window.location.href = '/mainpage';
  };

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
        <s.Button onClick={onClickLogInToMainpage}>로그인</s.Button>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
