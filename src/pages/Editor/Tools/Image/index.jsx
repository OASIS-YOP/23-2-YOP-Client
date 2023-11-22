import * as s from './style';

import AlignCenterHorizontal from '../../../../assets/AlignCenterHorizontal';
import AlignCenterVertical from '../../../../assets/AlignCenterVertical';
import BlackWhite from '../../../../assets/BlackWhite';

import Brightness from '../../../../assets/editorIcons/image/Brightness';
import Contrast from '../../../../assets/editorIcons/image/Contrast';
import Saturation from '../../../../assets/editorIcons/image/Saturation';

import Rotate from '../../../../assets/editorIcons/image/Rotate';
import Scale from '../../../../assets/editorIcons/image/Scale';
import Horizontal from '../../../../assets/editorIcons/image/Horizontal';
import Vertical from '../../../../assets/editorIcons/image/Vertical';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';




const Image = () => {

  const handleStyle = {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    border : '1.8px solid #B7C0D8',
    opacity: 100,
    
  };

  const trackStyle = {
    // 트랙(바)의 스타일 정의
    border: '1.8px solid #B7C0D8',
    borderRadius: 15,
    backgroundColor: 'white', // 트랙 색상 지정
    height: 10,
    marginTop: -2,
  };

  const railStyle = {
    border: '1.8px solid #B7C0D8',
    borderRadius: 15,
    height: 10,
    backgroundColor: '#CCD0DD', // 레일 색상 지정
    marginTop: -2,
  };



  

  return (
    <>
      <s.Wrapper>
        <s.TopButtonsWrapper>
          <s.TopButton>
            <s.TopButtonIcon>
              <AlignCenterHorizontal />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              좌우대칭
            </s.TopButtonLabel>
            </s.TopButton>
            <s.TopButton>
            <s.TopButtonIcon>
              <AlignCenterVertical />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              상하대칭
            </s.TopButtonLabel>
          </s.TopButton>
          <s.TopButton>
            <s.TopButtonIcon>
              <BlackWhite />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              흑백
            </s.TopButtonLabel>
          </s.TopButton>
        </s.TopButtonsWrapper>
        <s.FiltersContainer>
          <s.Filter>
            <s.FilterIcon>
              <Brightness />
            </s.FilterIcon>
            <s.FilterLabel>
              명도
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Saturation />
            </s.FilterIcon>
            <s.FilterLabel>
              채도
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Contrast />
            </s.FilterIcon>
            <s.FilterLabel>
              대비
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
          <s.devider />
        </s.FiltersContainer>
        <s.FiltersContainer
          style={{
            marginBottom: '100px',
          }}
        >
          <s.Filter>
            <s.FilterIcon>
              <Rotate />
            </s.FilterIcon>
            <s.FilterLabel>
              회전
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Scale />
            </s.FilterIcon>
            <s.FilterLabel>
              크기
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Horizontal />
            </s.FilterIcon>
            <s.FilterLabel>
              가로축
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Vertical />
            </s.FilterIcon>
            <s.FilterLabel>
              세로축
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                defaultValue={0}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
          </s.Filter>
        </s.FiltersContainer>

      </s.Wrapper>
      
    </>
  );


};

export default Image;