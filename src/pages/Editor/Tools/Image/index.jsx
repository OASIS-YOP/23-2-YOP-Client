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

import { fabric } from 'fabric';
// import Konva from 'konva';





const Image = ({
  image, canvas,
  isBackImgEmpty, setIsBackImgEmpty,
}) => {

  // const [brightnessVlaue, setBrightnessValue] = useState(0);
  // const [saturationValue, setSaturationValue] = useState(0);
  // const [contrastValue, setContrastValue] = useState(0);

  // const [ isBackImgEmpty, setIsBackImgEmpty ] = useState(true);
  const [reverseXToggle, setReverseXToggle] = useState(true);
  const [reverseYToggle, setReverseYToggle] = useState(true);
  const [applyGray, setApplyGray] = useState(false);

  const [ imageLock, setImageLock ] = useState(false);

  const [ refreshImage, setRefreshImage ] = useState(false);

  const [ brightnessValue, setBrightnessValue ] = useState(0);
  const [ saturationValue, setSaturationValue ] = useState(0);
  const [ contrastValue, setContrastValue ] = useState(0);
  const [ rotationValue, setRotationValue ] = useState(0);
  const [ scaleValue, setScaleValue ] = useState(1);

  const [ newWidth, setNewWidth ] = useState( 0 );
  const [ newHeight, setNewHeight ] = useState( 0 );

  //filter part

  const applyFilter = (index, filter) => {
    image.filters[index] = filter;
    image.applyFilters();
    canvas.renderAll();
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
    image.filters.splice(0);
    image.applyFilters();
    canvas.renderAll();
  };

  //이미지 잠금
  const lockImage = () => {
    setImageLock((prev) => !prev);
    image.set({
      evented: imageLock,
    });
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
    if(!image){
    setIsBackImgEmpty(true);
    setApplyGray(false);
    } 
    else if (image) {
    setBrightnessValue(0);
    setSaturationValue(0);
    setContrastValue(0);
    setRotationValue(0);
    setScaleValue(50);

    setReverseXToggle(true);
    setReverseYToggle(true);
    
    setIsBackImgEmpty(false);
  }
  }, [image]);


  // useEffect(() => {
  //   if (image) {
  //     console.log('필터값들:', brightnessValue, saturationValue, contrastValue, rotationValue, scaleValue);
  //   }
  // }, [brightnessValue, saturationValue, contrastValue, rotationValue, scaleValue]);



  //canvas clear될때마다 inputValue 초기화
  // canvas.on({ 'canvas:cleared': initRangeInputValues });

  // 초기화 버튼 누르면
  const handleRefresh = () => {
    //필터 초기화
      setRefreshImage(true);

      setApplyGray(false);

      setBrightnessValue(0);
      setSaturationValue(0);
      setContrastValue(0);
      setRotationValue(0);
      setScaleValue(50);
  
      setReverseXToggle(true);
      setReverseYToggle(true);

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
        left: 340/2,
        top: 492/2,
      });

      image.setCoords();
      canvas.renderAll();
  };

  useEffect(() => {

    console.log('이미지 초기화:', refreshImage)
    if (image && refreshImage) {
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
      setRefreshImage(false);
    } else if (!refreshImage){
      return;
    }
    
  }, [image, refreshImage]);




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


   /////////////// 캔버스에 들어갈 이미지 사이즈 조정

   const resizeImage = () => {
    if (image)
   {const canvasWidth = 340;
   const canvasHeight = 492;

   const imgWidth = image.width;
   const imgHeight = image.height;

   const maxWidth = canvasWidth;
   const maxHeight = canvasHeight;

   const aspectRatio = imgWidth / imgHeight;

   let newWidth = imgWidth;
   let newHeight = imgHeight;

   // 이미지의 가로가 세로보다 클 때
   if (imgWidth > imgHeight) {
     newHeight = maxHeight;
     newWidth = newHeight * aspectRatio;
   }
   // 이미지의 세로가 가로보다 클 때
   if (imgHeight > imgWidth) {
     newWidth = maxWidth;
     newHeight = newWidth / aspectRatio;
   }
   // 이미지의 가로와 세로가 같을 때
   if (imgWidth === imgHeight) {
     newHeight = maxHeight;
     newWidth = newHeight * aspectRatio;
   }
    console.log('newWidth:', newWidth, 'newHeight:', newHeight);
    setNewWidth(newWidth);
    setNewHeight(newHeight);
  }

  };
   ////////////////////////////////////////

   useEffect((image) => {
    resizeImage(image);
  }, [image]);


  return (
    <>
      <s.Wrapper>
        <s.TopButtonsWrapper>
          <s.TopButton 
            onClick={reverseX}
            disabled={isBackImgEmpty}
            // updateIsBackImgEmpty={updateIsBackImgEmpty}
            isBackImgEmpty={isBackImgEmpty}
          >
            <s.TopButtonIcon>
              <AlignCenterHorizontal />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              좌우대칭
            </s.TopButtonLabel>
            </s.TopButton>
            <s.TopButton 
              onClick={reverseY}
              disabled={isBackImgEmpty}
              // updateIsBackImgEmpty={updateIsBackImgEmpty}
              isBackImgEmpty={isBackImgEmpty}
            >
            <s.TopButtonIcon>
              <AlignCenterVertical />
            </s.TopButtonIcon>
            <s.TopButtonLabel>
              상하대칭
            </s.TopButtonLabel>
          </s.TopButton>
          <s.TopButton
            id='grayscale'
            onClick={onClickGray}
            disabled={isBackImgEmpty}  
            // updateIsBackImgEmpty={updateIsBackImgEmpty}
            isBackImgEmpty={isBackImgEmpty}
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
                className='image-input'
                id='brightness-value'
                defaultValue={0}
                value={isBackImgEmpty ? 0 : brightnessValue}
                onChange={(value)=> {
                  applyFilter(
                    1,
                    new fabric.Image.filters.Brightness({
                      brightness: parseFloat(
                        value / 220
                      ),
                    })
                  );
                  applyFilterValue(
                    1,
                    'brightness',
                    parseFloat(
                      value / 220
                    )
                  );
                  setBrightnessValue(value);
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
            <s.FilterValue >{isBackImgEmpty ? 0 : brightnessValue}</s.FilterValue>
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
                className='image-input'
                id='saturation-value'
                defaultValue={0}
                value={isBackImgEmpty ? 0 : saturationValue}
                onChange={(value) => {
                  applyFilter(
                    2,
                    new fabric.Image.filters.Saturation({
                      saturation: parseFloat(
                        value / 110
                      ),
                    })
                  );
                  applyFilterValue(
                    2,
                    'saturation',
                    parseFloat(
                      value / 110
                    )
                  );
                  setSaturationValue(value);
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
            <s.FilterValue >{isBackImgEmpty ? 0 : saturationValue} </s.FilterValue>
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
                className='image-input'
                id='contrast-value'
                defaultValue={0}
                value={isBackImgEmpty ? 0 : contrastValue}
                onChange={(value) => {
                  applyFilter(
                    3,
                    new fabric.Image.filters.Contrast({
                      contrast: parseFloat(
                        value / 230
                      ),
                    })
                  );
                  applyFilterValue(
                    3,
                    'contrast',
                    parseFloat(value / 230)
                  );
                  setContrastValue(value);
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
            <s.FilterValue >{isBackImgEmpty ? 0 : contrastValue} </s.FilterValue>
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
                className='image-input'
                id='rotate-slider'
                defaultValue={0}
                disabled={isBackImgEmpty}
                onChange={(value) => {
                    const newAngle = parseInt(value);
                    setRotationValue(value);
                    image.set('angle', newAngle).setCoords();
                    canvas.requestRenderAll();
                }}
                value={isBackImgEmpty ? 0 : rotationValue}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={-180}
                max={180}
              />
            </s.FilterSlider>
            <s.FilterValue >{isBackImgEmpty ? 0 : rotationValue} </s.FilterValue>
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
                className='image-input'
                id='scale-slider'
                defaultValue={50}
                disabled={isBackImgEmpty}
                value = {isBackImgEmpty ? 50 : scaleValue}
                onChange={(value) => {
                  if(image.width> image.height){
                    const scaleFactor = value * newWidth/50; 
                    image.scaleToWidth(scaleFactor).setCoords();

                    canvas.requestRenderAll();

                    setScaleValue(value);
                  } else if (image.width< image.height){
                    const scaleFactor = value * newHeight/50; 
                    image.scaleToHeight(scaleFactor).setCoords();

                    canvas.requestRenderAll();

                    setScaleValue(value);
                  } else if (image.width === image.height){
                    const scaleFactor = value * newHeight/50; 
                    image.scaleToHeight(scaleFactor).setCoords();

                    canvas.requestRenderAll();

                    setScaleValue(value);
                  }
                }}
                handleStyle={handleStyle}
                trackStyle={trackStyle}
                railStyle={railStyle}
                min={1}
                max={100}
              />
            </s.FilterSlider>
            <s.FilterValue >{isBackImgEmpty ? 50 : scaleValue} </s.FilterValue>
          </s.Filter>
          <s.devider />
          <s.TopButtonsWrapper>
            <s.TopButton
              id='refresh'
              onClick={handleRefresh}
              disabled={isBackImgEmpty}
            >
              초기화
            </s.TopButton>
            <s.TopButton
              id='lock'
              onClick={lockImage}
              disabled={isBackImgEmpty}
            >
              {imageLock ? '잠금해제' : '잠금'}
            </s.TopButton>
          </s.TopButtonsWrapper>
        </s.FiltersContainer>

      </s.Wrapper>
      
    </>
  );
};

export default Image;