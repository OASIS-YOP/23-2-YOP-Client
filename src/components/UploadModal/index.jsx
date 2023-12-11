import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import * as s from './upload.style.js';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import MyCollections from '../../Temp/mypage/mydesign/MyCollections.js';
import MyDesigns from '../../Temp/mypage/mydesign/MyDesigns.js';
import Collections from './Collections/index.jsx';
// import Collections from '../../pages/MyPage/Collections';
import mypageAPI from '../../api/mypage/mypageAPI';

import {
  isCollectionClickedState,
  selectedArtistState,
  selectedCollectionState,
  selectedDesignState,
  isDesignClickedState,
  stepIndexState,
} from '../../recoil/postingAtoms.js';
import DesignsForPosting from './Designs/index.jsx';

const SelectCollection = ({ closeUploadModal, artistId }) => {
  const [isSecondaryModalOpened, setIsSecondaryModalOpened] = useState(false);

  const [isCollectionClicked, setIsCollectionClicked] = useRecoilState(
    isCollectionClickedState
  );
  const [selectedCollection, setSelectedCollection] = useRecoilState(
    selectedCollectionState
  );

  const [isMouseOver, setIsMouseOver] = useState(false);

  // const [selectedArtist, setSelectedArtist] =
  //   useRecoilState(selectedArtistState);
  const [selectedArtist, setSelectedArtist] = useState();
  const [selectedDesign, setSelectedDesign] =
    useRecoilState(selectedDesignState);
  const [isDesignClicked, setIsDesignClicked] =
    useRecoilState(isDesignClickedState);

  const [stepIndex, setStepIndex] = useRecoilState(stepIndexState);

  const resetArtist = useResetRecoilState(selectedArtistState);
  const resetCollection = useResetRecoilState(selectedCollectionState);
  const resetDesign = useResetRecoilState(selectedDesignState);

  // const onClickArtist = (artistId) => {
  //   setSelectedArtist(artistId);
  //   console.log(artistId);
  //   setIsCollectionClicked(false);
  // };

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

  /////////수정//////////

  // const [artistTabList, setArtistTabList] = useState([]);
  const [myPolaroidCollection, setMyPolaroidCollection] = useState([]);
  // const getMyCollectionArtistTab = () => {
  //   mypageAPI.getMyCollectionArtistTab().then((data) => {
  //     setArtistTabList(data.collectionArtistList);
  //     console.log(data);
  //   });
  // };
  // const getMyPolaroidArtistTab = () => {
  //   mypageAPI.getMyPolaroidArtistTab().then((data) => {
  //     if (data?.polaroidArtistTabList.length === 0) {
  //       return;
  //     } else {
  //       setSelectedArtist(data?.polaroidArtistTabList[0]?.artistId);
  //       setArtistTabList(data?.polaroidArtistTabList);
  //       console.log('내도안탭리스트', data?.polaroidArtistTabList);
  //     }
  //   });
  // };

  const getMyPolaroidCollection = () => {
    mypageAPI.getMyPolaroidCollection(artistId).then((data) => {
      setMyPolaroidCollection(data?.collectionsList);
      console.log('내도안컬렉션리스트', data?.collectionsList);
    });
  };

  const onClickPost = () => {
    mypageAPI.uploadPost(selectedDesign.polaroidId).then((data) => {
      console.log(data);
      if (data) {
        window.alert('포스팅되었습니다.');
        onClickStep1();
        closeUploadModal();
        window.location.reload();
      } else {
        window.alert('failed');
      }
    });
  };

  useEffect(() => {
    if (closeUploadModal) {
      onClickStep1();
    }
  }, [closeUploadModal]);

  useEffect(() => {
    getMyPolaroidCollection();
  }, []);
  return (
    <>
      <s.Wrapper>
        <s.HeaderLabelWrapper>
          <s.HeaderLabel
            onClick={onClickStep1}
            id={stepIndex >= 1 ? 'active' : ''}
            className={isCollectionClicked ? 'active' : ''}
            disabled={!isCollectionClicked}
          >
            컬렉션 선택
          </s.HeaderLabel>
          <span> {'>'} </span>
          <s.HeaderLabel
            onClick={onClickStep2}
            id={stepIndex >= 2 ? 'active' : ''}
            className={isDesignClicked ? 'active' : ''}
            disabled={!isDesignClicked}
          >
            도안 선택
          </s.HeaderLabel>
          <span> {'>'} </span>
          <s.HeaderLabel id={stepIndex === 3 ? 'active' : ''}>
            업로드
          </s.HeaderLabel>
        </s.HeaderLabelWrapper>
        <s.ContentsWrapper>
          {myPolaroidCollection?.length > 0 ? (
            <>
              {!isCollectionClicked ? (
                <s.CollectionCardsWrapper>
                  {myPolaroidCollection.map((item, index) => (
                    <Collections
                      key={index}
                      selectedArtist={selectedArtist}
                      albumName={item.albumName}
                      albumJacket={item.albumJacket}
                      thisCollection={item}
                    />
                  ))}
                </s.CollectionCardsWrapper>
              ) : (
                <>
                  {!isDesignClicked ? (
                    <DesignsForPosting />
                  ) : (
                    <>
                      <s.UploadStepWrapper>
                        <s.SelectedDesignWrapper
                          onMouseOut={onHandleMouseOut}
                          onMouseOver={onHandleMouseOver}
                          ismouseOver={isMouseOver}
                        >
                          <s.SelectedDesignImage
                            src={selectedDesign.polaroid}
                            alt='선택된 디자인'
                          />
                          {/* {isMouseOver && (
                            <s.SelectedDesignInfoWrapper>
                              <s.SelectedDesignInfo>
                                {selectedDesign.designCardName}
                                <br />
                                {selectedDesign.saveDate}
                              </s.SelectedDesignInfo>
                            </s.SelectedDesignInfoWrapper>
                          )} */}
                        </s.SelectedDesignWrapper>
                      </s.UploadStepWrapper>
                      <s.PostButton onClick={onClickPost}>올리기</s.PostButton>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <s.NoCollectionWrapper
                style={{
                  color: 'gray',
                  fontFamily: 'Noto Sans KR',
                  fontWeight: '600',
                  fontSize: '18px',
                  width: '100%',
                  height: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <s.NoCollectionText>저장된 도안이 없습니다.</s.NoCollectionText>
              </s.NoCollectionWrapper>
            </>
          )}
        </s.ContentsWrapper>
      </s.Wrapper>
    </>
  );
};
export default SelectCollection;
