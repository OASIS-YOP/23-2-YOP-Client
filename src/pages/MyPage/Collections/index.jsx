import { useEffect, useState } from 'react';
import * as s from './style';
import CollectionDetails from './CollectionDetails';
import Lock from '../../../assets/Lock.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';

const Collections = () => {
  const [artistList, setArtistList] = useState([]);
  const [isActivated, setIsActivated] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState();
  const [allCollection, setAllCollection] = useState([]);
  const [activatedCollection, setActivatedCollection] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [photocardList, setPhotocardList] = useState([]);
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [userId, setUserId] = useState(1);

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    setIsCollectionClicked(false);
  };

  const getMyCollectionArtistTab = () => {
    mypageAPI.getMyCollectionArtistTab(userId).then((data) => {
      setSelectedArtist(data.collectionArtistList[0].artistId);
      setArtistList(data.collectionArtistList);
    });
  };

  const getAllCollection = () => {
    mypageAPI.getAllCollection(userId, selectedArtist).then((data) => {
      console.log('모든 컬렉션', data.allCollectionList);
      setAllCollection(data.allCollectionList);
    });
  };
  const getMyActiveCollection = () => {
    mypageAPI.getMyActiveCollection(userId, selectedArtist).then((data) => {
      console.log(data.activeCollectionList);
      setActivatedCollection(data.activeCollectionList);
    });
  };

  const artists = artistList.map((item) => {
    return (
      <s.ArtistsTab
        key={`collectionArtist_${item?.artistId}`}
        onClick={() => onClickArtist(item.artistId)}
        className={item.artistId === selectedArtist ? 'active' : ''}
      >
        {item.groupName}
      </s.ArtistsTab>
    );
  });

  useEffect(() => {
    getMyCollectionArtistTab();
  }, []);

  useEffect(() => {
    getAllCollection();
    getMyActiveCollection();
  }, [selectedArtist]);

  // useEffect(() => {}, [selectedCollection]);

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        {!isCollectionClicked ? (
          <s.CollectionCardsContainer>
            {allCollection &&
              allCollection.map((item) => {
                return (
                  <CollectionCard
                    selectedCollection={selectedCollection}
                    setSelectedCollection={setSelectedCollection}
                    setIsCollectionClicked={setIsCollectionClicked}
                    albumJacket={item.albumJacket}
                    albumName={item.albumName}
                    activatedCollection={activatedCollection}
                  />
                );
              })}
          </s.CollectionCardsContainer>
        ) : (
          <CollectionDetails
            selectedArtist={selectedArtist}
            selectedCollection={selectedCollection}
            setIsCollectionClicked={setIsCollectionClicked}
          />
        )}
      </s.Wrapper>
    </>
  );
};

//컬렉션 카드 컴포넌트
const CollectionCard = ({
  // selectedCollection,
  setSelectedCollection,
  setIsCollectionClicked,
  albumJacket,
  albumName,
  activatedCollection,
}) => {
  const [ismouseOver, setIsMouseOver] = useState(false);
  const [isActiveMouseOver, setIsActiveMouseOver] = useState(false);

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

  return (
    <s.CollectionCardWrapper styled={{ cursor: 'pointer' }}>
      {activatedCollection.map((item) =>
        albumName === item.albumName ? (
          // 활성화된 컬렉션
          <>
            <s.ActivatedCollectionCardWrapper
              onClick={() => onClickCollection(item.albumName)}
              onMouseOver={onHandleActiveMouseOver}
              onMouseOut={onHandleActiveMouseOut}
            >
              <s.CollectionCardImage src={albumJacket} alt='collection' />
              {isActiveMouseOver && (
                <s.CollectionInfoWrapper>
                  <s.CollectionCardInfo>
                    {albumName}
                    <br />
                    활성일 : {item.activeDateTime}
                    <br />
                    {/* 수정요망 */}
                    수집률 : {Math.round((1 / item.photoCardQuant) * 100)}%
                    <br />
                    {/* 내가가진포카수 구해서 넣어야함 */}
                    포카수 : 1/
                    {item.photoCardQuant}장
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
              <s.InputCodeButton onMouseOver={onHandleMouseOver}>
                코드 입력
              </s.InputCodeButton>
            ) : (
              <s.InActivatedLockWrapper>
                <img src={Lock} alt='lock' onMouseOver={onHandleMouseOver} />
              </s.InActivatedLockWrapper>
            )}
          </>
        )
      )}
    </s.CollectionCardWrapper>
  );
};

export default Collections;
