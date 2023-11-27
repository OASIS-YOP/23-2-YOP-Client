import * as s from './style';

import React, { useState, useEffect } from 'react';

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
  flipX, setFlipX, flipY, setFlipY,
  blackWhite, setBlackWhite,
  isBackImgLayerEmpty, updateIsBackImgLayerEmpty,
  setRotationValue, rotationValue,
  scaleValue, setScaleValue,
  image, setIsScaleChanged, isScaleChanged,
  setHorizontal, horizontal,
}) => {

  // const [brightnessVlaue, setBrightnessValue] = useState(0);
  // const [saturationValue, setSaturationValue] = useState(0);
  // const [contrastValue, setContrastValue] = useState(0);

  // const [ mouseDragStart, setMouseDragStart ] = useState(false);
  // const [ mouseDragEnd, setMouseDragEnd ] = useState(false);

  const [ scaleSliderValue, setScaleSliderValue ] = useState(0);

  

  const handleFlipX = () => {
    // if( !isLayerEmpty ) {
      setFlipX((이전FlipX) => !이전FlipX);
      console.log('flipX', !flipX);
  };

  const handleFlipY = () => {
    // if( !isLayerEmpty ) {
      setFlipY((이전FlipY) => !이전FlipY);
      console.log('flipY', !flipY);

  };


  const handleBlackWhite = () => {
    // if( !isLayerEmpty ) {
    setBlackWhite((이전BlackWhite) => !이전BlackWhite);
    console.log('blackWhite', !blackWhite);

    //}
  };


  const handleBrightnessChange = (value) => {
    console.log('명도' + value);
    setBrightness(value/160);
  };

  const handleSaturationChange = (value) => {
    console.log('채도' + value);
    setSaturation(value/60);
    // setSaturationValue(value);
  };

  const handleContrastChange = (value) => {
    console.log('대비' + value);
    setContrast(value/4);
    // setContrastValue(value);
  };

  useEffect(() => {
    if (resetFiltersValue) {
      setResetFiltersValue(false);
      setBrightness(brightness);
      setSaturation(saturation);
      setContrast(contrast);
      setScaleSliderValue(0);
      setScaleValue(scaleValue);

      console.log('명도, 채도, 대비', brightness, saturation, contrast);

    }

  }, [resetFiltersValue]);

  const handleRotaionChange = (value) => {
    setRotationValue(value);
    console.log('회전' + value);
  };

  const handleScaleChange = (value) => {
    setIsScaleChanged(true);
    setScaleSliderValue(value);
    if (scaleSliderValue === 0) {
      setScaleValue(1);
    } else {
    setScaleValue(1+scaleSliderValue/100);
    }
    console.log('크기' + value);
  };

  // const handleHorizontalChange = (value) => {
  //   setHorizontal(value);
  //   console.log('X축' + value);
  // };



  // const valueReset = () => {
  //   console.log('리셋', brightness, saturation, contrast);
  //   setBrightness(0);
  //   setSaturation(0);
  //   setContrast(0);
  //   setResetFiltersValue(false);
  // };
  


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
          <s.TopButton 
            onClick={handleFlipX}
            disabled={isBackImgLayerEmpty}
            updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
            isBackImgLayerEmpty={isBackImgLayerEmpty}
          >
            <s.TopButtonIcon>
              <AlignCenterHorizontal />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              좌우대칭
            </s.TopButtonLabel>
            </s.TopButton>
            <s.TopButton 
              onClick={handleFlipY}
              disabled={isBackImgLayerEmpty}
              updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
              isBackImgLayerEmpty={isBackImgLayerEmpty}
            >
            <s.TopButtonIcon>
              <AlignCenterVertical />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              상하대칭
            </s.TopButtonLabel>
          </s.TopButton>
          <s.TopButton
            onClick={handleBlackWhite}
            disabled={isBackImgLayerEmpty}  
            updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
            isBackImgLayerEmpty={isBackImgLayerEmpty}
          >
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
                value = {resetFiltersValue ? 0 : brightness*160}
                onChange={handleBrightnessChange}
                disabled={isBackImgLayerEmpty}
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{brightness*160} </s.FilterValue>
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
                disabled={isBackImgLayerEmpty}
                value = {resetFiltersValue ? 0 : saturation*60}
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{saturation*60} </s.FilterValue>
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
                value = {resetFiltersValue ? 0 : contrast*4}
                disabled={isBackImgLayerEmpty}
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{contrast*4} </s.FilterValue>
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
                disabled={isBackImgLayerEmpty}
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                onChange={handleRotaionChange}
                value = { resetFiltersValue ? 0 : rotationValue}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-180}
                max={180}
              />
            </s.FilterSlider>
            <s.FilterValue >{rotationValue} </s.FilterValue>
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
                disabled={isBackImgLayerEmpty}
                value = { resetFiltersValue ? 0 : scaleSliderValue }
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                onChange={handleScaleChange}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{scaleSliderValue} </s.FilterValue>
          </s.Filter>
          {/* <s.Filter>
            <s.FilterIcon>
              <Horizontal />
            </s.FilterIcon>
            <s.FilterLabel>
              X축
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                id='horizontal-slider'
                defaultValue={0}
                disabled={isBackImgLayerEmpty}
                value = { resetFiltersValue ? 0 : horizontal }
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                onChange={handleHorizontalChange}
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
              Y축
            </s.FilterLabel>
            <s.FilterSlider>
              <Slider
                id='vertical-slider'
                defaultValue={0}
                disabled={isBackImgLayerEmpty}
                value = { resetFiltersValue ? 0 : ''}
                updateIsBackImgLayerEmpty={updateIsBackImgLayerEmpty}
                isBackImgLayerEmpty={isBackImgLayerEmpty}
                // onChange={handleScaleChange}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            </s.Filter>  */}
        </s.FiltersContainer>

      </s.Wrapper>
      
    </>
  );


};

export default Image;