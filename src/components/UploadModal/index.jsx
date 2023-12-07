import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as s from './upload.style.js';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import MyCollections from '../../Temp/mypage/mydesign/MyCollections.js';
import MyDesigns from '../../Temp/mypage/mydesign/MyDesigns.js';
import Collections from './Collections/index.jsx';

import {
  isCollectionClickedState, selectedArtistState,
  selectedCollectionState, selectedDesignState,
  isDesignClickedState, stepIndexState,
} from '../../recoil/postingAtoms.js';
import DesignsForPosting from './Designs/index.jsx';

Modal.setAppElement('#root');

const UploadModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    zIndex: 10,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    background: 'white',
    overflow: 'auto',
    width: 'fit-content',
    height: 'fit-content',
    margin: 'auto auto',
    WebkitOverflowScrolling: 'touch',
    border: 'none',
    borderRadius: '15px',
    outline: 'none',
    zIndex: 10,
  },
};

const SelectCollection = () => {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [isSecondaryModalOpened, setIsSecondaryModalOpened] = useState(false);
  
  const [ isCollectionClicked, setIsCollectionClicked ] = useRecoilState(isCollectionClickedState);
  const [ selectedCollection, setSelectedCollection ] = useRecoilState(selectedCollectionState);

  const [ isMouseOver, setIsMouseOver] = useState(false);


  const [ selectedArtist, setSelectedArtist ] = useRecoilState(selectedArtistState);

  const [ selectedDesign, setSelectedDesign ] = useRecoilState(selectedDesignState);
  const [ isDesignClicked, setIsDesignClicked ] = useRecoilState(isDesignClickedState);

  const [ stepIndex, setStepIndex ] = useRecoilState(stepIndexState);

  const resetArtist = useResetRecoilState(selectedArtistState);
  const resetCollection = useResetRecoilState(selectedCollectionState);
  const resetDesign = useResetRecoilState(selectedDesignState);




  const onClickArtist = (artistName) => {
    setSelectedArtist(artistName);
    setIsCollectionClicked(false);
  };

  const onClickStep1 = () => {
    setIsCollectionClicked(false);
    setIsDesignClicked(false);
    setStepIndex(1);
    resetCollection(selectedCollectionState);
    resetDesign(selectedDesignState);
  };

  const onClickStep2 = () => {
    setIsCollectionClicked(true);
    setIsDesignClicked(false);
    resetDesign(selectedDesignState);
    setStepIndex(2);
  };

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const openModal = (index) => {

  };

  const closeModal = () => {
  };

  return (
    <>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={UploadModalStyle}
      >
        <s.Wrapper>
          <s.HeaderLabelWrapper>
            <s.HeaderLabel
              onClick={onClickStep1}
              id={ stepIndex >= 1 ? 'active' : ''}
              className={ isCollectionClicked ? 'active' : '' }
              disabled={ !isCollectionClicked }
            >컬렉션 선택</s.HeaderLabel>
            <span> {'>'} </span>
            <s.HeaderLabel
              onClick={onClickStep2}
              id={ stepIndex >= 2 ? 'active' : ''}
              className={ isDesignClicked ? 'active' : ''}
              disabled={ !isDesignClicked }
            >도안 선택</s.HeaderLabel>
            <span> {'>'} </span>
            <s.HeaderLabel
              id={ stepIndex === 3 ? 'active' : ''}
            >업로드</s.HeaderLabel>
          </s.HeaderLabelWrapper>
          { !isCollectionClicked ? 
          <s.ArtistTabWrapper>
            {MyCollections.map((item, index) => (
              <s.ArtistTab
                key={index}
                onClick={() => onClickArtist(item.artistName) }
                className={item.artistName === selectedArtist ? 'active' : ''}
              >
                {item.artistName}
              </s.ArtistTab>
            ))}
          </s.ArtistTabWrapper>
          : null }
          <s.ContentsWrapper>
          { !isCollectionClicked ? (
            <s.CollectionCardsWrapper >
            { MyCollections.find( (item) => item.artistName === selectedArtist)?.myCollections.map((item, index) => (
              <Collections
                key={index}
                selectedArtist={selectedArtist}
                albumName={item.collectionName}
                albumJacket={item.fileUrl}
                thisCollection={item}
              />
             ))}
            </s.CollectionCardsWrapper>
          ) : (
            <>
              { !isDesignClicked ? (
                <s.DesignsWrapper>
                  <s.DesignListWrapper>
                    { MyCollections.find( (item) => item.artistName === selectedArtist)?.myCollections.find( (item) => item.collectionName === selectedCollection)?.myDesigns.map((item, index) => (
                      <DesignsForPosting
                        key={index}
                        thisDesign={item}
                        design={item.fileUrl}
                      />
                    ))}
                  </s.DesignListWrapper>
                </s.DesignsWrapper>
              ) : (
                <>
                  <s.UploadStepWrapper>
                    <s.SelectedDesignWrapper
                      onMouseOut={onHandleMouseOut}
                      onMouseOver={onHandleMouseOver}
                      ismouseOver={isMouseOver}
                    >
                      <s.SelectedDesignImage src={selectedDesign.fileUrl} alt='선택된 디자인' />
                      {isMouseOver && (
                       <s.SelectedDesignInfoWrapper>
                          <s.SelectedDesignInfo>
                            {selectedDesign.designCardName}
                            <br />
                            {selectedDesign.saveDate}
                          </s.SelectedDesignInfo>
                        </s.SelectedDesignInfoWrapper> 
                      )}
                    </s.SelectedDesignWrapper>
                    <s.SelectedDesignContentsWrapper>
                      <s.SelectedDesignContents>
                        소속사 :  {MyCollections.find( (item) => item.artistName === selectedArtist)?.enterComp}
                      </s.SelectedDesignContents>
                      <s.SelectedDesignContents>
                        아티스트 :  {selectedArtist}
                      </s.SelectedDesignContents>
                      <s.SelectedDesignContents>
                        컬렉션 :  {selectedCollection}
                      </s.SelectedDesignContents>
                      <s.SelectedDesignContents>
                        멤버 : {selectedDesign.member}

                      </s.SelectedDesignContents>
                    </s.SelectedDesignContentsWrapper>
                  </s.UploadStepWrapper>
                  <s.PostButton>
                    올리기
                  </s.PostButton>
                </>
              )}
            </>
          )}
          </s.ContentsWrapper>
        </s.Wrapper>
      </Modal>

    </>
  );
};
export default SelectCollection;
