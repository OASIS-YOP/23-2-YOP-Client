import * as s from './style';
import { fabric } from 'fabric';

import Frames from './../../../../Temp/editor/frames/Frames';

const Frame = ({
  canvas, image,
}) => {

  /////// 프레임 리스트에 프레임 이미지 불러오는 함수 ///////
  const frameList1 = () => {
    return Frames[0].elements.map((element) => (
      <img
        alt='frame'
        key={element.id}
        src={element.fileUrl}
        onClick={(e) => handleImageClick(e, 0)} // handleImageClick에 프레임 인덱스도 전달
      />
    ));
  };

  // const frameList2 = () => {
  //   return frameData[1].src.map((src, index) => (
  //     <img
  //       key={index}
  //       src={src}
  //       onClick={(e) => handleImageClick(e, 1, index)} // handleImageClick에 프레임 인덱스도 전달
  //     />
  //   ));
  // };

  // const frameList3 = () => {
  //   return frameData[2].src.map((src, index) => (
  //     <img
  //       key={index}
  //       src={src}
  //       onClick={(e) => handleImageClick(e, 2, index)} // handleImageClick에 프레임 인덱스도 전달
  //     />
  //   ));
  // };


  /////// 프레임 이미지 클릭했을 때 발생 이벤트 ///////
  const handleImageClick = (e) => {
    // 프레임 이미지 클릭 시 캔버스에 추가되는 함수

    if(image){
    const url = e.target.src;
   
      fabric.Image.fromURL(url, function (img) {
        const canvasWidth = canvas.getWidth();
        const canvasHeight = canvas.getHeight();
         // 이미지를 캔버스 크기에 맞게 조절
        // img.scaleToWidth(canvasWidth);
        if(img.name === '라이트퍼플' || '그린' || '라이트퍼플' ){
          img.scaleToHeight(canvasHeight + 2);
          img.scaleToWidth(canvasWidth);
        } else {
          img.scaleToHeight(canvasHeight + 2);
        }
        img.set({
          originX: 'center',
          originY: 'center',
          left: canvasWidth / 2,
          top: canvasHeight / 2,
          class: 'frame', // 이미지에 프레임 클래스 부여
        });
  
        img.hasControls = false;
        img.hasBorders = false;
        img.lockMovementX = true;
        img.selectable = false;
        img.evented = false;
        removeFrames(); // 프레임 이미지 추가 전에 기존 프레임 이미지 삭제(프레임이 중복으로 쌓이는 버그 방지)

        canvas.add(img);

        canvas.sendToBack(canvas.getObjects().find((object) => object.class === 'frame'));
        canvas.sendToBack(canvas.getObjects().find((object) => object.id === 'backImg'));

        canvas.renderAll();
      });
    } else {
      alert('이미지를 먼저 추가해주세요.');
    }
    }


    /////// 프레임 이미지 삭제하는 함수 ///////
    const removeFrames = () => {
      const objects = canvas.getObjects();
      const objectsToRemove = []; // 삭제할 오브젝트들을 담을 배열

      objects.forEach((object) => {
        if (object.type === 'image' && object.class === 'frame') {
          objectsToRemove.push(object);
        }
      }); // 프레임 클래스를 가진 오브젝트들을 찾아서 배열에 담음
    
      objectsToRemove.forEach((object) => {
        canvas.remove(object);
      }); // 배열에 담긴 오브젝트들을 삭제
      canvas.renderAll();
      console.log('프레임 삭제 완료');
    }


  /////// 캔버스 크기에 따라 프레임 리스트 렌더링하는 함수 ///////
  // const renderFrameList = () => {
  //   if (canvas.width === 330 && canvas.height === 510 ) {
  //         return (
  //           <s.FrameList>
  //             <img
  //               className='noneFrame'
  //               src='NoneFrame1.svg'
  //               onClick={() => removeFrames() } 
  //             />
  //             { frameList1() }
  //           </s.FrameList>
  //         );
  //       } else if (canvas.width === 420 && canvas.height === 510 ) {
  //         return (
  //           <s.FrameList>
  //             <img
  //               className='noneFrame'
  //               src='NoneFrame2.svg'
  //               onClick={() => removeFrames() } 
  //             />
  //             { frameList2() }
  //           </s.FrameList>
  //         );
  //       } else {
  //         return (
  //           <s.FrameList>
  //             <img
  //               className='noneFrame'
  //               src='NoneFrame3.svg'
  //               onClick={() => removeFrames() } 
  //             />
  //             { frameList3() }
  //           </s.FrameList>
  //         );
  //       }
  // };

  return (
    <div>
        <s.FrameList>
          <img
            className='noneFrame'
            src='NoneFrame1.svg'
            alt='noneFrame'
            onClick={ () => removeFrames() } 
          />
          { frameList1() }
        </s.FrameList>
    </div>
  );
  }

export default Frame