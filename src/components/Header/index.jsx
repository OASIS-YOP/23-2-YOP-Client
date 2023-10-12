import * as s from './style';
import Blogo from '../../assets/Blogo.svg';
import Avatar from '../../assets/Avatar.svg';

const Header = () => {
  return(
    <>
      <s.Header>
        <s.LogoWrapper>
          <s.Logo src={Blogo} />
        </s.LogoWrapper>
        <s.MenuWrapper>
          <s.Menu>편집기</s.Menu>
          <s.Menu>커뮤니티</s.Menu>
          <s.Menu>마이페이지</s.Menu>
          <s.Menu>로그아웃</s.Menu>
          <s.UserWrapper>
            <s.Icon src={Avatar} />
            <s.NicknameWrapper>Onpol1004</s.NicknameWrapper>
          </s.UserWrapper>
        </s.MenuWrapper>
      </s.Header>
    </>
  )

}

export default Header;