import * as s from './style';

import AlignCenterHorizontal from '../../../../assets/AlignCenterHorizontal';
import AlignCenterVertical from '../../../../assets/AlignCenterVertical';
import BlackWhite from '../../../../assets/BlackWhite';

const Image = () => {
  


  return (
    <>
      <s.Wrapper>
        <s.TopButtonsWrapper>
          <s.TopButton>
            <s.ButtonIcon>
              <AlignCenterHorizontal />
            </s.ButtonIcon>
            <s.ButtonText>
              좌우대칭
            </s.ButtonText>
            </s.TopButton>
            <s.TopButton>
            <s.ButtonIcon>
              <AlignCenterVertical />
            </s.ButtonIcon>
            <s.ButtonText>
              상하대칭
            </s.ButtonText>
          </s.TopButton>
          <s.TopButton>
            <s.ButtonIcon>
              <BlackWhite />
            </s.ButtonIcon>
            <s.ButtonText>
              흑백
            </s.ButtonText>
          </s.TopButton>
        </s.TopButtonsWrapper>

      </s.Wrapper>
      
    </>
  );


};

export default Image;