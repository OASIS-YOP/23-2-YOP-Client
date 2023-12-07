import React, { useState } from 'react';
import * as s from './style';
import { useRecoilState } from 'recoil';
import { 
  selectedCollectionState,
  isCollectionClickedState,
  stepIndexState,
} from '../../../recoil/postingAtoms';
import MyCollections from '../../../Temp/mypage/mydesign/MyCollections.js';


const Collections = ({ thisCollection, selectedArtist, albumName, albumJacket }) => {
  const [ isMouseOver, setIsMouseOver] = useState(false);
  const [ isCollectionClicked, setIsCollectionClicked ] = useRecoilState(isCollectionClickedState);
  const [ selectedCollection, setSelectedCollection ] = useRecoilState(selectedCollectionState);
  const [ stepIndex, setStepIndex ] = useRecoilState(stepIndexState);

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const onClickCollection = () => {
    setIsCollectionClicked(true);
    setSelectedCollection(albumName);
    setStepIndex(2);
    console.log(albumName);
  };


  return (
    <>
    <s.CollectionCard 
      onMouseOut={onHandleMouseOut}
      onMouseOver={onHandleMouseOver}
      ismouseOver={isMouseOver}
    >
      <s.CollectionCardImageWrapper
        onClick={onClickCollection}
      >
      <s.CollectionCardImage
        src={albumJacket}
        alt={`Collection Card ${albumName}`}
      />    
       { isMouseOver && (
      <s.CollectionInfoWrapper >
        <s.CollectionCardInfo>
          {albumName}
          <br />
          {thisCollection.myDesigns.length}/30
        </s.CollectionCardInfo>
      </s.CollectionInfoWrapper>
    )}  
    </s.CollectionCardImageWrapper>
    </s.CollectionCard>
    </>
  );
}

export default Collections;