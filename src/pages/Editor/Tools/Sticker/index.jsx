import * as s from './style';
// import { fabric } from 'fabric';
import { useState } from 'react';
import { stickerData1, stickerData2, stickerData3, stickerData4, stickerData5, stickerData6, stickerData7 } from './stickerData';


const Stickers = ({  }) => {


  // const [onButtonClicked, setOnButtonClicked] = useState(0);

  // const onClickButton = (index) => {
  //   setOnButtonClicked(index);
  // };


  // const stickerMenuDataList = [
  //   {
  //     id: 1,
  //     label: 'ST1',
  //     function: () => (
  //       <s.StickerList>
  //         {stickerData1.map( (stickerData1, index) => (
  //           ( stickerData1.spec === 'particlesS' ? (          
  //             <img
  //               key={index}
  //               src={stickerData1.src} onClick={(e) => handleImageClick(e)}
  //               data-spec={stickerData1.spec} 
  //               width='50px'
  //               height='auto'
  //             />
  //             ):( <img
  //                   key={index}
  //                   src={stickerData1.src} onClick={(e) => handleImageClick(e)}
  //                   data-spec={stickerData1.spec}
  //                   height='auto'
  //                   width='130px'
  //                 />
  //             ))
  //           )
  //         )}
  //       </s.StickerList>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     label: 'ST2',
  //     function: () => (
  //       <s.StickerList>
  //         {stickerData2.map( (stickerData2, index) => (
  //           ( stickerData2.spec === 'm' ? (
  //             <img
  //               key={index}
  //               src={stickerData2.src} onClick={(e) => handleImageClick(e)}
  //               data-spec={stickerData2.spec}
  //               width='150px'
  //               height='auto'
  //             />
  //             ):( <img
  //                   key={index}
  //                   src={stickerData2.src} onClick={(e) => handleImageClick(e)}
  //                   data-spec={stickerData2.spec}
  //                   width='50px'
  //                 />
  //             ))
  //           )
  //         )}
  //       </s.StickerList>
  //     ),

  //   },

  // ];



  //////////////////////// 스티커 이미지 클릭시 캔버스에 추가하는 함수 ////////////////////////

  // const handleImageClick = (e) => {

  //   const { offsetX, offsetY } = e.nativeEvent;
  //   const imageUrl = e.target.src;
  //   const spec = e.target.dataset.spec;

  //   const isParticlesS = spec === "particlesS";
  //   const isPrticlesM = spec === "particlesM";
  //   const isL = spec === "L";
  //   const isP = spec === "p";
  //   const isRibbonL = spec === "ribbonL";
  //   const isRibbonM = spec === "ribbonM";
  //   const isRibbonS = spec === "ribbonS";

    // const frame = canvas.getObjects().find((object) => object.class === 'frame');
    // frame이라는 class를 가진 객체를 찾아서 frame에 할당

  // fabric.Image.fromURL(imageUrl, function (img) {
  //   img.set({
  //     left: offsetX - img.width / 1000,
  //     top: offsetY - img.height / 1000,
  //     evented: true,
  //     class: 'sticker', // sticker라는 class를 추가
  //     svgViewportTransformation: true,
  //   });

  //   if (isParticlesS) {
  //     img.scaleToWidth(30);
  //   } else if(isP) {
  //     img.scaleToWidth(50);
  //   } else if(isPrticlesM) {
  //     img.scaleToWidth(50);
  //   } else if(isRibbonL) {
  //     img.scaleToWidth(150);
  //   } else if(isRibbonM) {
  //     img.scaleToWidth(65);
  //   } else if(isRibbonS) {
  //     img.scaleToWidth(50);
  //   } else if(isL) {
  //     img.scaleToWidth(150);
  //   } else{
  //     img.scaleToWidth(100);
  //   }

  //   canvas.add(img);

  //   if (frame) {
  //     frame.sendToBack();
  //   } // frame이 존재하면 frame을 뒤로 보냄
    
  //   canvas.renderAll();
  // });
  // };

  return (
    <s.StickerList> 
      {stickerData4.map( (stickerData4, index) => (
          ( stickerData4.spec === 'ribbonL' ? (
            <img
              key={index}
              src={stickerData4.src} 
              // onClick={(e) => handleImageClick(e)}
              data-spec={stickerData4.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={index}
                  src={stickerData4.src} 
                  // onClick={(e) => handleImageClick(e)}
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
              // onClick={(e) => handleImageClick(e)}
              data-spec={stickerData5.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={index}
                  src={stickerData5.src} 
                  // onClick={(e) => handleImageClick(e)}
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
              // src={stickerData6.src}onClick={(e) => handleImageClick(e)}
              data-spec={stickerData6.spec}
              alt='sticker'
              width='150px'
              height='auto'
            />
            ):( <img
                  key={index}
                  src={stickerData6.src} 
                  // onClick={(e) => handleImageClick(e)}
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
            // onClick={(e) => handleImageClick(e)}
            data-spec={stickerData7.spec} 
            alt='sticker'
            width='50px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData7.src} 
                // onClick={(e) => handleImageClick(e)}
                data-spec={stickerData7.spec}
                alt='sticker'
                height='auto'
                width='130px'
              />
          ))
        )
      )}
      {stickerData1.map( (stickerData1, index) => (
        ( stickerData1.spec === 'particlesS' ? (          
          <img
            key={index}
            src={stickerData1.src} 
            // onClick={(e) => handleImageClick(e)}
            data-spec={stickerData1.spec} 
            alt='sticker'
            width='50px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData1.src} 
                // onClick={(e) => handleImageClick(e)}
                data-spec={stickerData1.spec}
                alt='sticker'
                height='auto'
                width='130px'
              />
          ))
        )
      )}
      {stickerData2.map( (stickerData2, index) => (
        ( stickerData2.spec === 'm' ? (
          <img
            key={index}
            src={stickerData2.src} 
            // onClick={(e) => handleImageClick(e)}
            data-spec={stickerData2.spec}
            alt='sticker'
            width='150px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData2.src} 
                // onClick={(e) => handleImageClick(e)}
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
            // onClick={(e) => handleImageClick(e)}
            data-spec={stickerData3.spec}
            alt='sticker'
            width='150px'
            height='auto'
          />
          ):( <img
                key={index}
                src={stickerData3.src} 
                // onClick={(e) => handleImageClick(e)}
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