import React, { useState, useRef, useEffect } from 'react';
// import Konva from 'konva';
import { fabric } from 'fabric';
import * as s from './style';
import HeaderIsLogOffed from '../../components/Header/HeaderIsLogOffed';
import Header from '../../components/Header';
import Modal from 'react-modal';

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

//툴
import Image from './Tools/Image';
import Draw from './Tools/Draw';
import Text from './Tools/Text';
import Sticker from './Tools/Sticker';
import Frame from './Tools/Frame';
import editorpageAPI from '../../api/editorpage/editorpageAPI';

import ContextMenu from './ContextMenu';
import EditorUploadModal from '../../components/EditorUploadModal';

const Editor = () => {
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);

  // 로그인 여부
  const [isLogedIn, setIsLogedIn] = useState(true);

  // 캔버스 스테이트
  const [canvas, setCanvas] = useState();
  const canvasRef = useRef(null);

  // 백그라운드 이미지 스테이트
  const [image, setImage] = useState('');
  const [{ imageLeft, imageTop }, setImagePosition] = useState({
    imageLeft: 170,
    imageTop: 246,
  });
  // 백그라운드 이미지 비워졌는지 여부
  const [isBackImgEmpty, setIsBackImgEmpty] = useState(true);
  // 이미지 이동 잠금 여부
  const [imageLock, setImageLock] = useState(false);

  // 오브젝트 스테이트
  // 캔버스에 추가된 총 오브젝트
  const [objects, setObjects] = useState([]);
  // 선택된 오브젝트
  const [selectedObject, setSelectedObject] = useState(null);

  // 컨텍스트 메뉴 스테이트
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });

  /////// 툴 메뉴 관리 ////////
  // 인덱스 스테이트
  const [tool, setTool] = useState(1);
  // 툴 메뉴 목록
  const [toolMenus, setToolMenus] = useState([
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

  //////////////////////////////////////////
  //도안 불러오기 모달 스타일

  const EditorUploadModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: 999,
    },
    content: {
      background: 'white',
      overflow: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '20px',
      outline: 'none',
      zIndex: 10,
    },
  };

  const onClickUploadModal = () => {
    setIsOpenUploadModal((prev) => !prev);
  };

  //////////////////////////////////////////

  // 툴 메뉴 클릭 시 실행되는 함수

  const handleToolClick = (id) => {
    setTool(id);
    setToolMenus((prevMenus) =>
      prevMenus.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    );
  };
  // 툴 메뉴 변경 시 실행되는 함수
  useEffect(() => {
    if (tool) {
      console.log(
        '툴메뉴 :',
        tool,
        toolMenus.find((item) => item.id === tool).name
      );
    }
  }, [tool, toolMenus]);

  // 오브젝트 트랜스포머 스타일 설정
  fabric.Object.prototype.set({
    transparentCorners: 'false',
    borderColor: 'lightgrey', //컨트롤 박스 색깔
    cornerColor: 'grey',
    cornerStyle: 'circle',
    cornerSize: 9.3,
  });

  ////// 캔버스 관리 ///////
  // 캔버스 생성
  const initCanvas = () => {
    const newCanvas = new fabric.Canvas('canvas', {
      preserveObjectStacking: true,
      width: 340,
      height: 492,
      backgroundColor: 'transparent',
    });
    console.log('캔버스 처음 생성됨:', newCanvas);
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

  // 추가된 이미지 조회
  useEffect(() => {
    if (image) {
      console.log('추가된 이미지 :', image);
    }
  }, [image]);

  //이미지 잠금
  const lockImage = () => {
    setImageLock((prev) => !prev);
    image.set({
      evented: imageLock,
      selectable: imageLock,
    });
    canvas.renderAll();
  };

  /////// 이미지 이동 관리 ////////
  // 이미지 좌표 조회
  // useEffect(() => {
  //   if (image) {
  //     (console.log('이미지 좌표 => ', '좌:', imageLeft, '우:', imageTop));
  //   }
  // }, [image, imageLeft, imageTop]);
  // 이미지 이동 이벤트 리스너 등록
  useEffect(() => {
    if (canvas) {
      // object:moving 이벤트 리스너 등록
      canvas.on('object:moving', (e) => {
        const obj = e.target;
        if (obj.id === 'backImg') {
          const x = obj.left;
          //마우스 포인터를 따라 움직이는 이미지의 y좌표
          const y = obj.top;
          // 이미지의 가로가 세로보다 클 때
          if (obj.width > obj.height) {
            // 마우스 포인터를 따라 움직이는 이미지의 x좌표
            if (x > 340 + 340 / 2) {
              // 이미지의 x좌표를 캔버스의 가운데로 고정
              obj.set({
                left: 340 + 340 / 2,
                top: 492 / 2,
              });
            } else if (x < -340 / 2) {
              obj.set({
                left: -340 / 2,
                top: 492 / 2,
              });
            } else {
              obj.set({
                left: x,
                top: 492 / 2,
              });
            }
          } else if (obj.height > obj.width) {
            // 이미지의 세로가 가로보다 클 때
            if (y > 492 + 492 / 3) {
              obj.set({
                left: 340 / 2,
                top: 492 + 492 / 3,
              });
            } else if (y < -492 / 3) {
              obj.set({
                left: 340 / 2,
                top: -492 / 3,
              });
            } else {
              obj.set({
                left: 340 / 2,
                top: y,
              });
            }
          } else if (obj.width === obj.height) {
            // 이미지의 가로와 세로가 같을 때
            if (x > 340 + 340 / 2) {
              obj.set({
                left: 340 + 340 / 2,
              });
            } else if (x < -340 / 2) {
              obj.set({
                left: -340 / 2,
              });
            } else if (y > 492 + 492 / 3) {
              obj.set({
                top: 492 + 492 / 3,
              });
            } else if (y < -492 / 3) {
              obj.set({
                top: -492 / 3,
              });
            } else {
              obj.set({
                left: x,
                top: y,
              });
            }
          }
        }
        // 이동 후 캔버스 렌더링

        canvas.renderAll();
      });

      canvas.on('object:modified', (e) => {
        const obj = e.target;
        setImagePosition({ imageLeft: obj.left, imageTop: obj.top });
        console.log('오브젝트 수정됨: ', canvas);
      });
    }
  }, [canvas]);

  //////////////////////////////

  ////////// 오브젝트 관리 //////////
  // 캔버스에 추가된 오브젝트 업데이트
  const updateObjects = () => {
    if (canvas && canvas.getObjects() && canvas.getObjects().length > 1) {
      // 캔버스에 추가된 오브젝트 조회
      const canvasObjects = canvas
        .getObjects()
        .filter((obj) => obj.id !== 'backImg' && obj.class !== 'frame');
      setObjects(canvasObjects, []);
      if (canvasObjects.length > 0) {
        console.log('현재 총 오브젝트 :', objects);
      }
    } else if (canvas && canvas.getObjects().length === 1) {
      setObjects([]);
      console.log('현재 총 오브젝트 :', objects);
    }
  };


  useEffect (() => {
    console.log('총 오브젝트 수:', objects);
    setObjects(objects);

  }, [objects])
  // 캔버스에 추가된 오브젝트 업데이트 이벤트 리스너 등록
  useEffect(() => {
    if (canvas) {
      canvas.on('object:added', (e) => {
        if (e.target.class === 'frame') {
          console.log('프레임 추가됨: ', canvas);
        } else if (e.target.id === 'backImg') {
          console.log('새로운 백그라운드 이미지 추가됨: ', canvas);
        } else {
          console.log('오브젝트 추가됨: ', canvas);
          updateObjects();
        }
      });

      canvas.on('object:removed', (e) => {
        updateObjects();
      });
    }
  }, [canvas]);

  // 선택된 오브젝트 업데이트
  useEffect(() => {
    if (canvas && image) {
      canvas.on('selection:created', (e) => {
        if (canvas.getActiveObject().type !== 'activeSelection') {
          canvas.getActiveObject().id !== 'backImg'
            ? setSelectedObject([canvas.getActiveObject()])
            : console.log('배경이미지는 선택된 이미지에 포함되지 않음.');
        } else {
          const obj = canvas
            .getActiveObject()
            ._objects.filter((obj) => obj.id !== 'backImg');
          setSelectedObject(obj);
        }
      });

      canvas.on('selection:updated', (e) => {
        if (canvas.getActiveObject().type !== 'activeSelection') {
          canvas.getActiveObject().id !== 'backImg'
            ? setSelectedObject([canvas.getActiveObject()])
            : console.log('셀렉션 클리어');
        } else {
          const obj = canvas
            .getActiveObject()
            ._objects.filter((obj) => obj.id !== 'backImg')
            .toObject();
          setSelectedObject(obj);
        }
      });
      canvas.on('selection:cleared', (e) => {
        setSelectedObject();
      });
      image.on('mousedown', (e) => {
        canvas.discardActiveObject();
        setSelectedObject(null);
      });
    }
  }, [canvas, image]);

  // 선택된 오브젝트 조회(콘솔 로그)
  useEffect(() => {
    if (canvas && image) {
      if (selectedObject) {
        if (selectedObject.length === 1) {
          console.log('단일 오브젝트 :', selectedObject);
          console.log(selectedObject.length);
        } else if (selectedObject.length > 1) {
          console.log('다중 오브젝트 :', selectedObject);
          console.log(selectedObject.length);
        }
      } else {
        console.log('선택된 오브젝트 없음');
      }
    }
  }, [selectedObject]);

  ////////////////컨텍스트 메뉴 ////////////////////

  const handleContextMenu = (e) => {
    e.preventDefault();
    // 마우스 우클릭 시 마우스 위치에 컨텍스트 메뉴를 표시하기 위한 정보 설정
    if (image) {
      setContextMenuPos({ x: e.clientX, y: e.clientY });
      // 컨텍스트 메뉴를 표시
      setContextMenuVisible(true);
    }
  };

  // 컨텍스트 메뉴를 닫는 함수
  const closeContextMenu = () => {
    setContextMenuVisible(false);
  };

  // 복사한 객체를 저장하는 state
  const [copiedObject, setCopiedObject] = useState(null); // 부모 컴포넌트에서 관리
  // console.log(copiedObject);
  // console.log('copiedObject');

  // 복사한 객체를 저장하는 함수
  const handleCopyObject = (object) => {
    setCopiedObject(object);
    console.log('object is copied', object);
  };

  // 붙여넣기 함수
  const handlePasteObject = (x, y) => {
    if (copiedObject !== null) {
      if (copiedObject.type !== 'activeSelection') {
        // 선택된 객체가 단일 객체인 경우
        if (copiedObject.type === 'image') {
          fabric.Image.fromObject(copiedObject, function (img) {
            img.set({
              left: x / 3,
              top: y / 3,

              evented: true,
              svgViewportTransformation: true,
            });
            canvas.add(img);
            canvas.renderAll();
          });
        } else if (copiedObject.type === 'i-text') {
          fabric.IText.fromObject(copiedObject, function (text) {
            text.set({
              left: x / 3,
              top: y / 3,
              evented: true,
              svgViewportTransformation: true,
            });
            canvas.add(text);
            canvas.renderAll();
          });
        }
        console.log('object is pasted', copiedObject);
      } else if (copiedObject.type === 'activeSelection') {
        // 선택된 객체가 다중 객체인 경우
        for (let i = 0; i < copiedObject.objects.length; i++) {
          if (copiedObject.objects[i].type === 'image') {
            fabric.Image.fromObject(copiedObject.objects[i], function (img) {
              img.set({
                left: x / 3,
                top: y / 3,
                evented: true,
                svgViewportTransformation: true,
              });
              canvas.add(img);
              canvas.renderAll();
            });
          } else if (copiedObject.objects[i].type === 'i-text') {
            fabric.IText.fromObject(copiedObject.objects[i], function (text) {
              text.set({
                left: x / 3,
                top: y / 3,
                evented: true,
                svgViewportTransformation: true,
              });
              canvas.add(text);
              canvas.renderAll();
            });
          }
        }
      }
      console.log('objects is pasted', copiedObject);
    } else {
      console.log('no object is copied');
    }
  };

  // 삭제 함수 1
  const removeObjects = () => {
    if (selectedObject) {
      canvas.remove(...selectedObject);
      canvas.renderAll();
    } else {
      console.log('no object is selected');
    }
  };

  // 삭제 함수 2
  const handleDeleteObject = (object) => {
    // console.log(object);
    removeObjects(object);
  };

  // 잘라내기 함수
  const handleCutObject = (object) => {
    setCopiedObject(object);
    removeObjects(object);
    console.log('object is cut', object);
    canvas.renderAll();
  };

  /////////////////////////////////////////////

  /////// 오브젝트 z-index 관리 ////////
  // 맨 뒤로 보내기
  const sendToBack = () => {
    if (selectedObject) {
      canvas?.sendToBack(canvas.getActiveObject());
      // canvas.('#backImg').sendToBack();
      // canvas?.getObjects('.frame').bringToFront();
      canvas.sendToBack(
        canvas.getObjects().find((object) => object.class === 'frame')
      );
      canvas.sendToBack(
        canvas.getObjects().find((object) => object.id === 'backImg')
      );

      canvas.renderAll();

      console.log(canvas.getObjects());
    } else {
      console.log('no object is selected');
    }
  };
  // 뒤로 보내기
  const sendBackwards = () => {
    if (selectedObject) {
      canvas?.sendBackwards(canvas.getActiveObject());
      canvas.sendToBack(
        canvas.getObjects().find((object) => object.class === 'frame')
      );
      canvas.sendToBack(
        canvas.getObjects().find((object) => object.id === 'backImg')
      );
      canvas.renderAll();
      console.log(canvas.getObjects());
    } else {
      console.log('no object is selected');
    }
  };
  // 앞으로 가져오기
  const bringForward = () => {
    if (selectedObject) {
      canvas?.bringForward(canvas.getActiveObject());
      canvas.renderAll();
      console.log(canvas.getObjects());
    } else {
      console.log('no object is selected');
    }
  };
  // 맨 앞으로 가져오기
  const bringToFront = () => {
    if (selectedObject) {
      canvas?.bringToFront(canvas.getActiveObject());
      canvas.renderAll();
      console.log(canvas.getObjects());
    } else {
      console.log('no object is selected');
    }
  };
  /////////////////////////////////////////////

  //////// 키 이벤트 리스너 등록 //////////
  let isCtrlPressed = false;

  useEffect(() => {
    if (canvas && image) {
      // 키보드 이벤트 리스너 등록
      // delete 키를 누르면 선택된 오브젝트 삭제
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Delete') {
          if (canvas.getActiveObject() !== null) {
            console.log(canvas.getActiveObject());
            if (canvas.getActiveObject()._objects?.length > 1) {
              canvas.remove(...canvas.getActiveObject()._objects);
            } else {
              canvas.remove(canvas.getActiveObject());
            }
            canvas.renderAll();
          } else {
            console.log('no object is selected');
          }
        }
        // } else if (e.key === 'Control') {
        //   // Set the flag to indicate that the Ctrl key is pressed
        //   isCtrlPressed = true;
        // } else if (e.key === 'c' && isCtrlPressed) {
        //   if (canvas.getActiveObject() !== null) {
        //     console.log('Ctrl+C pressed');
        //     // Handle copy action here
        //     handleCopyObject(canvas.getActiveObject().toObject());
        //   } else {
        //     console.log('No object is selected');
        //   }
        // } else if (e.key === 'v' && isCtrlPressed) {
        //   if (copiedObject !== null) {
        //     console.log('Ctrl+V pressed');
        //     // Handle paste action here
        //     handlePasteObject(170, 246);
        //   } else {
        //     console.log('No object is copied');
        //   }
        // } else if (e.key === 'x' && isCtrlPressed) {
        //   if (canvas.getActiveObject() !== null) {
        //     console.log('Ctrl+X pressed');
        //     // Handle cut action here
        //     handleCutObject(canvas.getActiveObject().toObject());
        //   } else {
        //     console.log('No object is selected');
        //   }
        // } else {
        //   console.log('');
        // }
      });
      window.addEventListener('keyup', (e) => {
        if (e.key === 'Control') {
          // Set the flag to indicate that the Ctrl key is released
          isCtrlPressed = false;
        }
      });
    }
  }, [canvas, image, copiedObject]);

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
    <s.Wrapper onClick={closeContextMenu}>
      {isLogedIn ? <Header /> : <HeaderIsLogOffed />}
      <s.EditorWrapper>
        <s.LeftContainer>
          <s.TopMenuWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonLeft>
                <s.TopMenuButton
                  isActive={true}
                  onClick={onClickUploadModal} // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
                >
                  <s.TopMenuButtonIcon isActive={true}>
                    <Load />
                  </s.TopMenuButtonIcon>
                  <s.TopMenuButtonLabel isActive={true}>
                    불러오기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <Modal
                  isOpen={isOpenUploadModal}
                  style={EditorUploadModalStyle}
                  onRequestClose={onClickUploadModal} // 오버레이나 esc를 누르면 핸들러 동작
                  ariaHideApp={false}
                >
                  <EditorUploadModal
                    canvas={canvas}
                    image={image}
                    setImage={setImage}
                    setIsBackImgEmpty={setIsBackImgEmpty}
                    setIsOpenUploadModal={setIsOpenUploadModal}
                  />
                </Modal>
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
                  onCopy={handleCopyObject} // 복사 이벤트
                  onPaste={handlePasteObject} // 붙여넣기 이벤트
                  onCut={handleCutObject} // 잘라내기 이벤트
                  onDelete={handleDeleteObject} // 삭제 이벤트
                />
              )}
            </s.CanvasWrapper>
            <s.LayerButtonWrapper>
              <s.LayerButton onClick={sendToBack}>
                <s.LayerButtonIcon src={ToBack} />
                <s.LayerButtonLabel>맨 뒤로</s.LayerButtonLabel>
              </s.LayerButton>
              <s.LayerButton onClick={sendBackwards}>
                <s.LayerButtonIcon src={Backward} />
                <s.LayerButtonLabel>뒤로</s.LayerButtonLabel>
              </s.LayerButton>
              <s.LayerButton onClick={bringForward}>
                <s.LayerButtonLabel>앞으로</s.LayerButtonLabel>
                <s.LayerButtonIcon src={Forward} />
              </s.LayerButton>
              <s.LayerButton onClick={bringToFront}>
                <s.LayerButtonLabel>맨 앞으로</s.LayerButtonLabel>
                <s.LayerButtonIcon src={ToFront} />
              </s.LayerButton>
            </s.LayerButtonWrapper>
            <s.LayerButton
              id='lock'
              onClick={lockImage}
              isActive={!isBackImgEmpty}
              disabled={isBackImgEmpty}
            >
              {imageLock ? '잠금해제' : '이미지 잠금'}
            </s.LayerButton>
            <s.SelectedObjects>
              선택된 오브젝트:{' '}
              {selectedObject?.length ? selectedObject.length : 0}/
              {objects?.length}
            </s.SelectedObjects>
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
              {tool === 1 && (
                <Image
                  isBackImgEmpty={isBackImgEmpty}
                  setIsBackImgEmpty={setIsBackImgEmpty}
                  image={image}
                  canvas={canvas}
                />
              )}
              {tool === 2 && (
                <Draw
                  canvas={canvas}
                  image={image}
                  isBackImgEmpty={isBackImgEmpty}
                />
              )}
              {tool === 3 && (
                <Text
                  canvas={canvas}
                  image={image}
                  isBackImgEmpty={isBackImgEmpty}
                />
              )}
              {tool === 4 && (
                <Sticker
                  canvas={canvas}
                  image={image}
                  isBackImgEmpty={isBackImgEmpty}
                />
              )}
              {tool === 5 && (
                <Frame
                  canvas={canvas}
                  image={image}
                  isBackImgEmpty={isBackImgEmpty}
                />
              )}
            </s.ToolContentsWrapper>
          </s.ToolContainer>
        </s.RightContainer>
      </s.EditorWrapper>
    </s.Wrapper>
  );
};

export default Editor;
