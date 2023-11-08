import * as s from './style';
import { useState, } from 'react';
import MyDesignCollection from '../../../../components/MyDesignCollection';
import MyCollections from '../../../../Temp/mypage/mydesign/MyCollections';
import Designs from './Designs';


const ArtistContents = () => {
  const artistslist = ['뉴진스', '방탄소년단', '에스파',];
  const [selectedArtist, setSelectedArtist] = useState(artistslist[0]);
  const [ selectedCollection, setSelectedCollection ] = useState('');

  const [ isCollectionClicked, setIsCollectionClicked ] = useState(false);


  const selectedArtistInfo = MyCollections.find(
    (artist) => artist.artistName === selectedArtist
  );

  const artistCollections = selectedArtistInfo ? selectedArtistInfo.myCollections : [];

  const onClickCollection = () => {
  if (!isCollectionClicked)
    setIsCollectionClicked(false);
  };
  
  const artist = MyCollections.find((artist) => artist.artistId);
  if (!artist) {
    return null; // Handle the case when artist is not found
  }
  // const collection = artist.myCollections.find((collection) => collection.collectionId);
  // if (!artist) {
  //   return null; // Handle the case when artist is not found
  // }

  const onClickArtist = (artistName) => {
    setSelectedArtist(artistName);
    setIsCollectionClicked(false);
    console.log(artistName);
  };

  const artists = artistslist.map((artist, index) => {
    
    return (
      <s.ArtistsTab
          key={artist + index}
          onClick={() => onClickArtist(artist)}
          className={artist === selectedArtist ? 'active' : ''}
        >{artist}
      </s.ArtistsTab>
    )
  });



  return (
    <>
    <s.ArtistsTabWrapper>
      {artists}
    </s.ArtistsTabWrapper>
    <s.ContentsWrapper>
      { !isCollectionClicked ? (
        <s.CollectionListWrapper>
        {artistCollections.length === 0 ? (
            <div>아티스트의 도안을 꾸미고 저장해보세요!</div>
          ) : (
          artistCollections.map((item, index) => (
            <s.MyCollectionWrapper
             key={index}
            >
              <MyDesignCollection
                fileUrl={item.fileUrl}
                artistId={selectedArtistInfo.artistId}
                collectionId={item.collectionId}
                setSelectedCollection={setSelectedCollection}
                setIsCollectionClicked={setIsCollectionClicked}
                onClickCollection={onClickCollection}
              />
            </s.MyCollectionWrapper>
          ))
        )}
      </s.CollectionListWrapper>
      ):(
        <>
          <Designs
            selectedArtist={selectedArtist}
            selectedCollection={selectedCollection}
          />
        </>
      ) }
    </s.ContentsWrapper>
    </>
  )

} 

export default ArtistContents;