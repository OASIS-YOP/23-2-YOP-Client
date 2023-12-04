import * as s from './style';

import React, { useState, useEffect } from 'react';

import AlignCenterHorizontal from '../../../../assets/AlignCenterHorizontal';
import AlignCenterVertical from '../../../../assets/AlignCenterVertical';
import BlackWhite from '../../../../assets/BlackWhite';

import Circle from './../../../../assets/editorIcons/draw/Circle';

import Brightness from '../../../../assets/editorIcons/image/Brightness';
import Contrast from '../../../../assets/editorIcons/image/Contrast';
import Saturation from '../../../../assets/editorIcons/image/Saturation';

import Rotate from '../../../../assets/editorIcons/image/Rotate';
import Scale from '../../../../assets/editorIcons/image/Scale';
// import Horizontal from '../../../../assets/editorIcons/image/Horizontal';
// import Vertical from '../../../../assets/editorIcons/image/Vertical';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { fabric } from 'fabric';
// import Konva from 'konva';

import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { 
  brightnessValue,
  contrastValue,
  saturationValue,
  rotationValue,
  scaleValue,
  reverseXState,
  reverseYState,
  applyGrayState,
  refreshImageState,
  isBackImgEmptyState,
  resizeHeight,
  resizeWidth,
} from '../../../../recoil/atoms';

