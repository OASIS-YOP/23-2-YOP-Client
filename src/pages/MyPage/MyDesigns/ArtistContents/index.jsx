import * as s from './style';
import { useEffect, useState } from 'react';
import MyDesignCollection from '../../../../components/MyDesignCollection';
import MyCollections from '../../../../Temp/mypage/mydesign/MyCollections';
import Designs from './Designs';
import mypageAPI from '../../../../api/mypage/mypageAPI';

const ArtistContents = () => {
  const userId = 1;
  const [artistList, setArtistList] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState();
  const [myPolaroidCollection, setMyPolaroidCollection] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);

  const getMyPolaroidArtistTab = () => {
    mypageAPI.getMyPolaroidArtistTab(userId).then((data) => {
      setSelectedArtist(data.polaroidArtistTabList[0].artistId);
      setArtistList(data.polaroidArtistTabList);
      console.log('내도안리스트', data.polaroidArtistTabList);
    });
  };

  const getMyPolaroidCollection = () => {
    mypageAPI.getMyPolaroidCollection(userId, selectedArtist).then((data) => {
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

  const onClickArtist = () => {
    console.log(selectedArtist);
  };

  const artists = artistList.map((item, index) => {
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
    console.log('맨처음', selectedArtist);
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
            <Designs
              selectedArtist={selectedArtist}
              selectedCollection={selectedCollection}
            />
          </>
        )}
      </s.ContentsWrapper>
    </>
  );
};

export default ArtistContents;
