import * as s from './style';

import React, { useState, useRef, useEffect } from 'react';

import AlignCenterHorizontal from '../../../../assets/AlignCenterHorizontal';
import AlignCenterVertical from '../../../../assets/AlignCenterVertical';
import BlackWhite from '../../../../assets/BlackWhite';

import Brightness from '../../../../assets/editorIcons/image/Brightness';
import Contrast from '../../../../assets/editorIcons/image/Contrast';
import Saturation from '../../../../assets/editorIcons/image/Saturation';

import Rotate from '../../../../assets/editorIcons/image/Rotate';
import Scale from '../../../../assets/editorIcons/image/Scale';
// import Horizontal from '../../../../assets/editorIcons/image/Horizontal';
// import Vertical from '../../../../assets/editorIcons/image/Vertical';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Konva from 'konva';





const Image = ({
  setBrightness, setSaturation, setContrast,
  brightness, saturation, contrast,
  setResetFiltersValue, resetFiltersValue,
  image, flipX, setFlipX, flipY, setFlipY,
  blackWhite, setBlackWhite,
}) => {

  const [brightnessVlaue, setBrightnessValue] = useState(0);
  const [saturationValue, setSaturationValue] = useState(0);
  const [contrastValue, setContrastValue] = useState(0);

  const handleFlipX = () => {
    setFlipX((이전FlipX) => !이전FlipX);
    console.log('flipX', !flipX);
  
    // 두 번째 호출
    setTimeout(() => {
      console.log('flipX', !flipX);
      setFlipX((이전FlipX) => !이전FlipX);
  
    }, 0);
  };

  const handleFlipY = () => {
    setFlipY((이전FlipY) => !이전FlipY);
    console.log('flipY', !flipY);

    // 두 번째 호출
    setTimeout(() => {
      console.log('flipY', !flipY);
      setFlipY((이전FlipY) => !이전FlipY);
    
    }, 0);
  };

  const handleBlackWhite = () => {
    setBlackWhite((이전BlackWhite) => !이전BlackWhite);
    console.log('blackWhite', !blackWhite);

  
  };




  const handleBrightnessChange = (value) => {
    console.log('명도' + value);
  
    setBrightnessValue(value);
    setBrightness(value/150);
    // setBrightnessValue(brightness);
  };

  const handleSaturationChange = (value) => {
    console.log('채도' + value);
    setSaturationValue(value);
    setSaturation(value/50);
    // setSaturationValue(value);
  };

  const handleContrastChange = (value) => {
    console.log('대비' + value);
    setContrastValue(value);
    setContrast(value/5);
    // setContrastValue(value);
  };

  useEffect(() => {
    if(resetFiltersValue === true) {
    valueReset();}
  }, [resetFiltersValue]);


  const valueReset = () => {
    console.log('리셋', brightness, saturation, contrast);
    setBrightness(0);
    setSaturation(0);
    setContrast(0);
    setResetFiltersValue(false);
  };
  






  const handleStyle = {
    width: 18,
    height: 18,
    backgroundColor: 'white',
    opacity: 100,
    cursor: 'pointer',
    marginTop: -7,
    border: '1.8px solid #B7C0D8',    
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
          <s.TopButton onClick={handleFlipX}>
            <s.TopButtonIcon>
              <AlignCenterHorizontal />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              좌우대칭
            </s.TopButtonLabel>
            </s.TopButton>
            <s.TopButton onClick={handleFlipY}>
            <s.TopButtonIcon>
              <AlignCenterVertical />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              상하대칭
            </s.TopButtonLabel>
          </s.TopButton>
          <s.TopButton onClick={handleBlackWhite}>
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
                id='brightness-slider'
                defaultValue={0}
                onChange={handleBrightnessChange}
                disabled={image !== null ? false : true}
                value={ resetFiltersValue === true ? brightness : brightnessVlaue}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{brightnessVlaue} </s.FilterValue>
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
                id='saturation-slider'
                defaultValue={0}
                onChange={handleSaturationChange}
                disabled={image !== null ? false : true}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{saturationValue} </s.FilterValue>
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
                id='contrast-slider'
                defaultValue={0}
                onChange={handleContrastChange}
                disabled={image !== null ? false : true}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{contrastValue} </s.FilterValue>
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
                id='rotate-slider'
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
                id='scale-slider'
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