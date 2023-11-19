import * as s from './style';
import HeaderIsLogOffed from '../../components/Header/HeaderIsLogOffed';
import { useState } from 'react';

//캔버스 라이브러리
import Konva from 'konva';
import useImage from 'use-image';
import { Stage, Layer, Image, Rect, Text } from 'react-konva';
import { useEffect, useRef } from 'react';
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
import { InActivatedCollectionCardImage } from '../MyPage/Collections/style';

const Editor2 = () => {
  const [isLogedIn, setIsLogedIn] = useState();
  // const [image] = useImage();
  const [imageUrl, setImageUrl] = useState('');

  const stageRef = useRef(null);
  const fileInputRef = useRef(null);
  // const store = createStore({
  //   width: 340,
  //   height: 492,
  //   showCredit: false,
  // });
  // const page = store.addPage({
  //   width: 340,
  //   height: 492,

  // });

  // page.setSize({
  //   width: 340,
  //   height: 492,
  //   useMagic: true,
  // });

  // page.addElement({
  //   x: 50,
  //   y: 50,
  //   type: 'text',
  //   fill: 'black',
  //   text: 'hello',
  // });

  let imageObj = new Image();
  const handleChangedFile = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      const resultImage = reader.result;
      setImageUrl(resultImage.toString());
      console.log(files[0]);

      imageObj.onload = () => {
        new Konva.Image({
          image: files[0],
        });
      };
      imageObj.src = imageUrl;
      // imageObj.src =
      // Konva.Image.fromURL(resultImage.toString(), (image) => {
      //   console.log(image);
      //   layer.add(image);
      //   layer.draw();
      // });
    };
    // };
  };

  useEffect(() => {
    const stage = new Konva.Stage({
      container: 'canvas-container', // 캔버스가 그려질 컨테이너의 ID
      width: 340,
      height: 492,
    });
    const layer = new Konva.Layer();
    stage.add(layer);

    // const image = new Konva.Image({
    //   image: imageUrl,
    // });
    // layer.add(image);
    // 캔버스에 사각형 추가
    // const rect = new Konva.Rect({
    //   width: 100,
    //   height: 50,
    //   fill: 'red',
    //   draggable: true,
    // });
    // layer.add(rect);
    // 캔버스 업데이트
    layer.add(imageObj);
    layer.draw();

    // if (imageUrl) {
    //   layer.add(image);
    //   layer.draw();
    // }
    // stageRef에 현재 stage를 저장
    stageRef.current = stage;

    // 캔버스 초기화
  }, []);

  useEffect(() => {}, []);

  return (
    <s.Wrapper>
      <HeaderIsLogOffed />
      <s.EditorWrapper>
        <s.LeftContainer>
          <s.TopMenuWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonLeft>
                <s.TopMenuButton>
                  <s.ImageLoadButtonLabel htmlFor='file'>
                    <s.TopMenuButtonIcon>
                      <Load />
                    </s.TopMenuButtonIcon>
                    <s.TopMenuButtonLabel>불러오기</s.TopMenuButtonLabel>
                  </s.ImageLoadButtonLabel>
                  <s.Input
                    type='file'
                    id='file'
                    onChange={handleChangedFile}
                    ref={fileInputRef}
                  />
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
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon>
                    <Save />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel>저장하기</s.TopMenuButtonLabel>
                </s.TopMenuButton>
              </s.TopMenuButtonRight>
            </s.TopMenuGroupWrapper>
          </s.TopMenuWrapper>
          <s.CanvasSpaceWrapper>
            <s.CanvasWrapper id='canvas-container'>
              {/* <Stage width={340} height={492}>
                <Layer>{imageUrl && <Image image={imageUrl} />}</Layer>
              </Stage> */}
            </s.CanvasWrapper>
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
              <s.ToolLabel>
                <s.ToolLabelIcon>
                  <ImageIcon />
                </s.ToolLabelIcon>
                <s.ToolLabelText>이미지</s.ToolLabelText>
              </s.ToolLabel>
              <s.ToolLabel>
                <s.ToolLabelIcon>
                  <DrawIcon />
                </s.ToolLabelIcon>
                <s.ToolLabelText>그리기</s.ToolLabelText>
              </s.ToolLabel>
              <s.ToolLabel>
                <s.ToolLabelIcon>
                  <TextIcon />
                </s.ToolLabelIcon>
                <s.ToolLabelText>텍스트</s.ToolLabelText>
              </s.ToolLabel>
              <s.ToolLabel>
                <s.ToolLabelIcon>
                  <StickerIcon />
                </s.ToolLabelIcon>
                <s.ToolLabelText>스티커</s.ToolLabelText>
              </s.ToolLabel>
              <s.ToolLabel>
                <s.ToolLabelIcon>
                  <FrameIcon />
                </s.ToolLabelIcon>
                <s.ToolLabelText>프레임</s.ToolLabelText>
              </s.ToolLabel>
            </s.ToolLabelWrapper>
          </s.ToolContainer>
        </s.RightContainer>
      </s.EditorWrapper>
    </s.Wrapper>
  );
};

export default Editor2;
