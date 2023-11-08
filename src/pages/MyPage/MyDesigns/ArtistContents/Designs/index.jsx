import * as s from './style.js';
import { useState } from 'react';
import MyDesigns from '../../../../../Temp/mypage/mydesign/MyDesigns';


const Designs = ({selectedArtist, selectedCollection}) => {

  const artistDesigns = MyDesigns.find(
    (artist) => artist.artistName === selectedArtist)?.designs || [];

  // 각 디자인 카드에 대한 호버 상태를 배열로 관리
  const [ismouseOver, setIsMouseOver] = useState(Array(artistDesigns.length).fill(false));

  const onHandleMouseOver = (index) => {
    const newIsMouseOver = [...ismouseOver];
    newIsMouseOver[index] = true;
    setIsMouseOver(newIsMouseOver);
  };

  const onHandleMouseOut = (index) => {
    const newIsMouseOver = [...ismouseOver];
    newIsMouseOver[index] = false;
    setIsMouseOver(newIsMouseOver);
  };

  

  return (

    <s.ContentsWrapper>
      <s.DesignListWrapper>
        { artistDesigns
          .filter((design) => design.collection === selectedCollection)
          .map((design, index) => {
            return  (
            <>
            <s.DesignImageFrame
              key={design.designId + index}
              onMouseOut={() => onHandleMouseOut(index)} // 각 카드마다 인덱스 전달
              onMouseOver={() => onHandleMouseOver(index)} // 각 카드마다 인덱스 전달
              ismouseOver={ismouseOver[index]}
            >
              <s.DesignImage
                src={design.fileUrl}
                alt='design'
              />
              { ismouseOver[index] &&
                <s.DesignInfoWrapper>
                  <s.DesignCardInfo>
                    <s.DeleteButton>
                      삭제
                    </s.DeleteButton>
                    <br/>
                    {/* 휴^^ 여기 날짜순으로 또 해야되네요 */}
                    { design.date }{ design.time}
                  </s.DesignCardInfo>
                </s.DesignInfoWrapper>}
            </s.DesignImageFrame>
            </>
            )
        })}
      </s.DesignListWrapper>


    </s.ContentsWrapper>
  );
}

export default Designs;