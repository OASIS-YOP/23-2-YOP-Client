import * as s from './style';
import { useEffect, useState, } from 'react';


import MyCollections from '../../../Temp/mypage/mydesign/MyCollections';
import ArtistContents from './ArtistContents';


const MyDesigns = ({ onHandleClick }) => {
  const artistslist = ['뉴진스', '방탄소년단', '에스파',];
  const [selectedArtist, setSelectedArtist] = useState(artistslist[0]);
  const onClickArtist = (artistName) => {
    setSelectedArtist(artistName);
    console.log(artistName);
  };

  const [selectedCollection, setSelectedCollection] = useState('');

  // const [isHovered, setIsHovered] = useState(false);


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

  const selectedArtistInfo = MyCollections.find(
    (artist) => artist.artistName === selectedArtist
  );

  return (

    <>
      <s.Wrapper>
        { MyCollections.length === 0 ? (
        <s.EmptyMessage>
          컬렉션을 활성화하고 나만의 도안을 저장해보세요!
        </s.EmptyMessage>):(
          <>
            <s.ArtistsTabWrapper>
                {artists}
            </s.ArtistsTabWrapper>
            <ArtistContents
              selectedArtistInfo={selectedArtistInfo} 
              selectedCollection={selectedCollection} // 선택한 컬렉션 전달
              setSelectedCollection={setSelectedCollection} // setSelectedCollection 함수 전달
            />
          
          </>
        )}
      </s.Wrapper>
    </> 
  )

}

export default MyDesigns;