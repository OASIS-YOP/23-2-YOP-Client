import * as s from './style';
import {  useState, } from 'react';
import ArtistContents from './ArtistContents';


const MyDesigns = () => {

  const [selectedCollection, setSelectedCollection] = useState('');

  return (

    <>
      <s.Wrapper>
        <ArtistContents
          selectedCollection={selectedCollection} // 선택한 컬렉션 전달
          setSelectedCollection={setSelectedCollection} // setSelectedCollection 함수 전달
        />
      </s.Wrapper>
    </> 
  )
}

export default MyDesigns;