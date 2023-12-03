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
import { Ellipse } from 'react-konva';

//툴
import Image from './Tools/Image';
import Draw from './Tools/Draw';
import Text from './Tools/Text';
import Sticker from './Tools/Sticker';
import Frame from './Tools/Frame';

const Editor = () => {
  const [isLogedIn, setIsLogedIn] = useState();
  
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

  const [imageFile, setImageFile] = useState(null);

  const initializeStage = () => {
    const stage = new Konva.Stage({
      container: 'canvas',
      width: 340,
      height: 492,
    });

    const layer = new Konva.Layer();
    stage.add(layer);

    stageRef.current = stage;
  };

  // 캔버스 초기화 함수 호출
  useEffect(() => {
    initializeStage();
  }, []);


  // 불러오기 버튼 눌렀을 때 실행되는 함수
  const handleLoadImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // 이미지 로드 함수를 호출하여 이미지 전달
        handleImageLoad(file);
        console.log(e.target.files);
      }
    };
    input.click();
  };

  
  
  
  // 파일을 불러와서 이미지 추가하는 함수
  const handleImageLoad = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        if (!stageRef.current) {
          initializeStage();
        }
  
        const stage = stageRef.current;
        const layer = new Konva.Layer();
        if ( stage.find('#backgroundImage') ) {
        stage.removeChildren('#backgroundImage');} else {
        stage.add(layer);
        }
        const stageWidth = 340;
        const stageHeight = 492;

        const imgWidth = img.width;
        const imgHeight = img.height;

        const maxWidth = 340;
        const maxHeight = 492;

        const aspectRatio = imgWidth / imgHeight;

        let newWidth = imgWidth;
        let newHeight = imgHeight;
        if (imgWidth > imgHeight) {
          newHeight = maxHeight;
          newWidth = newHeight * aspectRatio;
          // newHeight = newWidth / aspectRatio;
        }
        if (imgHeight > imgWidth) {
          newWidth = maxWidth;
          newHeight = newWidth / aspectRatio;
        }
        if (imgWidth === imgHeight) {
          newHeight = maxHeight;
          newWidth = newHeight * aspectRatio;
        }

        const x = stageWidth/2;
        const y = stageHeight/2;

        const resizedImage = new Konva.Image({
          id: 'backgroundImage',
          image: img,
          x: x,
          y: y,
          width: newWidth,
          height: newHeight,
          draggable: true,
          dragBoundFunc: (pos) => {
            if (img.width > img.height || img.width === img.height) {
              return {
                x: pos.x, // x 좌표는 변경 가능
                y: y, // y 좌표는 변경되지 않음
              };
            } else {
              return {
                x: x,
                y: y,
              };
            }
          },
        });
        
      layer.add(resizedImage);

      resizedImage.offsetX(resizedImage.width() / 2);
      resizedImage.offsetY(resizedImage.height() / 2);

      resizedImage.cache();
      resizedImage.filters([
        Konva.Filters.Brighten, Konva.Filters.HSV, Konva.Filters.Contrast,
      ]);
      resizedImage.brightness(brightness);
      resizedImage.saturation(saturation);
      resizedImage.contrast(contrast);
      resizedImage.draw();
      layer.batchDraw();
      setImage(resizedImage);
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
                <s.TopMenuButton isActive={true} onClick={handleLoadImage}>
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
                    initializeStage();
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