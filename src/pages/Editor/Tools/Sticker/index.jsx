import * as s from './style';
// import { fabric } from 'fabric';
import { useEffect, useState } from 'react';
import { 
  stickerData1, stickerData2, stickerData3, ConfettisBlue, CP, stickerData6, ment, maskingTapes,
  CSv, CGd, CXmas, CYo, Vintage, Jewel,
} from './stickerData';
// import Konva from 'konva';

import { fabric } from 'fabric';

const Stickers = ({ 
  canvas,
  image,
}) => {

  const [ stickerTab, setStickerTab ] = useState('컨페티');

  const stickerTabsList = ['컨페티', '픽셀', '텍스트', '빈티지', '보석', '마스킹테이프','로고',];
  const stickerTabs = stickerTabsList.sort();
  const [ colorTab, setColorTab ] = useState('yo');

  const colorTabs = [
    { 
      name: 'yo',
      color: '#ff7700',
    },
    {
      name: 'purple',
      color: '#C4AFFF',
    },
    {
      name: 'xmas',
      color: '#00870b',
    },
    {
      name: 'silver',
      color: '#E0E0E0',
    },
    {
      name: 'gold',
      color: '#ddbc01',
    },
  ]


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
    const isJewel = spec === 'jewel'

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
      img.scaleToWidth(170);
    } else if(isRibbonM) {
      img.scaleToWidth(120);
    } else if(isRibbonS) {
      img.scaleToWidth(75);
    } else if(isL) {
      img.scaleToWidth(150);
    } else if( isJewel ){
      img.scaleToWidth(50);
    } else {
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
    <s.Wrapper>
      <s.StickerTabsWrapper>
        {stickerTabs.map((tab) => (
          <s.StickerTab
            key={tab}
            onClick={() => setStickerTab(tab)}
            className={stickerTab === tab ? 'active' : ''}
          >
            {tab}
          </s.StickerTab>
        ))}
      </s.StickerTabsWrapper>
        { stickerTab === '컨페티' && (
          <>
          <s.ColorTabWrapper>
            {/* <s.ColorTabTitle>색상</s.ColorTabTitle> */}
            {colorTabs.map((tab) => (
                <s.ColorTab
                  key={tab.name}
                  onClick={() => setColorTab(tab.name)}
                  className={colorTab === tab.name ? 'active' : ''}
                  color={tab.color}
                />
            ))}
          </s.ColorTabWrapper>
          <s.StickerListC>
          { colorTab === 'yo' && (
            <>
              {CYo.map( (item) => (
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
            </>
          )}
          { colorTab === 'purple' && (
            <>
            {CP.map( (item) => (
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
            </>
          )}
          { colorTab === 'xmas' && (
            <>
            {CXmas.map( (item) => (
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
            </>
          )}
          { colorTab === 'silver' && (
            <>
            {CSv.map( (item) => (
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
            </>
          )}
          { colorTab === 'gold' && (
            <>
            {CGd.map( (item) => (
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
            </>
          )}
          </s.StickerListC>
          </>
        )}
        { stickerTab === '픽셀' && (
          <s.StickerList>
            
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
                      width='50px'
                    />
                ))
              )
            )}
          </s.StickerList>
        )}
        { stickerTab === '텍스트' && (
          <s.StickerList>
            {ment.map( (item) => (
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
            </s.StickerList>
        )}
        { stickerTab === '마스킹테이프' && (
          <s.StickerList>
            {maskingTapes.map( (item) => (
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
          </s.StickerList>
        )}
        { stickerTab === '로고' && (
          <s.StickerList>
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
          </s.StickerList>
        )}
        { stickerTab === '빈티지' && (
          <s.StickerList>
            {Vintage.map( (item) => {
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
          </s.StickerList>
        )}
        { stickerTab === '보석' && (
          <s.StickerList>
            {Jewel.map( (item) => {
          return (
            (item.spec === 'particlesS' ? (
              <img
                key={item.id}
                src={item.fileUrl}
                onClick={(e) => handleImageClick(e)}
                data-spec={item.spec}
                alt='sticker'
                width='60px'
                height='auto' />
            ) : (
              <img
                key={item.id}
                src={item.fileUrl}
                onClick={(e) => handleImageClick(e)}
                data-spec={item.spec}
                alt='sticker'
                height='auto'
                width='70px'
              />
            ))
          );
        }
        )}
          </s.StickerList>
        )}
        {/* <button onClick={handleDelete}>삭제</button>
        
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
        )} */}
    </s.Wrapper>
  );
};
export default Stickers;