import React, { useEffect, useState } from 'react';
import * as s from './style';
import { useRecoilState } from 'recoil';
import {
  selectedCollectionState,
  isCollectionClickedState,
  selectedArtistState,
  selectedDesignState,
  isDesignClickedState,
  stepIndexState,
} from '../../../recoil/postingAtoms';
import MyCollections from '../../../Temp/mypage/mydesign/MyCollections.js';
import mypageAPI from '../../../api/mypage/mypageAPI.js';

const DesignsForPosting = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [selectedDesign, setSelectedDesign] =
    useRecoilState(selectedDesignState);
  const [isDesignClicked, setIsDesignClicked] =
    useRecoilState(isDesignClickedState);
  const [stepIndex, setStepIndex] = useRecoilState(stepIndexState);
  const [selectedCollection, setSelectedCollection] = useRecoilState(
    selectedCollectionState
  );
  const [myPolaroids, setMyPolaroids] = useState([]);

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const onClickDesign = (item) => {
    setSelectedDesign(item);
    setIsDesignClicked(true);
    setStepIndex(3);
    console.log(selectedCollection);
  };
  const getMyPolaroids = () => {
    mypageAPI
      .getMyPolaroids(decodeURI(String(selectedCollection)))
      .then((data) => {
        setMyPolaroids(data?.myPolariodBackupList);
      });
  };

  useEffect(() => {
    getMyPolaroids();
  }, []);

  return (
    <s.DesignsWrapper>
      <s.DesignListWrapper>
        {myPolaroids.map((item) => (
          <s.DesignImageFrame
            onMouseOut={onHandleMouseOut}
            onMouseOver={onHandleMouseOver}
            ismouseOver={isMouseOver}
            onClick={() => {
              onClickDesign(item);
              console.log(item);
            }}
          >
            <s.DesignImage src={item.polaroid} alt='polaroid' />
            {isMouseOver && (
              <s.DesignInfoWrapper>
                <s.DesignCardInfo>
                  {/* {thisDesign.designCardName}
                  <br /> */}
                  활성일:
                  <br />
                  {item.saveDateTime?.slice(0, item.saveDateTime?.indexOf('T'))}
                </s.DesignCardInfo>
              </s.DesignInfoWrapper>
            )}
          </s.DesignImageFrame>
        ))}
      </s.DesignListWrapper>
    </s.DesignsWrapper>
  );
};
export default DesignsForPosting;
