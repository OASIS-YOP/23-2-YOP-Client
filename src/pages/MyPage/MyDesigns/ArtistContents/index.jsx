import * as s from './style';
import { useEffect, useState } from 'react';
import MyDesignCollection from '../../../../components/MyDesignCollection';
import Designs from './Designs';
import mypageAPI from '../../../../api/mypage/mypageAPI';

const ArtistContents = () => {
  const [artistList, setArtistList] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(0);
  const [myPolaroidCollection, setMyPolaroidCollection] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);

  const getMyPolaroidArtistTab = () => {
    mypageAPI.getMyPolaroidArtistTab().then((data) => {
      if (data.polaroidArtistTabList.length === 0) {
        return;
      } else {
        setSelectedArtist(data?.polaroidArtistTabList[0]?.artistId);
        setArtistList(data?.polaroidArtistTabList);
        console.log('내도안리스트', data?.polaroidArtistTabList);
      }
    });
  };

  const getMyPolaroidCollection = () => {
    mypageAPI.getMyPolaroidCollection(selectedArtist).then((data) => {
      setMyPolaroidCollection(data.collectionsList);
      console.log('내도안컬렉션리스트', data.collectionsList);
    });
  };

  // const artist = MyCollections.find((artist) => artist.artistId);
  // if (!artist) {
  //   return; // Handle the case when artist is not found
  // }
  // const collection = artist.myCollections.find((collection) => collection.collectionId);
  // if (!artist) {
  //   return null; // Handle the case when artist is not found
  // }

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    console.log(selectedArtist);
    setIsCollectionClicked(false);
  };

  const artists = artistList.map((item) => {
    return (
      <s.ArtistsTab
        key={`myPolaroidArtist_${item.artistId}`}
        onClick={() => onClickArtist(item.artistId)}
        className={item.artistId === selectedArtist ? 'active' : ''}
      >
        {item.groupName}
      </s.ArtistsTab>
    );
  });

  useEffect(() => {
    getMyPolaroidArtistTab();
  }, []);

  useEffect(() => {
    getMyPolaroidCollection();
  }, [selectedArtist]);
  return (
    <>
      <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
      <s.ContentsWrapper>
        {!isCollectionClicked ? (
          <s.CollectionListWrapper>
            {myPolaroidCollection.length === 0 ? (
              <div>아티스트의 도안을 꾸미고 저장해보세요!</div>
            ) : (
              myPolaroidCollection.map((item) => (
                <s.MyCollectionWrapper
                  key={`myDesignCollection_${item.albumName}`}
                >
                  <MyDesignCollection
                    albumJacket={item.albumJacket}
                    albumName={item.albumName}
                    setSelectedCollection={setSelectedCollection}
                    setIsCollectionClicked={setIsCollectionClicked}
                  />
                </s.MyCollectionWrapper>
              ))
            )}
          </s.CollectionListWrapper>
        ) : (
          <>
            <Designs selectedCollection={selectedCollection} />
          </>
        )}
      </s.ContentsWrapper>
    </>
  );
};

export default ArtistContents;
