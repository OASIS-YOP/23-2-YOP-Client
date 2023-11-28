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

import ContextMenu from './ContextMenu';

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

  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });

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
    setImage(null);
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
            setIsBackImgEmpty(false);
          
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

        console.log('캔버스 :', canvas );
      }
    }, [canvas]);

     ////////////////컨텍스트 메뉴 ////////////////////

  const handleContextMenu = (e) => {
    e.preventDefault();
    // 마우스 우클릭 시 마우스 위치에 컨텍스트 메뉴를 표시하기 위한 정보 설정
    setContextMenuPos({ x: e.clientX, y: e.clientY });
    // 컨텍스트 메뉴를 표시
    setContextMenuVisible(true);
  };

  // 컨텍스트 메뉴를 닫는 함수
  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };

  // // 복사한 객체를 저장하는 state
  // const [copiedObject, setCopiedObject] = useState(null); // 부모 컴포넌트에서 관리
  // // console.log(copiedObject);
  // // console.log('copiedObject');

  // // 복사한 객체를 저장하는 함수
  // const handleCopyObject = (object) => {
  //   setCopiedObject(object);
  //   console.log('object is copied', object);
  // };

  // // 붙여넣기 함수
  // const handlePasteObject = (x, y) => {
  //   if (copiedObject !== null) {
  //     if (copiedObject.type !== 'activeSelection') {
  //       // 선택된 객체가 단일 객체인 경우
  //       if (copiedObject.type === 'image') {
  //         fabric.Image.fromObject(copiedObject, function (img) {
  //           img.set({
  //             left: x / 3 ,
  //             top: y / 3 ,

  //             evented: true,
  //             svgViewportTransformation: true,
  //           });
  //           canvas.add(img);
  //           canvas.renderAll();
  //         });
  //       } else if (copiedObject.type === 'i-text') {
  //         fabric.IText.fromObject(copiedObject, function (text) {
  //           text.set({
  //             left: x / 3,
  //             top: y / 3,
  //             evented: true,
  //             svgViewportTransformation: true,
  //           });
  //           canvas.add(text);
  //           canvas.renderAll();
  //         });
  //       }
  //       console.log('object is pasted', copiedObject);
  //     } else if (copiedObject.type === 'activeSelection') {
  //       // 선택된 객체가 다중 객체인 경우
  //       for (let i = 0; i < copiedObject.objects.length; i++) {
  //         {
  //           if (copiedObject.objects[i].type === 'image') {
  //             fabric.Image.fromObject(copiedObject.objects[i], function (img) {
  //               img.set({
  //                 left: x / 3,
  //                 top: y / 3 ,
  //                 evented: true,
  //                 svgViewportTransformation: true,
  //               });
  //               canvas.add(img);
  //               canvas.renderAll();
  //             });
  //           // } else if (copiedObject.objects[i].type === 'i-text') {
  //           //   fabric.IText.fromObject(copiedObject.objects[i], function (text) {
  //           //     text.set({
  //           //       left: x / 3,
  //           //       top: y / 3,
  //           //       evented: true,
  //           //       svgViewportTransformation: true,
  //           //     });
  //           //     canvas.add(text);
  //           //     canvas.renderAll();
  //           //   });
  //           }
  //         }
  //       }
  //     }
  //     console.log('objects is pasted', copiedObject);
  //   } else {
  //     console.log('no object is copied');
  //   }
  // };

  // // 삭제 함수 1
  // const removeObjects = (object) => {
  //   if (object) {
  //     if (object.type === 'image' || object.type === 'i-text') {
  //       // 선택된 객체가 단일 객체인 경우
  //       const onlyObjects = canvas.getObjects().filter((obj) => {
  //         return obj.id !== 'backImg';
  //       });
  //       canvas.remove(onlyObjects);
  //       canvas.renderAll();
  //       console.log(canvas.getObjects());
  //       console.log('object is deleted', object);
  //     } else if (object.type === 'activeSelection') {
  //       const onlyObjects = canvas.getObjects().filter((obj) => {
  //         return obj.id !== 'backImg';
  //       });
  //       canvas.remove(onlyObjects);
  //       // 선택된 객체가 다중 객체인 경우
  //       canvas.renderAll();
  //     } else {
  //       console.log('no object is selected');
  //     }
  //   }
  // };

  // // 삭제 함수 2
  // const handleDeleteObject = (object) => {
  //   // console.log(object);
  //   removeObjects(object);
  // };

  // // 잘라내기 함수
  // const handleCutObject = (object) => {
  //   setCopiedObject(object);
  //   removeObjects(object);
  //   console.log('object is cut', object);
  //   canvas.renderAll();
  // };

  ///////////////////////////////////////////////



    
  
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
            <s.CanvasWrapper
              onContextMenu={handleContextMenu} // 컨텍스트 메뉴 표시 이벤트
              onClick={closeContextMenu} // 컨텍스트 메뉴 영역 외 클릭 시 컨텍스트 메뉴 닫기
              ref={canvasRef}
            >
              <canvas id='canvas' />
              {isContextMenuVisible && (
                  <ContextMenu
                    canvas={canvas}
                    x={contextMenuPos.x} // 컨텍스트 메뉴 표시 위치 x
                    y={contextMenuPos.y} // 컨텍스트 메뉴 표시 위치 y
                    onClose={closeContextMenu} // 컨텍스트 메뉴 닫기 이벤트
                    // onCopy={handleCopyObject} // 복사 이벤트
                    // onPaste={handlePasteObject} // 붙여넣기 이벤트
                    // onCut={handleCutObject} // 잘라내기 이벤트
                    // onDelete={handleDeleteObject} // 삭제 이벤트
                  />
                )}
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
