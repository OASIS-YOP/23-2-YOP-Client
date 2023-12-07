import * as s from './style.js';
import { useEffect, useState } from 'react';
import mypageAPI from '../../../../../api/mypage/mypageAPI.js';

const Designs = ({ selectedCollection }) => {
  const [myPolaroids, setMyPolaroids] = useState([]);

  const getMyPolaroids = () => {
    mypageAPI.getMyPolaroids(decodeURI(selectedCollection)).then((data) => {
      setMyPolaroids(data?.myPolariodBackupList);
    });
  };

  const deleteMyPolaroids = (polaroidId) => {
    mypageAPI.deleteMyPolaroids(polaroidId).then((data) => {
      if (data) {
        window.alert('삭제되었습니다!');
        getMyPolaroids();
      } else {
        window.alert('실패하였습니다.');
      }
    });
  };

  const handleClickDel = (polaroidId) => {
    if (window.confirm('정말 삭제하시겠습니까?'))
      return deleteMyPolaroids(polaroidId);
  };

  // 각 디자인 카드에 대한 호버 상태를 배열로 관리
  const [ismouseOver, setIsMouseOver] = useState(
    Array(myPolaroids.length).fill(false)
  );

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

  useEffect(() => {
    getMyPolaroids();
  }, []);

  return (
    <s.ContentsWrapper>
      <s.DesignListWrapper>
        {myPolaroids.map((item, index) => {
          return (
            <>
              <s.DesignImageFrame
                key={`image_${item.polaroidId}`}
                onMouseOut={() => onHandleMouseOut(index)} // 각 카드마다 인덱스 전달
                onMouseOver={() => onHandleMouseOver(index)} // 각 카드마다 인덱스 전달
                ismouseOver={ismouseOver[index]}
              >
                <s.DesignImage src={item.polaroid} alt='polaroid' />
                {ismouseOver[index] && (
                  <s.DesignInfoWrapper>
                    <s.DesignCardInfo>
                      <s.DeleteButton
                        onClick={() => handleClickDel(item.polaroidId)}
                      >
                        삭제
                      </s.DeleteButton>
                      <br />
                      {/* 휴^^ 여기 날짜순으로 또 해야되네요 */}
                      {item.saveDateTime}
                    </s.DesignCardInfo>
                  </s.DesignInfoWrapper>
                )}
              </s.DesignImageFrame>
            </>
          );
        })}
      </s.DesignListWrapper>
    </s.ContentsWrapper>
  );
};

export default Designs;
