import { useEffect, useState } from 'react';
import * as s from './style';
import { fabric } from 'fabric';
import { Demo } from './../ColorPicker';

import Lock from './../../../../assets/editorIcons/draw/Lock';
import Circle from './../../../../assets/editorIcons/draw/Circle';
import Square from './../../../../assets/editorIcons/draw/Square';
import Triangle from './../../../../assets/editorIcons/draw/Triangle';
import ColorFill from './../../../../assets/editorIcons/draw/ColorFill';

const Draw = ({
  canvas,
  image,
  isBackImgEmpty,
}) => {
  const [color, setColor] = useState('#6979ffff');


  // 캔버스 내의 랜덤 위치 지정
  const getRandomInt = ( min,  max ) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const AddObjCircle = () => {
    const x = getRandomInt(0, canvas.width-40); // 랜덤한 x 좌표
    const y = getRandomInt(0, canvas.height-40); // 랜덤한 y 좌표
    if (canvas) {
      let circle = new fabric.Circle({
        width: 40,
        height: 40,
        radius: 25,
        fill: color,
        left: x,
        top: y,
      });
      circle.set('selectable', true);
      if( image ){
        canvas.add(circle);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }

    }
  };

  const AddObjRect = () => {
    const x = getRandomInt(0, canvas.width - 40); // 랜덤한 x 좌표
    const y = getRandomInt(0, canvas.height-40); // 랜덤한 y 좌표
    if (canvas) {
      let rect = new fabric.Rect({
        width: 40,
        height: 40,
        fill: color,
        left: x,
        top: y,
      });
      rect.set('selectable', true);

      if( image ){
        canvas.add(rect);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }
    }
  };

  const AddObjTri = () => {
    const x = getRandomInt(0, canvas.width-40); // 랜덤한 x 좌표
    const y = getRandomInt(0, canvas.height-40); // 랜덤한 y 좌표
    if (canvas) {
      let tri = new fabric.Triangle({
        width: 40,
        height: 40,
        fill: color,
        left: x,
        top: y,
      });
      tri.set('selectable', true);

      if( image ){
        canvas.add(tri);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }
    }
  };

  const ChangeObjColor = () => {
    if (
      canvas.getActiveObject() &&
      canvas.getActiveObject() instanceof fabric.Object
    ) {
      console.log(canvas.getActiveObject());
      let Obj = canvas.getActiveObject();
      Obj.set('fill', color); // Update the fill property directly
      Obj.setCoords(); // Update the object's coordinates
      canvas.renderAll(); // Render the canvas
      console.log(Obj);

      canvas.requestRenderAll();
      console.log('rendered');
    }
  };

  const FixObj = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Circle ||
        canvas.getActiveObject() instanceof fabric.Rect ||
        canvas.getActiveObject() instanceof fabric.Triangle)
    ) {
      let ObjSelected = canvas.getActiveObject();
      // const ObjSelectedObj = ObjSelected.Obj;
      console.log(canvas.getActiveObject());
      ObjSelected.hasControls = false;
      ObjSelected.hasBorders = false;
      ObjSelected.lockMovementX = true;
      ObjSelected.lockMovementY = true;
      ObjSelected.selectable = false;
      ObjSelected.editable = false;
      ObjSelected.evented = false;
    }
  };

  return (
    <>
      <s.PaintContainer>
        <s.Margin />
        <s.BtnAddObjWrapper>
          <s.BtnAddObj 
            onClick={AddObjCircle}
            disabled={isBackImgEmpty}
          >
            <s.BtnAddObjIcon
              isActive={!isBackImgEmpty}
            >
              <Circle />
            </s.BtnAddObjIcon>
            <s.BtnAddObjLabel
              isActive={!isBackImgEmpty}
            >
              동그라미 추가
            </s.BtnAddObjLabel>
          </s.BtnAddObj>
          <s.BtnAddObj 
            onClick={AddObjRect}
            disabled={isBackImgEmpty}  
          >
            <s.BtnAddObjIcon
              isActive={!isBackImgEmpty}
            >
              <Square />
            </s.BtnAddObjIcon>
            <s.BtnAddObjLabel
              isActive={!isBackImgEmpty}
            >
              네모 추가
            </s.BtnAddObjLabel>
            </s.BtnAddObj>
          <s.BtnAddObj 
            onClick={AddObjTri}
            disabled={isBackImgEmpty}  
          >
            <s.BtnAddObjIcon
              isActive={!isBackImgEmpty}
            >
              <Triangle />
            </s.BtnAddObjIcon>
            <s.BtnAddObjLabel
              isActive={!isBackImgEmpty}
            >
              세모 추가
            </s.BtnAddObjLabel>
          </s.BtnAddObj>
        </s.BtnAddObjWrapper>
        <s.ColorpickerWrapper>
          <Demo color={color} setColor={setColor} />
        </s.ColorpickerWrapper>
        <s.BtnChangeColorWrapper>
          <s.BtnChangeColor 
            onClick={ChangeObjColor}
            disabled={isBackImgEmpty}  
          >
            <s.BtnChangeColorIcon
              isActive={!isBackImgEmpty}
            >
              <ColorFill />
            </s.BtnChangeColorIcon>
            <s.BtnChangeColorLabel
              isActive={!isBackImgEmpty}
            >
              색상 적용하기
            </s.BtnChangeColorLabel>
          </s.BtnChangeColor>
        </s.BtnChangeColorWrapper>
        <s.Margin />
      </s.PaintContainer>
    </>
  );
}

export default Draw