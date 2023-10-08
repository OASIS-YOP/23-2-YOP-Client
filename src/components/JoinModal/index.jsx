import * as s from '../LoginModal/modal.style';

export const Join = () => {
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
            // onKeyDown={}
            // value={}
            // onChange={}
          />
          <s.Input
            type='text'
            id='email'
            name='email'
            placeholder='이메일'
            // onKeyDown={}
            // value={}
            // onChange={}
          />
          <s.Input
            type='password'
            id='password'
            name='password'
            placeholder='비밀번호'
            // autoComplete={}
            // onKeyDown={}
            // value={}
            // onChange={}
          />
        </form>
        <s.Button>가입하기</s.Button>
      </s.ContentContainer>
    </s.Wrapper>
  );
};
