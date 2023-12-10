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
  const [color, setColor] = useState('#FFFFFF');


  // 캔버스 내의 랜덤 위치 지정
  const getRandomInt = ( min,  max ) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const x = getRandomInt(0, canvas.width); // 랜덤한 x 좌표
  const y = getRandomInt(0, canvas.height); // 랜덤한 y 좌표

  const AddObjCircle = () => {
    if (canvas) {
      let circle = new fabric.Circle({
        width: 50,
        height: 50,
        radius: 25,
        fill: color,
        selectable: true,
      });
      circle.set({
        left: Math.min(Math.max(x, 0), canvas.width - circle.getScaledWidth()),
        top: Math.min(Math.max(y, 0), canvas.height - circle.getScaledHeight()),
      });
      if( image ){
        canvas.add(circle);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }

    }
  };

  const AddObjRect = () => {
    if (canvas) {
      let rect = new fabric.Rect({
        width: 50,
        height: 50,
        fill: color,
        selectable: true,
      });
      rect.set({
        left: Math.min(Math.max(x, 0), canvas.width - rect.getScaledWidth()),
        top: Math.min(Math.max(y, 0), canvas.height - rect.getScaledHeight()),
      });

      if( image ){
        canvas.add(rect);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }
    }
  };

  const AddObjTri = () => {
    if (canvas) {
      let tri = new fabric.Triangle({
        width: 50,
        height: 50,
        fill: color,
        selectable: true,
      });
      tri.set({
        left: Math.min(Math.max(x, 0), canvas.width - tri.getScaledWidth()),
        top: Math.min(Math.max(y, 0), canvas.height - tri.getScaledHeight()),
      });

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
  );
}

export default Draw