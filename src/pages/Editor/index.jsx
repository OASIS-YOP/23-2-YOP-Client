import * as s from './style';
import HeaderIsLogOffed from '../../components/Header/HeaderIsLogOffed';
import { useState, useRef, useEffect } from 'react';

// //캔버스 라이브러리
import Konva from 'konva';
// import { Stage, Layer, Rect, Text, Image } from 'react-konva';
// import { createStore } from 'polotno/model/store';
// import { Workspace } from 'polotno/canvas/workspace';

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

  const [imageFile, setImageFile] = useState(null);

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

        const x = (stageWidth - newWidth) / 2;
        const y = (stageHeight - newHeight) / 2;

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

        setImage(resizedImage);
      };
      console.log('이미지 로드됨:', file);
    };
  };

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

  // 이미지 캔버스에 추가하는 함수
  useEffect(() => {
    if (image) {
      const stage = new Konva.Stage({
        container: 'canvas', // 캔버스가 그려질 컨테이너의 ID
        width: 340,
        height: 492,
      });

      const layer = new Konva.Layer();
      stage.add(layer);

      layer.add(image);

      layer.draw();

      stageRef.current = stage;
    }
  }, [image]);


  const [toolMenus, setToolMenus] = useState([
    {
      id: 1,
      name: '이미지',
      icon: <ImageIcon />,
      isActive: true,
      contents: <Image />,
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
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon>
                    <Delete />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel>삭제하기</s.TopMenuButtonLabel>
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
                <s.TopMenuButton isActive={true} onClick={handleExport}>
                  <s.TopMenuButtonIcon isActive={true}>
                    <Save />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={true}>
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
