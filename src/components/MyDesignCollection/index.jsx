import * as s from './myDesignCollectionStyle.js';
import { useEffect, useState } from 'react';
import MyCollections from '../../Temp/mypage/mydesign/MyCollections';
import mypageAPI from '../../api/mypage/mypageAPI.js';

const MyDesignCollection = ({
  albumJacket,
  albumName,
  setSelectedCollection,
  setIsCollectionClicked,
}) => {
  const [userId, setUserId] = useState(1);
  const [ismouseOver, setIsMouseOver] = useState(false);
  const [myPolaroidQuant, setMyPolaroidQuant] = useState();

  const onHandleMouseOver = (e) => {
    e.preventDefault();
    setIsMouseOver(true);
  };
  const onHandleMouseOut = (e) => {
    e.preventDefault();
    setIsMouseOver(false);
  };

  const getMyPolaroidQuant = () => {
    mypageAPI
      .getMyPolaroidQuant(userId, decodeURI(albumName))
      .then((data) => setMyPolaroidQuant(data.polaroidBackupQuant));
  };
  // const artist = MyCollections.find((artist) => artist.artistId === artistId);
  // if (!artist) {
  //   return null; // Handle the case when artist is not found
  // }
  // const collection = artist.myCollections.find(
  //   (collection) => collection.collectionId === collectionId
  // );
  // if (!artist) {
  //   return null; // Handle the case when artist is not found
  // }

  const onClickCollection = () => {
    setIsCollectionClicked(true);
    setSelectedCollection(albumName);
  };

  useEffect(() => {
    getMyPolaroidQuant();
  }, []);

  return (
    <s.ImageContainer
      onMouseOut={onHandleMouseOut}
      onMouseOver={onHandleMouseOver}
      ismouseOver={ismouseOver}
      onClick={onClickCollection}
    >
      <s.CollectionImage src={albumJacket} alt='내 컬렉션' />
      {ismouseOver && (
        <s.CollectionInfoWrapper>
          <s.CollectionCardInfo>
            {albumName}
            <br />
            {myPolaroidQuant}/30
          </s.CollectionCardInfo>
        </s.CollectionInfoWrapper>
      )}
    </s.ImageContainer>
  );
};

export default MyDesignCollection;
