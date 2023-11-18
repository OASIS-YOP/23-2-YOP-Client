import React, { useState, useEffect, useRef } from 'react';
import * as s from './style';

//캔버스 라이브러리
import Konva from 'konva'
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
// import { createStore } from 'polotno/model/store';
// import { Workspace } from 'polotno/canvas/workspace';


const CreateCanvas = ({ onImageLoad }) => {
  const stageRef = useRef(null);

  const [image, setImage] = useState(null);


  // 파일을 불러와서 이미지 추가하는 함수
  const handleImageUpload = (e) => {
   let files;
   if(e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if(e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      const img = new window.Image();
      img.src = reader.result;
      img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;

        const maxWidth = 500;
        const maxHeight = 500;

        const aspectRatio = imgWidth / imgHeight;
        
        let newWidth = imgWidth;
        let newHeight = imgHeight;
        if (imgWidth > maxWidth) {
          newWidth = maxWidth;
          newHeight = newWidth / aspectRatio;
        }
        if (newHeight > maxHeight) {
          newHeight = maxHeight;
          newWidth = newHeight * aspectRatio;
        }
        const resizedImage = new Konva.Image({
          image: img,
          x: 0,
          y: 0,

          width: newWidth,
          height: newHeight,
        });

        setImage(resizedImage);
        onImageLoad(resizedImage);
      };
    };
  };


    
   

  // // 파일을 불러와서 이미지 추가하는 함수
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const img = new window.Image();
  //       img.src = reader.result;
  //       img.onload = () => {
  //         const imgWidth = img.width;
  //         const imgHeight = img.height;

  //         const maxWidth = 500;
  //         const maxHeight = 500;

  //         const aspectRatio = imgWidth / imgHeight;

  //         let newWidth = imgWidth;
  //         let newHeight = imgHeight;
  //         if (imgWidth > maxWidth) {
  //           newWidth = maxWidth;
  //           newHeight = newWidth / aspectRatio;
  //         }
  //         if (newHeight > maxHeight) {
  //           newHeight = maxHeight;
  //           newWidth = newHeight * aspectRatio;
  //         }
  //         const resizedImage = new Konva.Image({
  //           image: img,
  //           x: 0,
  //           y: 0,
  //           width: newWidth,
  //           height: newHeight,
  //         });

  //         setImage(resizedImage);
  //       };
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  useEffect(() => {
    if (image) {
      const stage = new Konva.Stage({
        container: 'canvas', // 캔버스가 그려질 컨테이너의 ID
        width: 340,
        height: 492,
      });

      const layer = new Konva.Layer();
      stage.add(layer);

      layer.add(image);

      layer.draw();
      
      stageRef.current = stage;
    }
    
  }, [image]);

  
  

  return (
    <>
      <s.Wrapper id='canvas'/>
      <input type="file" accept="image/*" 
        onChange={() => {
            handleImageUpload();
        }} style={{display: 'none'}} />
    </>
  );
};


export default CreateCanvas;