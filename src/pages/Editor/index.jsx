import React, { useState, useRef, useEffect } from 'react';
// import Konva from 'konva';
import { fabric } from 'fabric';
import * as s from './style';
import HeaderIsLogOffed from '../../components/Header/HeaderIsLogOffed';
import Header from '../../components/Header';

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
import editorpageAPI from '../../api/editorpage/editorpageAPI';

const Editor = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);

  const [image, setImage] = useState('');
  const [{imageLeft, imageTop}, setImagePosition] = useState({imageLeft: 170, imageTop: 246});

  const [ canvas, setCanvas ] = useState();
  const canvasRef = useRef(null);
  const canvasEl = canvasRef.current;

  // 필터 값 스테이트
  const [ brightness, setBrightness ] = useState(0); 
  const [ saturation, setSaturation ] = useState(0);
  const [ contrast, setContrast ] = useState(0);

  // 회전 값 스테이트
  // const [ rotationValue, setRotationValue ] = useState(0);

  // 스케일 값 스테이트
  // const [ scaleValue, setScaleValue ] = useState(1);
  // const [ isSclaeChanged, setIsScaleChanged ] = useState(false);

  // const [ horizontal, setHorizontal ] = useState(340/2);
  // const [ vertical, setVertical ] = useState(image.y/2);

  //캔버스 이미지 비워졌는지 여부
  const [isBackImgEmpty, setIsBackImgEmpty] = useState(true);


  // 대칭 여부 스테이트
  const [flipX, setFlipX] = useState(false); // 좌우반전
  const [flipY, setFlipY] = useState(false); // 상하반전

  // 흑백 여부 스테이트
  const [blackWhite, setBlackWhite] = useState(false);

  // const [imageFile, setImageFile] = useState(null); (=> 수정님 필요 없음 지워주세요!)

  /////// 툴 메뉴 스테이트 ////////
  const [tool, setTool] = useState(1); // 인덱스
  const [toolMenus, setToolMenus] = useState([
    // 툴 메뉴 목록
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
  const handleToolClick = (id) => {
    // 툴 메뉴 클릭 시 실행되는 함수
    setTool(id);
    setToolMenus((prevMenus) =>
      prevMenus.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    );
  };
  useEffect(() => {
    // 툴 메뉴 변경 시 실행되는 함수
    if (tool) {
      console.log(
        '툴메뉴 :',
        tool,
        toolMenus.find((item) => item.id === tool).name
      );
    }
  }, [tool, toolMenus]);

  ///////////////

  // 오브젝트 레이어 배열
  const objLayers = [];

  // 백그라운드 이미지 필터 목록
  const filters = [

  ];

  // 캔버스 생성
  const initCanvas = () => {
    const newCanvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true,
      width: 340,
      height: 492,
      backgroundColor: 'transparent',
    });
    
    console.log('캔버스 생성:', newCanvas);
    setCanvas(newCanvas);
  };

  // 페이지 처음 불러올(혹은 새로고침) 때 캔버스 초기화 함수 호출
  useEffect(() => {
    initCanvas();
  }, []);


  // 캔버스 초기화 함수
  const removeCanvas = () => {
    window.confirm('정말로 캔버스를 초기화하시겠습니까?');
    canvas.clear();
    initCanvas();
    setIsBackImgEmpty(true);
    console.log('캔버스 초기화');
  };

  // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
  const handleLoadFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
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
      const resultImage = reader.result;
        const loadImage = () => {
          new fabric.Image.fromURL(resultImage.toString(), (imgFile) => {
            
            imgFile.set({
              id: 'backImg',
              left: 340 / 2,
              top: 492 / 2,
              originX: 'center',
              originY: 'center',
              // rotation: rotationValue,
              evented: true,
              hoverCursor: 'default',
              selected: true,
              hasControls: false, // Optional: Disable resizing controls
              hasBorders: false,  // Optional: Disable borders

              //드래그 동작 구현
            });
              

            const imgWidth = imgFile.width;
            const imgHeight = imgFile.height;

            if (imgWidth > imgHeight) {
              imgFile.scaleToHeight(492);
            } else if (imgHeight > imgWidth) {
              imgFile.scaleToWidth(340);
            } else if (imgWidth === imgHeight) {
              imgFile.scaleToHeight(492);
            }

            if( image )
            {
              canvas.remove(image);
            }

            canvas.add(imgFile);
            setImage(imgFile);
          
            canvas.renderAll();

            
          });
        };
        loadImage();
      };
    };

    // 추가된 이미지 조회
    useEffect(() => {
      if (image) {
        console.log('추가된 이미지 :', image);
      }
    }, [image]);




    useEffect(() => {
      if (image) {
        (console.log('이미지 좌표 => ', '좌:', imageLeft, '우:', imageTop));
      }
    }, [image, imageLeft, imageTop]);


    useEffect(() => {
      if (canvas) {
        // object:moving 이벤트 리스너 등록
        canvas.on('object:moving', (e) => {
          const obj = e.target;
          const x = obj.left;
          //마우스 포인터를 따라 움직이는 이미지의 y좌표
          const y = obj.top;
          // 이미지의 가로가 세로보다 클 때
          if (obj.width > obj.height) {
            // 마우스 포인터를 따라 움직이는 이미지의 x좌표
            if (x > 340 + 340/2) {
              // 이미지의 x좌표를 캔버스의 가운데로 고정
              obj.set({
                left: 340 + 340/2,
                top: 492 / 2,
              });
            } else if (x < -340/2)  {
              obj.set({
                left: -340/2,
                top: 492 / 2,
              }); 
            }
            else {
              obj.set({
                left: x,
                top: 492 / 2,
              });
            }
          } else if ( obj.height > obj.width) {
            // 이미지의 세로가 가로보다 클 때
            if (y > 492 + 492/3) {
              obj.set({
                left: 340 / 2,
                top: 492 + 492/3,
              });
            } else if (y < -492/3) {
              obj.set({
                left: 340 / 2,
                top: -492/3,
              });
            } else {
              obj.set({
                left: 340 / 2,
                top: y,
              });
            }
          } else if (obj.width === obj.height) {
            // 이미지의 가로와 세로가 같을 때
            if (x > 340 + 340/2) {
              obj.set({
                left: 340 + 340/2,
              });
            } else if (x < -340/2) {
              obj.set({
                left: -340/2,
              });
            } else if (y > 492 + 492/3) {
              obj.set({
                top: 492 + 492/3,
              });
            } else if (y < -492/3) {
              obj.set({
                top: -492/3,
              });
            } else {
              obj.set({
                left: x,
                top: y,
              });
            }
          }
          // 이동 후 캔버스 렌더링
          
          canvas.renderAll();
        });

        canvas.on('object:modified', (e) => {
          const obj = e.target;
          setImagePosition({imageLeft: obj.left, imageTop: obj.top});
        });
      }
    }, [canvas]);
  
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
    const uri = canvas?.toDataURL();
    if (uri) {
      let convertedImage = dataURLtoFile(uri, 'konva');

      const formData = new FormData();
      console.log('File로 저장됨 : ', convertedImage);
      convertedImage && formData.append('image', convertedImage);

      //formdata에 잘 들어갔는지 확인하는 코드
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      editorpageAPI
        .postDesignedPhotoCard(formData)
        .then((data) => console.log(data));
      window.alert('성공적으로 저장되었습니다!');
    } else {
      window.alert('저장할 이미지가 없습니다.');
    }
  };

  return (
    <s.Wrapper>
      {isLogedIn ? <Header /> : <HeaderIsLogOffed />}
      <s.EditorWrapper>
        <s.LeftContainer>
          <s.TopMenuWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonLeft>
                <s.TopMenuButton
                  isActive={true}
                  onClick={handleLoadFile} // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
                >
                  <s.TopMenuButtonIcon isActive={true}>
                    <Load />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={true}>
                    불러오기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton
                  onClick={() => {
                    removeCanvas(canvas);
                    window.alert('캔버스가 초기화되었습니다!');
                  }}
                  isActive={!isBackImgEmpty}
                  disabled={isBackImgEmpty}
                >
                  <s.TopMenuButtonIcon isActive={!isBackImgEmpty}>
                    <Delete />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={!isBackImgEmpty}>
                    삭제하기
                  </s.TopMenuButtonLabel>
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
                  isActive={!isBackImgEmpty}
                  disabled={isBackImgEmpty}
                >
                  <s.TopMenuButtonIcon isActive={!isBackImgEmpty}>
                    <Save />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={!isBackImgEmpty}>
                    저장하기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
              </s.TopMenuButtonRight>
            </s.TopMenuGroupWrapper>
          </s.TopMenuWrapper>
          <s.CanvasSpaceWrapper>
            <s.CanvasWrapper ref={canvasRef}>
              <canvas id='canvas' />
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
              {toolMenus.map((item) => (
                <s.ToolLabel
                  key={item.id}
                  onClick={() => handleToolClick(item.id)}
                  isActive={item.isActive}
                >
                  <s.ToolLabelIcon isActive={item.isActive}>
                    {item.icon}
                  </s.ToolLabelIcon>
                  <s.ToolLabelText isActive={item.isActive}>
                    {item.name}
                  </s.ToolLabelText>
                </s.ToolLabel>
              ))}
            </s.ToolLabelWrapper>
            <s.ToolContentsWrapper>
              {tool === 1 && 
                <Image 
                  isBackImgEmpty={isBackImgEmpty}
                  setIsBackImgEmpty={setIsBackImgEmpty}
                  image={image} 
                  canvas={canvas}
                />
              }
              {tool === 2 && <Draw />}
              {tool === 3 && <Text />}
              {tool === 4 && <Sticker
                canvas={canvas}
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