const ImageTool = ({ image, canvas,}) => {
  const [ brightness , setBrightness ] = useRecoilState(brightnessValue);
  const [ contrast , setContrast ] = useRecoilState(contrastValue);
  const [ saturation , setSaturation ] = useRecoilState(saturationValue);
  const [ rotation, setRotation ] = useRecoilState(rotationValue);
  const [ scale, setScale ] = useRecoilState(scaleValue);
  const [ reverseXToggle, setReverseXToggle ] = useRecoilState(reverseXState);
  const [ reverseYToggle, setReverseYToggle ] = useRecoilState(reverseYState);
  const [ applyGray, setApplyGray ] = useRecoilState(applyGrayState);


//test
  const resetBrightness = useResetRecoilState(brightnessValue);
  const resetContrast = useResetRecoilState(contrastValue);
  const resetSaturation = useResetRecoilState(saturationValue);
  const resetRotation = useResetRecoilState(rotationValue);
  const resetScale = useResetRecoilState(scaleValue);
  const resetReverseX = useResetRecoilState(reverseXState);
  const resetReverseY = useResetRecoilState(reverseYState);
  const resetGray = useResetRecoilState(applyGrayState);

  const [ refreshImage, setRefreshImage ] = useRecoilState(refreshImageState);
  const [ isBackImgEmpty, setIsBackImgEmpty ] = useRecoilState(isBackImgEmptyState);

  // const [ brightnessValue, setBrightnessValue ] = useState(0);
  // const [ saturationValue, setSaturationValue ] = useState(0);
  // const [ contrastValue, setContrastValue ] = useState(0);
  

  const newWidth = useRecoilValue(resizeWidth);
  const newHeight = useRecoilValue(resizeHeight);

  //filter part

  const applyFilter = (index, filter) => {
    image.filters[index] = filter;
    image.applyFilters();
    canvas.requestRenderAll();
  };

  const applyFilterValue = (index, prop, value) => {
    if (image.filters[index]) {
      image.filters[index][prop] = value;
      image.applyFilters();
      canvas.renderAll();
    }
  };

  const onClickGray = () => {
    console.log('gray!');
    setApplyGray((prev) => !prev);
  };

  const applyGrayFilter = (index, filter) => {
    setIsBackImgEmpty(false);
    image.filters[index] = filter;
    console.log(image.filters);
    image.applyFilters();
    canvas.renderAll();
  };

  const removeGrayFilter = () => {
    if(image)
    image.filters.splice(0);
    image.applyFilters();
    canvas.renderAll();
  };

  //좌우반전 part
  const reverseX = () => {
    image.set('flipX', reverseXToggle);
    setReverseXToggle((prev) => !prev);
    canvas.renderAll();
  };
  const reverseY = () => {
    image.set('flipY', reverseYToggle);
    setReverseYToggle((prev) => !prev);
    canvas.renderAll();
  };

  useEffect(() => {
    //필터 초기화
    if (isBackImgEmpty) {
    resetBrightness();
    resetContrast();
    resetSaturation();
    resetRotation();
    resetScale();
    resetReverseX();
    resetReverseY();
    resetGray();
  } else{
    return;
  }
  }, [isBackImgEmpty]);

  //canvas clear될때마다 inputValue 초기화
  // canvas.on({ 'canvas:cleared': initRangeInputValues });

  // 초기화 버튼 누르면
  const handleRefresh = () => {
    //필터 초기화
    setRefreshImage(true);

      resetBrightness();
      resetContrast();
      resetSaturation();
      resetRotation();
      resetScale();
      resetReverseX();
      resetReverseY();
      resetGray();

    image.set('flipX', false);
    image.set('flipY', false);
    image.set('angle', 0);

    // 명도 필터 초기화
    applyFilter(1, new fabric.Image.filters.Brightness({ brightness: 0 }));
    applyFilterValue(1, 'brightness', 0);

    // 채도 필터 초기화
    applyFilter(2, new fabric.Image.filters.Saturation({ saturation: 0 }));
    applyFilterValue(2, 'saturation', 0);

    // 대비 필터 초기화
    applyFilter(3, new fabric.Image.filters.Contrast({ contrast: 0 }));
    applyFilterValue(3, 'contrast', 0);

    //이미지 위치 초기화
    image.set({
      left: 340 / 2,
      top: 492 / 2,
    });

      image.setCoords();
      canvas.renderAll();
      setRefreshImage(false);
  };

  useEffect(() => {
    if(refreshImage){
      console.log('백그라운드 이미지 초기화:', refreshImage)
      if (refreshImage) {
        const imgWidth = image.width;
        const imgHeight = image.height;

        // 이미지 크기 변경
        if (imgWidth > imgHeight) {
          image.scaleToHeight(492);
        } else if (imgHeight > imgWidth) {
          image.scaleToWidth(340);
        } else if (imgWidth === imgHeight) {
          image.scaleToHeight(492);
        }
        image.set('scaleX', image.scaleX).set('scaleY', image.scaleY);
        image.setCoords();
        canvas.renderAll();
      } else if (!refreshImage){
        return;
      }
    }
  }, [refreshImage]);


  //gray toggle
  useEffect(() => {
    if (!image) return;
    applyGray
      ? applyGrayFilter(0, new fabric.Image.filters.Grayscale())
      : removeGrayFilter();
  }, [applyGray]);

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

  useEffect(() => {
    if (image) {
      console.log('이미지탭 마운트:', brightness, saturation, contrast, rotation, scale, );
    }
  }, []);

  return (
    <>
      <s.Wrapper>
        <s.TopButtonsWrapper>
          <s.TopButton
            onClick={reverseX}
            disabled={isBackImgEmpty}
          >
            <s.TopButtonIcon
              isActive={!isBackImgEmpty}
            >
              <AlignCenterHorizontal
                isActive={!isBackImgEmpty}
              />
            </s.TopButtonIcon>
            <s.TopButtonLabel
              isActive={!isBackImgEmpty}
            >
              좌우대칭
            </s.TopButtonLabel>
            </s.TopButton>
            <s.TopButton 
              onClick={reverseY}
              disabled={isBackImgEmpty}
            >
            <s.TopButtonIcon
              isActive={!isBackImgEmpty}
            >
              <AlignCenterVertical />
            </s.TopButtonIcon>
            <s.TopButtonLabel
              isActive={!isBackImgEmpty}
            >
              상하대칭
            </s.TopButtonLabel>
          </s.TopButton>
          <s.TopButton
            id='grayscale'
            onClick={onClickGray}
            disabled={isBackImgEmpty}
          >
            <s.TopButtonIcon
              isActive={!isBackImgEmpty}
            >
              <BlackWhite />
            </s.TopButtonIcon>
            <s.TopButtonLabel
              isActive={!isBackImgEmpty}
            >
              흑백
            </s.TopButtonLabel>
          </s.TopButton>
        </s.TopButtonsWrapper>
        <s.FiltersContainer>
          <s.Filter>
            <s.FilterIcon>
              <Brightness />
            </s.FilterIcon>
            <s.FilterLabel>명도</s.FilterLabel>
            <s.FilterSlider>
              <Slider
                className='image-input'
                id='brightness-value'
                value={ isBackImgEmpty ? 0 : brightness }
                onChange={(value)=> {
                  setBrightness(value);
                }}
                disabled={isBackImgEmpty}
                isBackImgEmpty={isBackImgEmpty}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{brightness}</s.FilterValue>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Saturation />
            </s.FilterIcon>
            <s.FilterLabel>채도</s.FilterLabel>
            <s.FilterSlider>
              <Slider
                className='image-input'
                id='saturation-value'
                value={saturation}
                onChange={(value) => {
                  setSaturation(value);
                }}
                disabled={isBackImgEmpty}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{saturation} </s.FilterValue>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Contrast />
            </s.FilterIcon>
            <s.FilterLabel>대비</s.FilterLabel>
            <s.FilterSlider>
              <Slider
                className='image-input'
                id='contrast-value'
                value={isBackImgEmpty ? 0 : contrast}
                  onChange={(value) => {
                  setContrast(value);
                }}
                disabled={isBackImgEmpty}
                // updateIsBackImgEmpty={updateIsBackImgEmpty}
                isBackImgEmpty={isBackImgEmpty}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-100}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{contrast} </s.FilterValue>
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
            <s.FilterLabel>회전</s.FilterLabel>
            <s.FilterSlider>
              <Slider
                className='image-input'
                id='rotate-slider'
                disabled={isBackImgEmpty}
                onChange={(value) => {
                    const newAngle = parseInt(value);
                    setRotation(value);
                    image.set('angle', newAngle).setCoords();
                    canvas.requestRenderAll();
                }}
                value={rotation}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-180}
                max={180}
              />
            </s.FilterSlider>
            <s.FilterValue >{rotation} </s.FilterValue>
          </s.Filter>
          <s.Filter>
            <s.FilterIcon>
              <Scale />
            </s.FilterIcon>
            <s.FilterLabel>크기</s.FilterLabel>
            <s.FilterSlider>
              <Slider
                className='image-input'
                id='scale-slider'
                disabled={isBackImgEmpty}
                value = {scale}
                onChange={(value) => {
                  if (image.width > image.height) {
                    const scaleFactor = (value * newWidth) / 50;
                    image.scaleToWidth(scaleFactor).setCoords();

                    canvas.requestRenderAll();
                    setScale(value);
                  } else if (image.width< image.height){
                    const scaleFactor = value * newHeight/50; 
                    image.scaleToHeight(scaleFactor).setCoords();

                    canvas.requestRenderAll();
                    setScale(value);
                  } else if (image.width === image.height){
                    const scaleFactor = value * newHeight/50; 
                    image.scaleToHeight(scaleFactor).setCoords();

                    canvas.requestRenderAll();

                    setScale(value);
                  }
                }}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={1}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{scale} </s.FilterValue>
          </s.Filter>
          <s.devider />
          <s.TopButtonsWrapper
            style={{
              marginTop: '30px',
            }}
          >
            <s.TopButton
              id='refresh'
              onClick={handleRefresh}
              disabled={isBackImgEmpty}
            >
              <s.TopButtonLabel
                isActive={!isBackImgEmpty}  
              >
                초기화
              </s.TopButtonLabel>
            </s.TopButton>
          </s.TopButtonsWrapper>
        </s.FiltersContainer>
      </s.Wrapper>
    </>
  );
};

export default ImageTool;
