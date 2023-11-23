import { useEffect, useState } from 'react';
import * as s from './style';
import CollectionCards from '../../../Temp/mypage/CollectionCards';
import CollectionDetails from './CollectionDetails';
import Lock from '../../../assets/Lock.svg';
import mypageAPI from '../../../api/mypage/mypageAPI';

const Collections = () => {
  const [artistList, setArtistList] = useState([]);
  const [isActivated, setIsActivated] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState();
  const [selectedCollection, setSelectedCollection] = useState('');
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [userId, setUserId] = useState(1);

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    // setIsCollectionClicked(false);
    // console.log(artistName);
  };

  const getMyCollectionArtistTab = () => {
    mypageAPI.getMyCollectionArtistTab(userId).then((data) => {
      setArtistList(data.collectionArtistList);
      setSelectedArtist(data.collectionArtistList[0].artistId);
    });
  };

  const getAllCollection = () => {
    mypageAPI.getAllCollection(userId, 3).then((data) => {
      console.log(data.allCollectionList);
    });
  };
  const getMyActiveCollection = () => {
    mypageAPI.getMyActiveCollection(userId, 3).then((data) => {
      console.log(data.activeCollectionList);
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

  const selectedArtistContents = CollectionCards.find(
    (artist) => artist.artistName === selectedArtist
  );

  useEffect(() => {
    getMyCollectionArtistTab();
    getAllCollection();
    getMyActiveCollection();
  }, []);
  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        {!isCollectionClicked ? (
          <s.CollectionCardsContainer>
            {/* {selectedArtistContents.collections.length !== 0 ? (
              selectedArtistContents.collections.map((item) => {
                return (
                  <CollectionCard
                    selectedCollection={selectedCollection}
                    setSelectedCollection={setSelectedCollection}
                    setIsCollectionClicked={setIsCollectionClicked}
                    collection={item}
                  />
                );
              }) */}
            ) : (<div>컬렉션을 활성화해주세요!</div>
            )}
          </s.CollectionCardsContainer>
        ) : (
          <CollectionDetails
            selectedArtist={selectedArtist}
            selectedCollection={selectedCollection}
            selectedArtistContents={selectedArtistContents}
          />
        )}
      </s.Wrapper>
    </>
  );
};

//컬렉션 카드 컴포넌트
const CollectionCard = ({
  collection,
  setIsCollectionClicked,
  setSelectedCollection,
  selectedCollection,
}) => {
  const [ismouseOver, setIsMouseOver] = useState(false);

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
    setSelectedCollection(collection.albumName);
    console.log(collection.albumName);
    console.log(selectedCollection);
  };

  return (
    <s.CollectionCardWrapper
      styled={collection.isActivated && { cursor: 'pointer' }}
    >
      {collection.isActivated ? (
        // 활성화된 컬렉션
        <>
          <s.ActivatedCollectionCardWrapper
            onClick={onClickCollection}
            onMouseOut={onHandleMouseOut}
          >
            <s.CollectionCardImage src={collection.fileUrl} alt='collection' />
            <s.CollectionInfoWrapper>
              <s.CollectionInfoContainer>
                <s.CollectionInfo>{collection.albumName}</s.CollectionInfo>
                <s.CollectionInfo>
                  활성일 : {collection.activatedDate}
                </s.CollectionInfo>
                <s.CollectionInfo>
                  수집률 :{' '}
                  {(collection.myQuant / collection.photoCardQuant) * 100}%
                </s.CollectionInfo>
                <s.CollectionInfo>
                  포카수 : {collection.myQuant}/{collection.photoCardQuant}장
                </s.CollectionInfo>
              </s.CollectionInfoContainer>
            </s.CollectionInfoWrapper>
          </s.ActivatedCollectionCardWrapper>
        </>
      ) : (
        //비활성화된 컬렉션
        <>
          <s.InActivatedCollectionCardImage
            src={collection.fileUrl}
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
      )}
    </s.CollectionCardWrapper>
  );
};

export default Collections;
