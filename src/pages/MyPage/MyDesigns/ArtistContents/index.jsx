import * as s from './style';
import { useState, } from 'react';
import MyCollectionCard from '../../../../components/MyCollectionCard';
import MyCollections from '../../../../Temp/mypage/mydesign/MyCollections';


const ArtistContents = ({ selectedArtist }) => {
  const [isHovered, setIsHovered] = useState(false);

  const artistContents = () => {
   
    switch (selectedArtist) {
      case '뉴진스':
        return (
          <s.CollectionListWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {MyCollections[0].myCollections.map((item) => (
              <s.MyCollectionWrapper>
                <MyCollectionCard fileUrl={item.fileUrl} artistName={selectedArtist} />
                {isHovered && <s.CollectionCardOverlay />}
              </s.MyCollectionWrapper>
            ))}
          </s.CollectionListWrapper>
        );
      case '방탄소년단':
        return (
          <s.CollectionListWrapper>
            { MyCollections[1].length === 0 ? '방탄소년단의 컨텐츠' : MyCollections[1].myCollections.map((item) => (
              <s.MyCollectionWrapper
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <MyCollectionCard fileUrl={item.fileUrl} artistName={selectedArtist} />
                {isHovered && <s.CollectionCardOverlay />}
              </s.MyCollectionWrapper>
            ))}
          </s.CollectionListWrapper>
        );
      case '에스파':
        return (
          <s.CollectionListWrapper>
            { MyCollections[2].myCollections.map((item) => (
              <s.MyCollectionWrapper
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <MyCollectionCard fileUrl={item.fileUrl} artistName={selectedArtist} />
                
              </s.MyCollectionWrapper>
            ))}
          </s.CollectionListWrapper>
        );
      default:
        return <div>선택한 아티스트의 컨텐츠를 표시</div>;
    }
  };

  return (
    <>
    <s.ContentsWrapper>
      {artistContents()}
    </s.ContentsWrapper>
    </>
  )

} 

export default ArtistContents;