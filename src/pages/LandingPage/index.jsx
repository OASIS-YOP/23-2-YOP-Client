import React from 'react';
import * as s from './style';
import Logo from '../../assets/logo.svg';

const LandingPage = () => {
  return (
    <s.Wrapper>
      <s.LeftContainer>
        <s.Header>
          <s.LogoWrapper>
            <s.Logo src={Logo} />
          </s.LogoWrapper>
        </s.Header>
        <s.ContentWrapper>
          <s.TextWrapper style={{ color: 'white' }}>
            <h1>랜딩페이지</h1>
            <p>
              이곳은 랜딩 페이지입니다. 슬라이드 혹은 애니메이션 형식으로
              넘어갑니다.
            </p>
          </s.TextWrapper>
        </s.ContentWrapper>
      </s.LeftContainer>
      <s.RightContainer>
        <s.Header></s.Header>
        <s.ContentWrapper>
          <s.TextWrapper style={{ textAlign: 'center' }}>
            <h1>
              나만의 폴꾸에서
              <br />
              포카 컬렉션, 그리고 최애 자랑까지
            </h1>
            <p>함께 즐기는 덕질 생활 ‘온폴’</p>
            <s.ButtonContainer>
              <s.Button>로그인</s.Button>
              <s.Button>회원가입</s.Button>
              <s.Button
                style={{
                  width: 150,
                  backgroundColor: ' #696969',
                  color: 'white',
                }}
              >
                로그인 없이 폴꾸하기
              </s.Button>
            </s.ButtonContainer>
          </s.TextWrapper>
        </s.ContentWrapper>
      </s.RightContainer>
    </s.Wrapper>
  );
};

export default LandingPage;
