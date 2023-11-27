import * as s from './style';
// import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import { stickerData1, stickerData2, stickerData3, stickerData4, stickerData5, stickerData6, stickerData7 } from './stickerData';
import Konva from 'konva';

const Stickers = ({ 
  stageRef,
  objLayers,
  image,
}) => {

  const [selectedSticker, setSelectedSticker] = useState(null);

  const [objLayer, setObjLayer] = useState(new Konva.Layer({ className: 'objLayer' }));

  console.log(stageRef);

  const tr = new Konva.Transformer({
    className: 'transformer',
    keepRatio: true,
    enabledAnchors: [
      'top-left',
      'top-right',
      'bottom-left',
      'bottom-right',
      'middle-left',
      'middle-right',
      'top-center',
      'bottom-center',

    ],
    boundBoxFunc: function (oldBox, newBox) {
      // limit resize
      if (newBox.width < 5 || newBox.height < 5) {
        return oldBox;
      }
      return newBox;
    },
  });

  useEffect(() => {
    const initialObjLayer = new Konva.Layer({ className: 'objLayer' });
    initialObjLayer.add(tr);
    stageRef.current.add(initialObjLayer);
    setObjLayer(initialObjLayer);
  }, []);

  //////////////////////// 스티커 이미지 클릭시 캔버스에 추가하는 함수 ////////////////////////

  const handleImageClick = (e) => {
    const canvas = stageRef.current;

    // const { offsetX, offsetY } = e.nativeEvent;
    const imageUrl = e.target.src;
    const spec = e.target.dataset.spec;


    const isParticlesS = spec === "particlesS";
    const isPrticlesM = spec === "particlesM";
    const isL = spec === "L";
    const isP = spec === "p";
    const isRibbonL = spec === "ribbonL";
    const isRibbonM = spec === "ribbonM";
    const isRibbonS = spec === "ribbonS";

    // const frame = canvas.getObjects().find((object) => object.class === 'frame');

  Konva.Image.fromURL(imageUrl, function (img) {
    const imageObj = new window.Image();
    imageObj.src = imageUrl;
    

    const canvas = stageRef.current;

    const imgWidth = imageObj.width;
    const imgHeight = imageObj.height;
    const aspectRatio = imgWidth / imgHeight;

    let newWidth, newHeight;
    
    if (!isNaN(newWidth) || !isNaN(newHeight)) {
      if (isParticlesS) {
        newWidth = 30;
        newHeight = newWidth / aspectRatio;
      } else if (isP || isPrticlesM || isRibbonS) {
        newWidth = 50;
        newHeight = newWidth / aspectRatio;
      } else if (isRibbonL) {
        newWidth = 150;
        newHeight = newWidth / aspectRatio;
      } else {
        newWidth = 120;
        newHeight = newWidth / aspectRatio;
      }

    } else if (isNaN(newWidth) || isNaN(newHeight)) {
      // Provide default values or handle this case as per your requirement
      newWidth = 150;
      newHeight = 150;
    };
    
    const x = (canvas.width() - newWidth) / 2;
    const y = (canvas.height() - newHeight) / 2;

    img.setAttrs({
      id: 'sticker',
      image: imageObj,
      spec: spec,
      width: newWidth,
      height: newHeight,
      x: x,
      y: y,
      draggable: true,
      className: 'sticker',
    });

    canvas.add(objLayer)
    objLayer.add(img);
      objLayer.batchDraw();

      objLayers.push(objLayer);
      console.log(objLayers);
    
    if (image){
      objLayer.add(img);
      objLayer.batchDraw();
      
      tr.nodes([img]);
      objLayer.add(tr);
      objLayers.push(objLayer);
      console.log(objLayers);

      img.on('click', function (e) {
        setSelectedSticker(img);
        tr.nodes([img]);
        objLayer.batchDraw();
      });

      stageRef.current.findOne('#backImgLayer').on('click', function (e) {
        tr.nodes([]);
        objLayer.batchDraw();
        setSelectedSticker(null);
      });

      console.log(canvas);
    } else {
      window.alert('이미지를 먼저 추가해주세요.');
    }


    // if (frame) {
    //   frame.sendToBack();
    // } // frame이 존재하면 frame을 뒤로 보냄


  });
  };

  useEffect(() => {
    console.log('선택된 이미지:', selectedSticker);
  }, [selectedSticker]);

  

  // 스티커 삭제 함수
  const handleDelete = () => {
    if (selectedSticker) {
      // 현재 선택된 스티커 객체가 있다면 삭제
      selectedSticker.destroy();
      stageRef.current.batchDraw(); // 레이어를 다시 그리기
    }
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Delete') {
      handleDelete();
    }
  });

  return (
    <s.StickerList> 
      <button onClick={handleDelete}>삭제</button>
      {stickerData4.map( (stickerData4, index) => (
          ( stickerData4.spec === 'ribbonL' ? (
            <img
              key={index}
              src={stickerData4.src} 
              onClick={(e) => handleImageClick(e)}
              data-spec={stickerData4.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={index}
                  src={stickerData4.src} 
                  onClick={(e) => handleImageClick(e)}
                  data-spec={stickerData4.spec}
                  alt='sticker'
                  width='120px'
                  height='120px'
              />
          ))
        )
      )}
      {stickerData5.map( (stickerData5, index) => (
          ( stickerData5.spec === 'ribbonL' ? (
            <img
              key={index}
              src={stickerData5.src} 
              onClick={(e) => handleImageClick(e)}
              data-spec={stickerData5.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={index}
                  src={stickerData5.src} 
                  onClick={(e) => handleImageClick(e)}
                  data-spec={stickerData5.spec}
                  alt='sticker'
                  width='120px'
                  height='120px'
              />
          ))
        )
      )}
      {stickerData6.map( (stickerData6, index) => (
          ( stickerData6.spec === 'ribbonL' ? (
            <img
              key={index}
              src={stickerData6.src}onClick={(e) => handleImageClick(e)}
              data-spec={stickerData6.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={index}
                  src={stickerData6.src} 
                  onClick={(e) => handleImageClick(e)}
                  data-spec={stickerData6.spec}
                  alt='sticker'
                  width='120px'
                  height='120px'
              />
          ))
        )
      )}
      {stickerData7.map( (stickerData7, index) => (
        ( stickerData7.spec === 'particlesS' ? (          
          <img
            key={index}
            src={stickerData7.src} 
            onClick={(e) => handleImageClick(e)}
            data-spec={stickerData7.spec} 
            alt='sticker'
            width='50px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData7.src} 
                onClick={(e) => handleImageClick(e)}
                data-spec={stickerData7.spec}
                alt='sticker'
                height='auto'
                width='130px'
              />
          ))
        )
      )}
      {stickerData1.map( (stickerData1, index) => {
        return (
          (stickerData1.spec === 'particlesS' ? (
            <img
              key={index}
              src={stickerData1.src}
              onClick={(e) => handleImageClick(e)}
              data-spec={stickerData1.spec}
              alt='sticker'
              width='50px'
              height='auto' />
          ) : (<img
            key={index}
            src={stickerData1.src}
            onClick={(e) => handleImageClick(e)}
            data-spec={stickerData1.spec}
            alt='sticker'
            height='auto'
            width='130px' />
          ))
        );
      }
      )}
      {stickerData2.map( (stickerData2, index) => (
        ( stickerData2.spec === 'm' ? (
          <img
            key={index}
            src={stickerData2.src} 
            onClick={(e) => handleImageClick(e)}
            data-spec={stickerData2.spec}
            alt='sticker'
            width='150px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData2.src} 
                onClick={(e) => handleImageClick(e)}
                data-spec={stickerData2.spec}
                alt='sticker'
                width='50px'
              />
          ))
        )
      )}
      {stickerData3.map( (stickerData3, index) => (
        ( stickerData2.spec === '' ? (
          <img
            key={index}
            src={stickerData3.src} 
            onClick={(e) => handleImageClick(e)}
            data-spec={stickerData3.spec}
            alt='sticker'
            width='150px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData3.src} 
                onClick={(e) => handleImageClick(e)}
                data-spec={stickerData3.spec}
                alt='sticker'
                width='50px'
              />
          ))
        )
      )}
    </s.StickerList>
  );
};


export default Stickers;