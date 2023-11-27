import React, { useState, useRef, useEffect } from 'react';
import Konva from 'konva';
import * as s from './style';
import HeaderIsLogOffed from '../../components/Header/HeaderIsLogOffed';

//아이콘
import Load from '../../assets/Load';
import Delete from '../../assets/Delete';
import Redo from '../../assets/Redo';
import Undo from '../../assets/Undo';
import Save from '../../assets/Save';
import ToBack from '../../assets/ToBack.svg';
import Backward from '../../assets/Backward.svg';
import Forward from '../../assets/Forward.svg';
import ToFront from '../../assets/ToFront.svg';
import FrameIcon from '../../assets/FrameIcon';
import TextIcon from '../../assets/TextIcon';
import ImageIcon from '../../assets/ImageIcon';
import DrawIcon from '../../assets/DrawIcon';
import StickerIcon from '../../assets/StickerIcon';
// import { Ellipse } from 'react-konva';

//툴
import Image from './Tools/Image';
import Draw from './Tools/Draw';
import Text from './Tools/Text';
import Sticker from './Tools/Sticker';
import Frame from './Tools/Frame';

const Editor = () => {
  // const [isLogedIn, setIsLogedIn] = useState();
  
  const [image, setImage] = useState('');

  const stageRef = useRef(null); // 캔버스 레퍼런스
  const backLayerRef = useRef(null); // 백그라운드 이미지용 레이어 레퍼런스
  // ***********레퍼런스 사용법***********
  // 현재 사용중인 캔버스/레이어를 불러올 때
  // -> const canvas = stageRef.current; / const layer = backLayerRef.current; 
  // 이런 식으로 정의 후 canvas.add 등에 사용
  // 업데이트는 아마(확실치 않지만) 위와 같이 정의 후 canvas.draw() 등으로 사용하면 될듯
  // *************** Konva js "draw() 메서드" 설명 : 출처 -> Chat GPT ********************
  // draw() 메서드는 KonvaJS에서 사용되는 메서드 중 하나로, 레이어의 캐시된 캔버스를 업데이트하는 데 사용됩니다.
  // 일반적으로 캔버스에 그림을 그릴 때마다 레이어를 다시 그리는 것은 비용이 많이 들기 때문에,
  // draw() 메서드는 변경 사항이 있을 때만 레이어를 업데이트하도록 도와줍니다.
  // 부가 설명 : draw 메서드에 draw()와 batchDraw()가 있는데 후자는 여러 객체를 한꺼번에 업데이트 할 때 사용됨

  // 캐시된 캔버스는 cache() 메서드를 사용하여 만들어집니다. 그런 다음 draw()를 호출하면 변경된 부분만 다시 렌더링되고, 전체 캔버스를 다시 그리는 것보다 효율적으로 동작합니다.
  // 간단하게 말하면 draw()는 레이어를 최신 데이터로 업데이트하는 메서드입니다.


  // 필터 값 스테이트
  const [ brightness, setBrightness ] = useState(0); 
  const [ saturation, setSaturation ] = useState(0);
  const [ contrast, setContrast ] = useState(0);

  // 회전 값 스테이트
  const [ rotationValue, setRotationValue ] = useState(0);

  // 스케일 값 스테이트
  const [ scaleValue, setScaleValue ] = useState(1);
  const [ isSclaeChanged, setIsScaleChanged ] = useState(false);

  // const [ horizontal, setHorizontal ] = useState(340/2);
  // const [ vertical, setVertical ] = useState(image.y/2);

  //캔버스 비워졌는지 여부
  const [ isBackImgLayerEmpty, setIsBackImgLayerEmpty ] = useState(true);

  // 필터 초기화 여부
  const [ resetFiltersValue , setResetFiltersValue] = useState(false);

  // 대칭 여부 스테이트 
  const [flipX, setFlipX] = useState(false); // 좌우반전
  const [flipY, setFlipY] = useState(false); // 상하반전

  // 흑백 여부 스테이트
  const [ blackWhite, setBlackWhite ] = useState(false);

  // const [imageFile, setImageFile] = useState(null); (=> 수정님 필요 없음 지워주세요!)


  /////// 툴 메뉴 스테이트 ////////
  const [tool, setTool] = useState(1); // 인덱스
  const [toolMenus, setToolMenus] = useState([ // 툴 메뉴 목록
    {
      id: 1,
      name: '이미지',
      icon: <ImageIcon />,
      isActive: true,
    },
    {
      id: 2,
      name: '그리기',
      icon: <DrawIcon />,
      isActive: false,
    },
    {
      id: 3,
      name: '텍스트',
      icon: <TextIcon />,
      isActive: false,
    },
    {
      id: 4,
      name: '스티커',
      icon: <StickerIcon />,
      isActive: false,
    },
    {
      id: 5,
      name: '프레임',
      icon: <FrameIcon />,
      isActive: false,
    },
  ]);
  const handleToolClick = (id) => { // 툴 메뉴 클릭 시 실행되는 함수
    setTool(id);
    setToolMenus((prevMenus) =>
      prevMenus.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    );
  };
  useEffect(() => {  // 툴 메뉴 변경 시 실행되는 함수
    if (tool) {
      console.log('툴메뉴 :', tool, toolMenus.find((item) => item.id === tool).name);
    }
  }, [tool, toolMenus]);

  ///////////////

  
  // 오브젝트 레이어 배열
  const objLayers = [];

  // 백그라운드 이미지 필터 목록
  const filters = [
    Konva.Filters.Brighten,
    Konva.Filters.HSV,
    Konva.Filters.Contrast,
  ];

  // 캔버스 생성
  const initStage = () => {
    const canvas = new Konva.Stage({
      container: 'canvas',
      id: 'canvas',
      ref: stageRef,
      width: 340,
      height: 492,
    });
    stageRef.current = canvas;
    console.log('캔버스 생성:', canvas);
    initBackImgLayer();
  };

  // 캔버스 제거
  const removeStage = (stage) => {
    if (stage) {
      window.confirm('캔버스를 초기화하시겠습니까?');
      stage.destroy();
    }
    initStage();
    setIsBackImgLayerEmpty(true);
    // 필터 및 효과 초기화
    setResetFiltersValue(true);
    setBlackWhite(false);
    setFlipX(false);
    setFlipY(false);
    setImage(null);
  };

  useEffect(() => {
    // 필터값 초기화
    if (resetFiltersValue) {
      setBrightness(0);
      setSaturation(0);
      setContrast(0);
      setRotationValue(0);
      setIsScaleChanged(false);
      // setHorizontal(340/2);

      console.log('필터 리셋 :', resetFiltersValue, brightness, saturation, contrast);
    }
  }, [resetFiltersValue]);

  useEffect(() => {
    console.log('백그라운드 이미지 레이어 비었음:', isBackImgLayerEmpty);
  }, [isBackImgLayerEmpty]);

  // 백그라운드 이미지용 레이어 생성(포토카드가 들어가는 레이어)
  const initBackImgLayer = () => {
    const canvas = stageRef.current;
    
    const backImgLayer = new Konva.Layer({
      id: 'backImgLayer',
      moveToBottom: true,
      ref: backLayerRef,
    });
    
    backLayerRef.current = backImgLayer;

    canvas.add(backImgLayer);

    console.log('이미지레이어 생성:', canvas.find('#backImgLayer'));
  };

  // 페이지 처음 불러올(혹은 새로고침) 때 캔버스 초기화 함수 호출
  useEffect(() => {
    initStage();
  }, []);


  //////////// 오브젝트 관리

  // const objLayer = new Konva.Layer({
  //   className: 'objLayer',
  //   width: 340,
  //   height: 492,

  // });

  // const createObjLayer = (img) => {
  //   const canvas = stageRef.current;
  //   canvas.add(objLayer);

  //   canvas.batchDraw();

  //   objLayers.push(objLayer);
  //   console.log(objLayers);
  //   objLayer.add(img);
  //   objLayer.batchDraw();
  // };

  /////////////////////////


  // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
  const handleLoadFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const canvas = stageRef.current;
      const file = e.target.files[0];
      console.log('파일 로드 :' + file.name);

      if (file && file.type.includes('image') && canvas) {
        // 이미지 로드 함수를 호출하여 이미지 전달
        handleImageLoad(file);
      } else {
        console.log('파일 로드 실패');
      }
    };
    input.click();
  };

  // 파일 불러와서 이미지 로드하는 함수
  const handleImageLoad = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // 원본 이미지
      const orgImg = new window.Image();
      // 이미지 파일 url을 이미지 객체에 주입
      orgImg.src = reader.result;

      orgImg.onload = () => {
        // 현재 캔버스와 레이어 가져오기
        // const canvas = stageRef.current;
        const backImgLayer = backLayerRef.current;

        // 기존 이미지 제거 및 필터와 효과 초기화
        backImgLayer.removeChildren();
        setResetFiltersValue(true);
        setBlackWhite(false);
        setFlipX(false);
        setFlipY(false);

        console.log('스케일 초기화:', isSclaeChanged);
        /////////////// 캔버스에 들어갈 이미지 사이즈 조정
        const canvasWidth = 340;
        const canvasHeight = 492;
        const imgWidth = orgImg.width;
        const imgHeight = orgImg.height;
        const maxWidth = canvasWidth;
        const maxHeight = canvasHeight;
        const aspectRatio = imgWidth / imgHeight;
        const x = canvasWidth/2;
        const y = canvasHeight/2;

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
        ////////////////////////////////////////

        // 사이즈 조정 후 이미지(실제 캔버스에 들어갈 이미지)
        const backImg = new Konva.Image({
          id: 'backImg',
          image: orgImg,
          x: x,
          y: y,
          rotation: rotationValue,
          width: newWidth,
          height: newHeight,
          draggable: true,
          dragBoundFunc: (pos) => {
            // 이미지의 가로가 세로보다 크거나 같을 때 -> 좌우로만 이동 가능
            if (orgImg.width > orgImg.height || orgImg.width === orgImg.height) {
              return {
                x: pos.x, // x 좌표는 변경 가능
                y: y, // y 좌표는 변경되지 않음
              };
            } else {
              // 이미지의 세로가 가로보다 클 때 -> 위치 이동 불가능
              return {
                x: x,
                y: y,
              };
            }
          },
        });
        
      // 편집 기준점을 이미지의 중앙으로 설정 (좌우 상하 반전을 위한 설정)
      backImg.offsetX(backImg.width() / 2);
      backImg.offsetY(backImg.height() / 2);

    
      // 이미지를 레이어에 추가
      backImgLayer.add(backImg);

      setIsBackImgLayerEmpty(false);

      
      // // 레이어 상태 업데이트
      // backImgLayer.batchDraw();

      // 이미지 스테이트 업데이트
      setImage(backImg);
      
      console.log('추가된 이미지 :', backImg);

      // 필터 적용
      applyFilters(backImg);
      // 레이어 상태 업데이트

      backImgLayer.batchDraw();
      };
      console.log('이미지 로드됨:', file);
    };
  };

  // 필터 적용 함수
  const applyFilters = (image) => {
    // const canvas = stageRef.current;
    // const backImgLayer = backLayerRef.current;

    const backImg = image;

    backImg.cache();
    backImg.filters(filters);
    backImg.brightness(brightness);
    backImg.saturation(saturation);
    backImg.contrast(contrast);

  };

  // 밝기, 채도, 명암 필터 적용 함수
  useEffect(() => {
    if (image) {

      image.cache();
      image.brightness(brightness);

      image.hue(0);
      image.saturation(saturation);
      image.value(0);

      image.contrast(contrast);

    }
  }, [image, brightness, saturation, contrast ,]);

  // 좌우반전 적용 함수
  useEffect(() => {
    if (image && flipX) {
      image.scaleX(-1);
    } else if (image && !flipX) {
      image.scaleX(1);
    }

  }, [image, flipX]);

  useEffect(() => {
    if (image && flipY) {
      image.scaleY(-1);
    } else if (image && !flipY) {
      image.scaleY(1);
    }

  }, [image, flipY]);

  // 흑백 필터 적용 함수
  useEffect(() => {
    if (image && blackWhite ) {
      image.cache();
      filters.push(Konva.Filters.Grayscale)
      image.filters(filters);
      image.draw();
    } else if (image && !blackWhite) {
      image.cache();
      filters.splice(Konva.Filters.Grayscale);
      image.filters(filters);
      image.draw();
    }
    
  }, [blackWhite]);

  // 회전 적용 함수
  useEffect(() => {
    if (image) {
      image.rotation(rotationValue);
    }
  }, [image, rotationValue]);

  // 스케일 적용 함수
  useEffect(() => {
    if (image && isSclaeChanged) {
      image.scale({ x: scaleValue, y: scaleValue});
    };
  }, [image, scaleValue]);

  // 좌우 이동 적용 함수
  // useEffect(() => {
  //   if (image) {
  //     image.x(horizontal);
  //   }
  // }, [image, horizontal]);

  //base64 -> File로 변환하는 함수
  const dataURLtoFile = (dataurl, fileName) => {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  //이미지 저장할 때
  const handleExport = () => {
    const uri = stageRef.current?.toDataURL();
    if (uri) {
      let convertedImage = dataURLtoFile(uri, 'konva');

      const formData = new FormData();
      console.log('File로 저장됨 : ', convertedImage);
      convertedImage && formData.append('file', convertedImage);

      //formdata에 잘 들어갔는지 확인하는 코드
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
    } else {
      window.alert('저장할 이미지가 없습니다.');
    }
  };
    

  return (
    <s.Wrapper>
      <HeaderIsLogOffed />
      <s.EditorWrapper>
        <s.LeftContainer>
          <s.TopMenuWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonLeft>
                <s.TopMenuButton
                  isActive={true}
                  onClick={handleLoadFile} // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
                >
                  <s.TopMenuButtonIcon
                    isActive={true}
                  >
                    <Load />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel 
                    isActive={true}
                  >
                    불러오기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton
                  onClick={() => {
                    removeStage(stageRef.current);
                  }}
                  isActive={!isBackImgLayerEmpty}
                  disabled={isBackImgLayerEmpty}
                >
                  <s.TopMenuButtonIcon
                    isActive={!isBackImgLayerEmpty}
                  >
                    <Delete />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel
                    isActive={!isBackImgLayerEmpty}
                  >삭제하기</s.TopMenuButtonLabel>
                </s.TopMenuButton>
              </s.TopMenuButtonLeft>
            </s.TopMenuGroupWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonRight>
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon>
                    <Undo />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel>뒤로</s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon>
                    <Redo />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel>앞으로</s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton
                  onClick={handleExport}
                  isActive={!isBackImgLayerEmpty}
                  disabled={isBackImgLayerEmpty}
                >
                  <s.TopMenuButtonIcon isActive={!isBackImgLayerEmpty}>
                    <Save />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={!isBackImgLayerEmpty}>
                    저장하기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
              </s.TopMenuButtonRight>
            </s.TopMenuGroupWrapper>
          </s.TopMenuWrapper>
          <s.CanvasSpaceWrapper>
            <s.CanvasWrapper id='canvas' />
            <s.LayerButtonWrapper>
              <s.LayerButton>
                <s.LayerButtonIcon src={ToBack} />
                <s.LayerButtonLabel>맨 뒤로</s.LayerButtonLabel>
              </s.LayerButton>
              <s.LayerButton>
                <s.LayerButtonIcon src={Backward} />
                <s.LayerButtonLabel>뒤로</s.LayerButtonLabel>
              </s.LayerButton>
              <s.LayerButton>
                <s.LayerButtonLabel>앞으로</s.LayerButtonLabel>
                <s.LayerButtonIcon src={Forward} />
              </s.LayerButton>
              <s.LayerButton>
                <s.LayerButtonLabel>맨 앞으로</s.LayerButtonLabel>
                <s.LayerButtonIcon src={ToFront} />
              </s.LayerButton>
            </s.LayerButtonWrapper>
            <s.SelectedObjects>선택된 오브젝트: 0/0</s.SelectedObjects>
          </s.CanvasSpaceWrapper>
        </s.LeftContainer>

        <s.RightContainer>
          <s.ToolContainer>
            <s.ToolLabelWrapper>
              { toolMenus.map((item) => (
                <s.ToolLabel
                  key={item.id}
                  onClick={() => handleToolClick(item.id)}
                  isActive={item.isActive}
                >
                  <s.ToolLabelIcon isActive={item.isActive}>
                    {item.icon}
                  </s.ToolLabelIcon>
                  <s.ToolLabelText isActive={item.isActive} >
                    {item.name}
                  </s.ToolLabelText>
                </s.ToolLabel>
              ))}
            </s.ToolLabelWrapper>
            <s.ToolContentsWrapper>
              {tool === 1 && 
                <Image 
                  stageRef={stageRef} 
                  backLayerRef={backLayerRef}
                  isBackImgLayerEmpty={isBackImgLayerEmpty}
                  image={image} 
                  // 필터값
                  setBrightness={setBrightness} 
                  setSaturation={setSaturation}
                  setContrast={setContrast}
                  brightness={brightness}
                  saturation={saturation}
                  contrast={contrast}
                  resetFiltersValue={resetFiltersValue}
                  setResetFiltersValue={setResetFiltersValue}
                  blackWhite={blackWhite}
                  setBlackWhite={setBlackWhite}
                  // 반전
                  flipX={flipX}
                  flipY={flipY}
                  setFlipX={setFlipX}
                  setFlipY={setFlipY}
                  // 회전
                  setRotationValue={setRotationValue}
                  rotationValue={rotationValue}
                  // 스케일
                  scaleValue={scaleValue}
                  setScaleValue={setScaleValue}
                  setIsScaleChanged={setIsScaleChanged}
                  isSclaeChanged={isSclaeChanged}
                  // // 좌우 이동
                  // horizontal={horizontal}
                  // setHorizontal={setHorizontal}
                />
              }
              {tool === 2 && <Draw />}
              {tool === 3 && <Text />}
              {tool === 4 && <Sticker
                stageRef={stageRef}
                objLayers={objLayers}
                image={image}

                />
              }
              {tool === 5 && <Frame />}
            </s.ToolContentsWrapper>
          </s.ToolContainer>
        </s.RightContainer>
      </s.EditorWrapper>
    </s.Wrapper>
  );
};

export default Editor;
