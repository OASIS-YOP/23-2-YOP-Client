import React, { useState } from 'react';
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


const DesignsForPosting = ({
  thisDesign,
  design,
}) => {

  const [ isMouseOver, setIsMouseOver] = useState(false);
  const [ selectedDesign, setSelectedDesign ] = useRecoilState(selectedDesignState);
  const [ isDesignClicked, setIsDesignClicked ] = useRecoilState(isDesignClickedState);
  const [ stepIndex, setStepIndex ] = useRecoilState(stepIndexState);


  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const onClickDesign = () => {
    setSelectedDesign(thisDesign);
    setIsDesignClicked(true);
    setStepIndex(3);
    console.log(thisDesign);
  }



return(
        <s.DesignImageFrame
          onMouseOut={onHandleMouseOut}
          onMouseOver={onHandleMouseOver}
          ismouseOver={isMouseOver}
          onClick={() => onClickDesign(design)}
        >
          <s.DesignImage 
            src={design}
            alt='polaroid'
          />
          {isMouseOver && (
            <s.DesignInfoWrapper>
              <s.DesignCardInfo>
                {thisDesign.designCardName}
                <br/>
                {thisDesign.saveDate}
              </s.DesignCardInfo>
            </s.DesignInfoWrapper>
          )}
        </s.DesignImageFrame>
)

}
export default DesignsForPosting;