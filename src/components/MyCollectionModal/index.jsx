import * as s from './MyCollectionModal.style';
import mypageAPI from '../../api/mypage/mypageAPI';
import { useEffect, useState } from 'react';
import CollectionDetails from '../../pages/MyPage/Collections/CollectionDetails';

const MyCollectionModal = () => {
  const userId = 1;
  const [selectedArtist, setSelectedArtist] = useState();
  const [artistList, setArtistList] = useState([]);
  const [activatedCollection, setActivatedCollection] = useState([]);
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('');

  const [ismouseOver, setIsMouseOver] = useState(false);

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const onClickCollection = (albumName) => {
    setIsCollectionClicked(true);
  };

  const getMyCollectionArtistTab = () => {
    mypageAPI.getMyCollectionArtistTab(userId).then((data) => {
      setArtistList(data.collectionArtistList);
      setSelectedArtist(data.collectionArtistList[0].artistId);
    });
  };
  const getMyActiveCollection = () => {
    mypageAPI.getMyActiveCollection(userId, selectedArtist).then((data) => {
      console.log(data.activeCollectionList);
      setActivatedCollection(data.activeCollectionList);
    });
  };

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    // setIsCollectionClicked(false);
    // console.log(artistName);
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
    getMyActiveCollection();
  }, [selectedArtist]);
  return (
    <s.Wrapper>
      <s.ModalTitle>내 컬렉션</s.ModalTitle>
      <s.BodyWrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        {!isCollectionClicked ? (
          <s.CollectionCardsContainer>
            {activatedCollection &&
              activatedCollection.map((item) => {
                return (
                  <s.CollectionCardWrapper styled={{ cursor: 'pointer' }}>
                    <s.ActivatedCollectionCardWrapper
                      onClick={onClickCollection}
                      onMouseOut={onHandleMouseOut}
                    >
                      <s.CollectionCardImage
                        src={item.albumJacket}
                        alt='collection'
                      />
                      <s.CollectionInfoWrapper>
                        <s.CollectionInfoContainer>
                          <s.CollectionInfo>{item.albumName}</s.CollectionInfo>
                          <s.CollectionInfo>
                            활성일 : {item.activeDateTime}
                          </s.CollectionInfo>
                          <s.CollectionInfo>
                            {/* 수정요망 */}
                            수집률 : (1 / {item.photoCardQuant} )* 100%
                          </s.CollectionInfo>
                          <s.CollectionInfo>
                            {/* 내가가진포카수 구해서 넣어야함 */}
                            포카수 : 1/
                            {item.photoCardQuant}장
                          </s.CollectionInfo>
                        </s.CollectionInfoContainer>
                      </s.CollectionInfoWrapper>
                    </s.ActivatedCollectionCardWrapper>
                  </s.CollectionCardWrapper>
                );
              })}
          </s.CollectionCardsContainer>
        ) : (
          <CollectionDetails
            selectedArtist={selectedArtist}
            selectedCollection={selectedCollection}
          />
        )}
      </s.BodyWrapper>
    </s.Wrapper>
  );
};

export default MyCollectionModal;
