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
  const stageRef = useRef(null);

  const [ brightness, setBrightness ] = useState(0); 
  const [ saturation, setSaturation ] = useState(0);
  const [ contrast, setContrast ] = useState(0);

  //캔버스 비워졌는지 여부
  const [ isDestroyed, setIsDestroyed ] = useState(true);

  // 필터 초기화 여부
  const [ resetFiltersValue , setResetFiltersValue] = useState(false);

  // 좌우반전 여부 
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  const [ blackWhite, setBlackWhite ] = useState(false);

  // const [imageFile, setImageFile] = useState(null);

  // 백그라운드 이미지 필터 목록
  const filters = [
    Konva.Filters.Brighten,
    Konva.Filters.HSV,
    Konva.Filters.Contrast,
  ];

  // 오브젝트 레이어 배열
  const objLayers = [{}];

  // 캔버스 유무 확인 및 최신화
  const canvas = stageRef.current;

  // 백그라운드 이미지용 레이어 유무 확인
  const isbackImgLayer = stageRef.current?.find('#backImgLayer');

  // 백그라운드 이미지용 레이어 생성
  const backImgLayer = new Konva.Layer({
    id: 'backImgLayer',
    moveToBottom: true,
  });
  
  // 캔버스 생성
  const initStage = () => {
    const canvas = new Konva.Stage({
      container: 'canvas',
      id: 'canvas',
      width: 340,
      height: 492,
    });
    canvas.add(backImgLayer);
    stageRef.current = canvas;

    console.log('캔버스 초기화됨:', canvas.attrs.id);
    console.log('이미지레이어 생성:', backImgLayer.attrs.id)
    console.log(canvas.find('#backImgLayer'));
  };

  // 페이지 처음 불러올(혹은 새로고침) 때 캔버스 초기화 함수 호출
  useEffect(() => {
    initStage();
  }, []);


  //////////// 오브젝트 관리

  const objLayer = new Konva.Layer({
    className: 'objLayer',
  });

  const createObjLayer = () => {
    objLayers.push(objLayer);
    console.log(objLayers);
  };

  /////////////////////////

  // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
  const handleLoadFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      console.log('파일 로드 :' + file.name);

      if (file && file.type.includes('image') && canvas && isbackImgLayer ) {
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
        // 캔버스 없으면 캔버스와 레이어 생성
        if (!canvas) {
          initStage();
        }

        // 기존 이미지가 있으면 삭제
        if ( canvas.find('#orgImg') ) {
          backImgLayer.removeChildren('#orgImg');
          console.log('기존 이미지를 지웠습니다.');
        } else {
            console.log('기존 이미지를 지워주세요');
        }

        /////////////// 캔버스에 들어갈 이미지 사이즈 조정
        const canvasWidth = 340;
        const canvasHeight = 492;

        const imgWidth = orgImg.width;
        const imgHeight = orgImg.height;

        const maxWidth = canvas;
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

        const x = canvasWidth/2;
        const y = canvasHeight/2;

        ////////////////////////////////////////

        // 사이즈 조정 후 이미지(실제 캔버스에 들어갈 이미지)
        const backImg = new Konva.Image({
          id: 'backImg',
          image: orgImg,
          x: x,
          y: y,
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

      backImg.draw();
      backImgLayer.batchDraw();

      setImage(backImg);
      

      backImg.cache();
      backImg.filters(filters);
      backImg.brightness(brightness);
      backImg.saturation(saturation);
      backImg.contrast(contrast);
  
      };
      console.log('Image Object:', image);
      console.log('이미지 로드됨:', file);
      console.log(stageRef.current)
    };
  };



  // 밝기, 채도, 명암 필터 적용 함수
  useEffect(() => {
    if (image) {
      setResetFiltersValue(false);
      image.brightness(brightness);

      image.hue(0);
      image.saturation(saturation);
      image.value(0);

      image.contrast(contrast);

    }
  }, [image, brightness, saturation, contrast , flipX]);

  // 좌우반전 적용 함수
  useEffect(() => {
    if (image && flipX) {
      image.scaleX(-image.scaleX());
    } else if (image && !flipX) {
      image.scaleX(image.scaleX());
    }

  }, [image, flipX]);

  useEffect(() => {
    if (image && flipY) {
      image.scaleY(-image.scaleY());
    } else if (image && !flipY) {
      image.scaleY(image.scaleY());
    }

  }, [image, flipY]);

  // 흑백 필터 적용 함수
  useEffect(() => {
    if (image && blackWhite ) {
      image.cache();
      image.filters([Konva.Filters.Grayscale, Konva.Filters.Brighten, Konva.Filters.HSV, Konva.Filters.Contrast,]);
      image.draw();
    } else if (image && !blackWhite) {
      image.cache();
      image.filters([Konva.Filters.Brighten, Konva.Filters.HSV, Konva.Filters.Contrast,]);
      image.draw();
    }
  }, [image, blackWhite]);

  // 이미지 캔버스에 추가하는 함수
  useEffect((resetFiltersValue) => {
    if (image && stageRef.current) {
      const stage = stageRef.current;
      const layer = new Konva.Layer();
      stage.add(layer);

      layer.add(image);
      setIsDestroyed(false);

      layer.draw();

      console.log(resetFiltersValue);
      console.log(brightness, saturation, contrast)
      
      setBrightness(0);
      setSaturation(0);
      setContrast(0);

      layer.batchDraw();
    }
  }, [image]);
 
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

  const [toolMenus, setToolMenus] = useState([
    {
      id: 1,
      name: '이미지',
      icon: <ImageIcon />,
      isActive: true,
      contents: <Image 
        stageRef={stageRef} 
        image={image} 
        setBrightness={setBrightness} 
        setSaturation={setSaturation}
        setContrast={setContrast}
        brightness={brightness}
        saturation={saturation}
        contrast={contrast}
        resetFiltersValue={resetFiltersValue}
        setResetFiltersValue={setResetFiltersValue}
        flipX={flipX}
        flipY={flipY}
        setFlipX={setFlipX}
        setFlipY={setFlipY}
        blackWhite={blackWhite}
        setBlackWhite={setBlackWhite}
      />,
    },
    {
      id: 2,
      name: '그리기',
      icon: <DrawIcon />,
      isActive: false,
      contents: <Draw />,
    },
    {
      id: 3,
      name: '텍스트',
      icon: <TextIcon />,
      isActive: false,
      contents: <Text />,
    },
    {
      id: 4,
      name: '스티커',
      icon: <StickerIcon />,
      isActive: false,
      contents: <Sticker />,
    },
    {
      id: 5,
      name: '프레임',
      icon: <FrameIcon />,
      isActive: false,
      contents: <Frame />,
    },
  ]);

  const [tool, setTool] = useState(1);

  const handleToolClick = (id) => {
    setTool(id);
    setToolMenus((prevMenus) =>
      prevMenus.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    );
  };

  useEffect(() => {
    if (tool) {
      console.log(tool);
    }
  }, [tool]);

  const removeStage = (stage) => {
    if (stage) {
      // Stage 제거
      stage.destroy();
    }
    setIsDestroyed(true);
  };

    

  return (
    <s.Wrapper>
      <HeaderIsLogOffed />
      <s.EditorWrapper>
        <s.LeftContainer>
          <s.TopMenuWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonLeft>
                <s.TopMenuButton isActive={true} onClick={handleLoadFile}>
                  <s.TopMenuButtonIcon isActive={true}>
                    <Load />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={true}>
                    불러오기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton
                  onClick={() => {
                    removeStage(stageRef.current);
                    initStage();
                  }}
                  isActive={!isDestroyed}
                >
                  <s.TopMenuButtonIcon
                    isActive={!isDestroyed}
                  >
                    <Delete />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel
                    isActive={!isDestroyed}
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
                <s.TopMenuButton isActive={!isDestroyed} onClick={handleExport}>
                  <s.TopMenuButtonIcon isActive={!isDestroyed}>
                    <Save />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={!isDestroyed}>
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
                {toolMenus.find((item) => item.id === tool)?.contents}
            </s.ToolContentsWrapper>
          </s.ToolContainer>
        </s.RightContainer>
      </s.EditorWrapper>
    </s.Wrapper>
  );
};

export default Editor;
