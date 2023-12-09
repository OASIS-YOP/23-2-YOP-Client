import React from 'react';
import { useState } from 'react';
import * as s from './style';
import Modal from 'react-modal';
import Logo from '../../assets/logo.svg';
import { Login } from '../../components/LoginModal';
import { Join } from '../../components/JoinModal';

const LandingPage = () => {
  const [isClickedLogin, setIsClickedLogin] = useState(false);
  const [isClickedJoin, setIsClickedJoin] = useState(false);

  const onClickLogin = () => {
    setIsClickedLogin((prev) => !prev);
  };
  const onClickJoin = () => {
    setIsClickedJoin((prev) => !prev);
  };
  // 모달 스타일
  const LoginModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: 10,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      overflow: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '15px',
      outline: 'none',
      zIndex: 10,
    },
  };

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
              <s.Button onClick={onClickLogin}>로그인</s.Button>
              <Modal
                isOpen={isClickedLogin}
                style={LoginModalStyle}
                onRequestClose={onClickLogin} // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
              >
                <Login />
              </Modal>
              <s.Button onClick={onClickJoin}>회원가입</s.Button>
              <Modal
                isOpen={isClickedJoin}
                style={LoginModalStyle}
                onRequestClose={onClickJoin} // 오버레이나 esc를 누르면 핸들러 동작
                ariaHideApp={false}
              >
                <Join />
              </Modal>

              <s.Button
                style={{
                  width: 150,
                  backgroundColor: ' #696969',
                  color: 'white',
                }}
                onClick={() => {
                  window.location.href = '/editor';
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
