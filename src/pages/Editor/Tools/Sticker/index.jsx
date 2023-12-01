import * as s from './style';
// import { fabric } from 'fabric';
// import { useEffect, useState } from 'react';
import { stickerData1, stickerData2, stickerData3, stickerData4, stickerData5, stickerData6, stickerData7 } from './stickerData';
// import Konva from 'konva';

import { fabric } from 'fabric';

const Stickers = ({ 
  canvas,
  image,
}) => {

  const handleImageClick = (e) => {

    const { offsetX, offsetY } = e.nativeEvent;
    const imageUrl = e.target.src;
    const spec = e.target.dataset.spec;
    console.log(spec);

    const isParticlesS = spec === "particlesS";
    const isPrticlesM = spec === "particlesM";
    const isL = spec === "L";
    const isP = spec === "p";
    const isRibbonL = spec === "ribbonL";
    const isRibbonM = spec === "ribbonM";
    const isRibbonS = spec === "ribbonS";

    // const frame = canvas.getObjects().find((object) => object.class === 'frame');
    // frame이라는 class를 가진 객체를 찾아서 frame에 할당

  fabric.Image.fromURL(imageUrl, function (img) {
    img.set({
      left: offsetX - img.width / 1000,
      top: offsetY - img.height / 1000,
      evented: true,
      class: 'sticker', // sticker라는 class를 추가
      svgViewportTransformation: true,
    });

    if (isParticlesS) {
      img.scaleToWidth(30);
    } else if(isP) {
      img.scaleToWidth(50);
    } else if(isPrticlesM) {
      img.scaleToWidth(50);
    } else if(isRibbonL) {
      img.scaleToWidth(150);
    } else if(isRibbonM) {
      img.scaleToWidth(65);
    } else if(isRibbonS) {
      img.scaleToWidth(50);
    } else if(isL) {
      img.scaleToWidth(150);
    } else{
      img.scaleToWidth(100);
    }

    if (image) {
      canvas.add(img);
      canvas.renderAll();
    } // image가 존재하면 canvas에 img를 추가
    else if (!image) {
      alert('이미지를 먼저 업로드해주세요!');
    } // image가 존재하지 않으면 경고창 띄움

    // if (frame) {
    //   frame.sendToBack();
    // } // frame이 존재하면 frame을 뒤로 보냄
  
  });
  };

  return (
    <s.StickerList> 
      {/* <button onClick={handleDelete}>삭제</button> */}
      {stickerData4.map( (item) => (
          ( item.spec === 'ribbonL' ? (
            <img
              key={item.id}
              src={item.fileUrl} 
              onClick={(e) => handleImageClick(e)}
              data-spec={item.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={item.id}
                  src={item.fileUrl} 
                  onClick={(e) => handleImageClick(e)}
                  data-spec={item.spec}
                  alt='sticker'
                  width='120px'
                  height='120px'
              />
          ))
        )
      )}
      {stickerData5.map( (item) => (
          ( item.spec === 'ribbonL' ? (
            <img
              key={item.id}
              src={item.fileUrl} 
              onClick={(e) => handleImageClick(e)}
              data-spec={item.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={item.id}
                  src={item.fileUrl} 
                  onClick={(e) => handleImageClick(e)}
                  data-spec={item.spec}
                  alt='sticker'
                  width='120px'
                  height='120px'
              />
          ))
        )
      )}
      {stickerData6.map( (item) => (
          ( item.spec === 'ribbonL' ? (
            <img
              key={item.id}
              src={item.fileUrl}
              onClick={(e) => handleImageClick(e)}
              data-spec={item.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={item.id}
                  src={item.fileUrl} 
                  onClick={(e) => handleImageClick(e)}
                  data-spec={item.spec}
                  alt='sticker'
                  width='120px'
                  height='120px'
              />
          ))
        )
      )}
      {stickerData7.map( (item) => (
        ( item.spec === 'particlesS' ? (          
          <img
            key={item.id}
            src={item.fileUrl} 
            onClick={(e) => handleImageClick(e)}
            data-spec={item.spec} 
            alt='sticker'
            width='50px'
            height='auto'
          />
          ):( <img
                key={item.id}
                src={item.fileUrl} 
                onClick={(e) => handleImageClick(e)}
                data-spec={item.spec}
                alt='sticker'
                height='auto'
                width='130px'
              />
          ))
        )
      )}
      {stickerData1.map( (item) => {
        return (
          (item.spec === 'particlesS' ? (
            <img
              key={item.id}
              src={item.fileUrl}
              onClick={(e) => handleImageClick(e)}
              data-spec={item.spec}
              alt='sticker'
              width='50px'
              height='auto' />
          ) : (<img
            key={item.id}
            src={item.fileUrl}
            onClick={(e) => handleImageClick(e)}
            data-spec={item.spec}
            alt='sticker'
            height='auto'
            width='130px' />
          ))
        );
      }
      )}
      {stickerData2.map( (item) => (
        ( item.spec === 'm' ? (
          <img
            key={item.id}
            src={item.fileUrl} 
            onClick={(e) => handleImageClick(e)}
            data-spec={item.spec}
            alt='sticker'
            width='150px'
            height='auto'
          />
          ):( <img
                key={item.id}
                src={item.fileUrl} 
                onClick={(e) => handleImageClick(e)}
                data-spec={item.spec}
                alt='sticker'
                width='50px'
              />
          ))
        )
      )}
      {stickerData3.map( (item) => (
        ( item.spec === '' ? (
          <img
            key={item.id}
            src={item.fileUrl} 
            onClick={(e) => handleImageClick(e)}
            data-spec={item.spec}
            alt='sticker'
            width='150px'
            height='auto'
          />
          ):( <img
                key={item.id}
                src={item.fileUrl} 
                onClick={(e) => handleImageClick(e)}
                data-spec={item.spec}
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