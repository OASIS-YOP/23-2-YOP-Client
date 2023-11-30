import { useEffect, useState } from 'react';
import * as s from './style';
import { fabric } from 'fabric';
import { Demo } from './../ColorPicker';
import './fonts/font.css';

const Text = ({
  canvas, image
}) => {
  const [color, setColor] = useState('#6979ffff');

  // 폰트 변경
  const [selectedFont, setSelectedFont] = useState('(default)Times New Roman');

  const fonts = ['MBC1961굴림', '강원모두교육체','에스코어드림', '김정철명조', 'Neo둥근고딕Pro'];

  fonts.unshift('(default)Times New Roman');

  useEffect(() => {
    const select = document.getElementById('font-family');
    select.innerHTML = '';

    fonts.forEach((font) => {
      const option = document.createElement('option');
      option.innerHTML = font;
      option.value = font;
      select.appendChild(option);
    });
  });

  const AddDate = () => {
    // 캔버스에 텍스트 추가될 때 디폴트로 표시될 날짜 포맷팅 함수
    const formatDate = (date) => {
      const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
      return new Intl.DateTimeFormat('ko-KO', options).format(date);
    };
    // 날짜 년월일로 표시해주는 포맷팅 함수
    const currentDate = new Date();
    //오늘 날짜

    if (canvas) {
      let text = new fabric.IText(formatDate(currentDate), {
        fill: color,
        editable: true,
        hasControls: true,
        class: 'date',
      });
      text.set('selectable', true);

      if( image ){
        canvas.add(text);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }
    }
  };

  const AddText = () => {
    if (canvas) {
      let text = new fabric.IText('double click!', {
        fill: color,
        editable: true,
        hasControls: true,
        class: 'text',
      });
      text.set('selectable', true);

      if( image ){
        canvas.add(text);
      } else {
        alert('이미지를 먼저 추가해주세요.');
      }
    }
  };

  // const FixImage = () => {
  //   if (
  //     canvas.getActiveObject() &&
  //     canvas.getActiveObject() instanceof fabric.Image
  //   ) {
  //     // console.log(canvas.getActiveObject()._element.currentSrc);
  //     console.log(canvas.getActiveObject());
  //     let imag = canvas.getActiveObject()._element.currentSrc;
  //     // let imagAngle = canvas.getActiveObject.angle;
  //     let imagACoords = canvas.getActiveObject().oCoords;
  //     let imagWidth = canvas.getActiveObject().width;
  //     let imagHeight = canvas.getActiveObject().height;
  //     let imagScaleX = canvas.getActiveObject().scaleX;
  //     let imagScaleY = canvas.getActiveObject().scaleY;
  //     let imagLeft = canvas.getActiveObject().left;
  //     let imagTop = canvas.getActiveObject().top;
  //     fabric.Image.fromURL(imag, (imgFile) => {
  //       imgFile.aCoords = imagACoords;
  //       imgFile.scaleToWidth(imagWidth * imagScaleX);
  //       imgFile.scaleToHeight(imagHeight * imagScaleY);
  //       imgFile.left = imagLeft;
  //       imgFile.top = imagTop;
  //       //imgFile.angle = 0;
  //       imgFile.hasControls = false;
  //       imgFile.hasBorders = false;
  //       imgFile.lockMovementX = true;
  //       imgFile.selectable = false;
  //       imgFile.evented = false;
  //       imgFile.sendToBack();

  //       canvas.add(imgFile);
  //       canvas.renderAll();
  //     });
  //   }
  // };

  const FixText = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Text ||
        canvas.getActiveObject() instanceof fabric.IText)
    ) {
      let textSelected = canvas.getActiveObject();
      // const textSelectedText = textSelected.text;
      console.log(canvas.getActiveObject());
      textSelected.hasControls = false;
      textSelected.hasBorders = false;
      textSelected.lockMovementX = true;
      textSelected.lockMovementY = true;
      textSelected.selectable = false;
      textSelected.editable = false;
      textSelected.evented = false;
    }
  };

  const ChangeTextColor = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Text ||
        canvas.getActiveObject() instanceof fabric.IText)
    ) {
      console.log(canvas.getActiveObject());
      let text = canvas.getActiveObject();
      text.set('fill', color); // Update the fill property directly
      text.setCoords(); // Update the object's coordinates
      canvas.renderAll(); // Render the canvas
      console.log(text);

      canvas.requestRenderAll();
      console.log('rendered');
    }
  };

  const TextBackgroundColor = () => {
    if (
      canvas.getActiveObject() &&
      (canvas.getActiveObject() instanceof fabric.Text ||
        canvas.getActiveObject() instanceof fabric.IText)
    ) {
      console.log(canvas.getActiveObject());
      let text = canvas.getActiveObject();
      text.set('textBackgroundColor', color); // Update the fill property directly
      text.setCoords(); // Update the object's coordinates
      canvas.renderAll(); // Render the canvas
      console.log(text);

      canvas.requestRenderAll();
      console.log('rendered');
    }
  };

  //텍스트 그리기 기능
  const handleBeforePathCreated = (opt) => {
    if (opt.e.type === 'path:created') {
      const path = opt.path;
      const pathInfo = fabric.util.getPathSegmentsInfo(path.path);
      path.segmentsInfo = pathInfo;
      const pathLength = pathInfo[pathInfo.length - 1].length;
      const text =
        'This is a demo of text on a path. This text should be small enough to fit in what you drawn.';
      const fontSize = (2.5 * pathLength) / text.length;

      const textObject = new fabric.Text(text, {
        fontSize: fontSize,
        path: path,
        top: path.top,
        left: path.left,
      });
      canvas.add(textObject);
    }
  };


  const handlePathCreated = (opt) => {
    if (opt.e.type === 'path:created') {
      canvas.remove(opt.path);
    }
  };

  const handleTextDrawClick = () => {
    // fabric.js canvas 생성
    if (canvas) {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush({ decimate: 8 });

      // before:path:created 이벤트 등록
      canvas.on('before:path:created', handleBeforePathCreated);

      // path:created 이벤트 등록
      canvas.on('path:created', handlePathCreated);
    }
  };

  const TextFonts = () => {
    if (
      canvas.getActiveObject() instanceof fabric.Text ||
      canvas.getActiveObject() instanceof fabric.IText
    ) {
      let fontFamily = '';
      let fontWeight = 'normal'; // Default font-weight value
  
      if (selectedFont === 'MBC1961굴림') {
        fontFamily = 'MBC1961GulimM';
      } else if(selectedFont === '강원모두교육체') {
        fontFamily = 'GangwonEdu_OTFBoldA';
      } else if(selectedFont ==='에스코어드림') {
        fontFamily = 'S-CoreDream-3Light';
      }
      else if(selectedFont ==='김정철명조') {
        fontFamily = 'KimjungchulMyungjo-Bold';
        fontWeight  = 700;
      }else if(selectedFont ==='(default)Times New Roman'){
        fontFamily = 'Times New Roman';
      }else if(selectedFont ==='Neo둥근고딕Pro'){
        fontFamily = 'NeoDunggeunmoPro-Regular';
      }

      canvas.getActiveObject().set({
        fontFamily,
        fontWeight,
      });

      canvas.renderAll();
      console.log("se",selectedFont);
      console.log(canvas.getActiveObject());
      console.log(fontFamily, fontWeight);
    }
  };

  return (
    <>
      <s.ContainerText>
        <s.BtnAddText onClick={AddText}>텍스트 추가</s.BtnAddText>
        <s.BtnAddText onClick={AddDate}>날짜 추가</s.BtnAddText>
        <s.ColorpickerWrapper>
          <Demo color={color} setColor={setColor} />
        </s.ColorpickerWrapper>
        <s.BtnChangeColor onClick={ChangeTextColor}>
          색깔 적용하기
        </s.BtnChangeColor>
        <s.BtnBackgroundColor onClick={TextBackgroundColor}>
          배경색 넣기
        </s.BtnBackgroundColor>
        <s.BtnFixText onClick={FixText}>선택한 텍스트 고정</s.BtnFixText>
        {/* <s.BtnFixImage onClick={FixImage}>선택한 이미지 고정</s.BtnFixImage> */}
        {/* <s.BtnDrawText onClick={handleTextDrawClick}>텍스트 그리기</s.BtnDrawText> */}
        <select
          id='font-family'
          onChange={(e) => setSelectedFont(e.target.value)}
          value={selectedFont}
        >
          {/* Options will be added dynamically through the useEffect */}
        </select>
        <s.BtnFontChange onClick={TextFonts}>글꼴 바꾸기</s.BtnFontChange>
      </s.ContainerText>
    </>
  );
};

export default Text;