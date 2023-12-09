import { useEffect, useState } from 'react';
import * as s from './style';
import CollectionDetails from './CollectionDetails';
import Lock from '../../../assets/Lock.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';
import Modal from 'react-modal';
import CodeInputModal from '../../../components/CodeInputModal';

const Collections = () => {
  const [artistList, setArtistList] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(0);
  const [allCollection, setAllCollection] = useState([]);
  const [activatedCollection, setActivatedCollection] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [photocardList, setPhotocardList] = useState([]);
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [isOpenCodeInputModal, setIsOpenCodeInputModal] = useState(false);

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    setIsCollectionClicked(false);
  };

  const getMyCollectionArtistTab = () => {
    mypageAPI.getMyCollectionArtistTab().then((data) => {
      if (data.collectionArtistList.length === 0) {
        return;
      } else {
        setSelectedArtist(data?.collectionArtistList[0]?.artistId);
        setArtistList(data?.collectionArtistList);
      }
    });
  };

  const getAllCollection = () => {
    mypageAPI.getAllCollection(selectedArtist).then((data) => {
      console.log('모든 컬렉션', data?.allCollectionList);
      setAllCollection(data?.allCollectionList);
    });
  };
  const getMyActiveCollection = () => {
    mypageAPI.getMyActiveCollection(selectedArtist).then((data) => {
      console.log(data?.activeCollectionList);
      setActivatedCollection(data?.activeCollectionList);
    });
  };

  const artists = artistList.map((item) => {
    return artistList.length !== 0 ? (
      <s.ArtistsTab
        key={`collectionArtist_${item?.artistId}`}
        onClick={() => onClickArtist(item.artistId)}
        className={item.artistId === selectedArtist ? 'active' : ''}
      >
        {item.groupName}
      </s.ArtistsTab>
    ) : (
      {}
    );
  });
  // 모달 스타일
  const CodeInputModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: 999,
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
      borderRadius: '15px',
      outline: 'none',
      zIndex: 10,
    },
  };

  const openCodeInputButton = () => {
    setIsOpenCodeInputModal(true);
  };

  const closeCodeInputButton = () => {
    setIsOpenCodeInputModal(false);
  };
  useEffect(() => {
    getMyCollectionArtistTab();
  }, []);

  useEffect(() => {
    selectedArtist && getAllCollection();
    getMyActiveCollection();
  }, [selectedArtist]);

  useEffect(() => {
    getMyActiveCollection();
  }, [isOpenCodeInputModal]);

  //컬렉션 카드 컴포넌트
  const CollectionCard = ({
    setSelectedCollection,
    setIsCollectionClicked,
    albumJacket,
    albumName,
    activatedCollection,
  }) => {
    const [ismouseOver, setIsMouseOver] = useState(false);
    const [isActiveMouseOver, setIsActiveMouseOver] = useState(false);
    const [myPhotocardQuant, setMyPhotocardQuant] = useState(null);

    const fetchPhotocardQuant = async (album) => {
      try {
        const data = await mypageAPI.getActivePhotocardQuant(decodeURI(album));
        setMyPhotocardQuant(data.activeCardQuant);
      } catch (error) {
        console.error('Failed to fetch photocard quantity', error);
      }
    };
    //비활성화컬렉션
    const onHandleMouseOver = (e) => {
      e.preventDefault();
      setIsMouseOver(true);
    };
    const onHandleMouseOut = (e) => {
      e.preventDefault();
      setIsMouseOver(false);
    };

    //활성화컬렉션
    const onHandleActiveMouseOver = (e) => {
      e.preventDefault();
      setIsActiveMouseOver(true);
    };

    const onHandleActiveMouseOut = (e) => {
      e.preventDefault();
      setIsActiveMouseOver(false);
    };

    const onClickCollection = (albumName) => {
      setIsCollectionClicked(true);
      setSelectedCollection(albumName);
    };

    const activeCollectionData = activatedCollection.find(
      (item) => item.albumName === albumName
    );

    const isActive = Boolean(activeCollectionData);
    useEffect(() => {
      // 마우스 오버 시 API 호출
      if (isActiveMouseOver) {
        fetchPhotocardQuant(albumName);
      }
    }, [isActiveMouseOver, albumName]); // 의존성 배열에 ismouseOver와 albumName을 추가

    return (
      <s.CollectionCardWrapper styled={{ cursor: 'pointer' }}>
        {isActive ? (
          // 활성화된 컬렉션
          <>
            <s.ActivatedCollectionCardWrapper
              onClick={() => onClickCollection(albumName)}
              onMouseOver={onHandleActiveMouseOver}
              onMouseOut={onHandleActiveMouseOut}
            >
              <s.CollectionCardImage src={albumJacket} alt='collection' />
              {isActiveMouseOver && (
                <s.CollectionInfoWrapper>
                  <s.CollectionCardInfo>
                    {albumName}
                    <br />
                    활성일 : {activeCollectionData.activeDateTime}
                    <br />
                    {/* 수정요망 */}
                    수집률 :{' '}
                    {Math.round(
                      (1 / activeCollectionData.photoCardQuant) * 100
                    )}
                    %
                    <br />
                    {/* 내가가진포카수 구해서 넣어야함 */}
                    포카수 : {myPhotocardQuant}/
                    {activeCollectionData.photoCardQuant}장
                  </s.CollectionCardInfo>
                </s.CollectionInfoWrapper>
              )}
            </s.ActivatedCollectionCardWrapper>
          </>
        ) : (
          //비활성화된 컬렉션
          <>
            <s.InActivatedCollectionCardImage
              src={albumJacket}
              alt='collection'
              onMouseOut={onHandleMouseOut}
            />
            {ismouseOver ? (
              <>
                <s.InputCodeButton
                  onMouseOver={onHandleMouseOver}
                  onClick={openCodeInputButton}
                >
                  코드 입력
                </s.InputCodeButton>
                <Modal
                  isOpen={isOpenCodeInputModal}
                  style={CodeInputModalStyle}
                  onRequestClose={closeCodeInputButton} // 오버레이나 esc를 누르면 핸들러 동작
                  ariaHideApp={false}
                >
                  <CodeInputModal
                    albumName={albumName}
                    closeCodeInputButton={closeCodeInputButton}
                  />
                </Modal>
              </>
            ) : (
              <s.InActivatedLockWrapper>
                <img src={Lock} alt='lock' onMouseOver={onHandleMouseOver} />
              </s.InActivatedLockWrapper>
            )}
          </>
        )}
      </s.CollectionCardWrapper>
    );
  };

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        {selectedArtist !== 0 ? (
          !isCollectionClicked ? (
            <s.CollectionCardsContainer>
              {allCollection &&
                allCollection.map((item) => (
                  <CollectionCard
                    setSelectedCollection={setSelectedCollection}
                    setIsCollectionClicked={setIsCollectionClicked}
                    albumJacket={item.albumJacket}
                    albumName={item.albumName}
                    activatedCollection={activatedCollection}
                  />
                ))}
            </s.CollectionCardsContainer>
          ) : (
            <CollectionDetails
              selectedArtist={selectedArtist}
              selectedCollection={selectedCollection}
              setIsCollectionClicked={setIsCollectionClicked}
              openCodeInputButton={openCodeInputButton}
              isOpenCodeInputModal={isOpenCodeInputModal}
              CodeInputModalStyle={CodeInputModalStyle}
              setIsOpenCodeInputModal={setIsOpenCodeInputModal}
            />
          )
        ) : (
          <div
            style={{
              color: 'gray',
              fontSize: '18px',
              fontWeight: '600',
              width: '100%',
              height: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '30px',
            }}
          >
            마음에 드는 아티스트를 선택하고, 컬렉션을 확인하세요!
          </div>
        )}
      </s.Wrapper>
    </>
  );
};

export default Collections;
