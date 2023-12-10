import * as s from './MyCollectionModal.style';
import mypageAPI from '../../api/mypage/mypageAPI';
import { useEffect, useState } from 'react';
import { fabric } from 'fabric';


const MyCollectionModal = ({
  setIsOpenCollectionModal,
  setIsOpenUploadModal,
  canvas,
  image,
  setImage,
  setIsBackImgEmpty,
  setPhotocardId,
  isOpenCollectionModal,
}) => {
  const [selectedArtist, setSelectedArtist] = useState();
  const [artistList, setArtistList] = useState([]);
  const [activatedCollection, setActivatedCollection] = useState([]);
  const [isCollectionClicked, setIsCollectionClicked] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('');

  const [isMouseOver, setIsMouseOver] = useState(false);

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
    setSelectedCollection(albumName);
  };

  const getMyCollectionArtistTab = () => {
    mypageAPI.getMyCollectionArtistTab().then((data) => {
      setArtistList(data?.collectionArtistList);
      setSelectedArtist(data?.collectionArtistList[0]?.artistId);
      setArtistList(data?.collectionArtistList);
      setSelectedArtist(data?.collectionArtistList[0]?.artistId);
    });
  };
  const getMyActiveCollection = () => {
    mypageAPI.getMyActiveCollection(selectedArtist).then((data) => {
      console.log(data?.activeCollectionList);
      setActivatedCollection(data?.activeCollectionList);
      console.log(data?.activeCollectionList);
      setActivatedCollection(data?.activeCollectionList);
    });
  };

  const onClickArtist = (artistId) => {
    setSelectedArtist(artistId);
    setIsCollectionClicked(false);
    // console.log(artistName);
  };

  const onClickPhotocard = (photocard) => {
    // setImage(photocard);
    // console.log(photocard);
    setIsOpenCollectionModal(false);
    setIsOpenUploadModal(false);

    new fabric.Image.fromURL(
      photocard,
      (imgFile) => {
        imgFile.set({
          id: 'backImg',
          left: 340 / 2,
          top: 492 / 2,
          originX: 'center',
          originY: 'center',
          // rotation: rotationValue,
          evented: true,
          hoverCursor: 'default',
          selected: true,
          hasControls: false, // Optional: Disable resizing controls
          hasBorders: false, // Optional: Disable borders

          //드래그 동작 구현
        });
        const imgWidth = imgFile.width;
        const imgHeight = imgFile.height;

        if (imgWidth > imgHeight) {
          imgFile.scaleToHeight(492);
        } else if (imgHeight > imgWidth) {
          imgFile.scaleToWidth(340);
        } else if (imgWidth === imgHeight) {
          imgFile.scaleToHeight(492);
        }

        if (image) {
          canvas.remove(image);
        }
        canvas.add(imgFile);
        setIsBackImgEmpty(false);

        // 이미지가 캔버스에 추가된 후 모달을 닫습니다.
        setIsOpenCollectionModal(false);
        setIsOpenUploadModal(false);

        // canvas.renderAll();
        setImage(imgFile);
      },
      { crossOrigin: 'anonymous' }
    );
  };
  const artists = artistList.map((item) => {
    return (
      <s.ArtistsTab
        key={`collectionArtist_${item?.artistId}`}
        onClick={() => onClickArtist(item?.artistId)}
        className={item?.artistId === selectedArtist ? 'active' : ''}
      >
        {item?.groupName}
      </s.ArtistsTab>
    );
  });

  useEffect(() => {
    getMyCollectionArtistTab();
    //  console.log(photocard);
  }, []);

  useEffect(() => {
    if (selectedArtist) getMyActiveCollection();
  }, [selectedArtist]);
  return (
    <s.Wrapper>
      <s.ModalTitle>내 컬렉션</s.ModalTitle>
      <s.BodyWrapper>
        { artists.length === 0 ? (
          <>
            최애 아티스트를 추가해주세요!
          </>
        ): (
          <>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        {!isCollectionClicked ? (
          <s.CollectionCardsContainer>
            {activatedCollection.length !== 0 ? (
              activatedCollection.map((item) => {
                return (
                  <s.CollectionCardWrapper styled={{ cursor: 'pointer' }}>
                    <s.ActivatedCollectionCardWrapper
                      onClick={() => onClickCollection(item?.albumName)}
                      onMouseOut={onHandleMouseOut}
                      onMouseOver={onHandleMouseOver}
                    >
                      <s.CollectionCardImage
                        src={item?.albumJacket}
                        alt='collection'
                      />
                      {isMouseOver && (
                        <s.CollectionInfoWrapper>
                          <s.CollectionCardInfo>
                            {item?.albumName}
                            <br />
                            활성일 : {item?.activeDateTime}
                            <br />
                            {/* 수정요망 */}
                            수집률 :{' '}
                            {Math.round((1 / item?.photoCardQuant) * 100)}%
                            <br />
                            {/* 내가가진포카수 구해서 넣어야함 */}
                            포카수 : 1/
                            {item?.photoCardQuant}장
                          </s.CollectionCardInfo>
                        </s.CollectionInfoWrapper>
                      )}
                    </s.ActivatedCollectionCardWrapper>
                  </s.CollectionCardWrapper>
                );
              })
            ) : (
              <>
                컬렉션을 활성화해주세요!
              </>
            )
            }
          </s.CollectionCardsContainer>
        ) : (
          <ModalCollectionDetails
            selectedArtist={selectedArtist}
            selectedCollection={selectedCollection}
            onClickPhotocard={onClickPhotocard}
            setPhotocardId={setPhotocardId}
          />
        )}
        </>
        )}  
      </s.BodyWrapper>
    </s.Wrapper>
  );
};

const ModalCollectionDetails = ({
  selectedArtist,
  selectedCollection,
  onClickPhotocard,
  setPhotocardId,
}) => {
  const [activePhotocard, setActivePhotocard] = useState([]);

  const getCollectionActivePhotocard = () => {
    mypageAPI
      .getCollectionActivePhotocard(decodeURI(selectedCollection))
      .then((data) => {
        console.log('활성화된포카', data?.ActivePhotocardList);
        setActivePhotocard(data?.ActivePhotocardList);
      });
  };

  useEffect(() => {
    getCollectionActivePhotocard();
  }, []);

  return (
    <>
      <s.ModalCollectionDetailsWrapper className={String(selectedArtist)}>
        <s.CollectionName>{selectedCollection}</s.CollectionName>
        <s.PhotocardListWrapper>
          {activePhotocard.map((item) => {
            return (
              <s.PhotoCardContainer className={selectedArtist}>
                {/* <s.MemberName className={selectedArtist}>
                  {item?.memberName}
                </s.MemberName> */}
                <s.PhotocardImageFrame
                  className={String(selectedArtist)}
                  onClick={() => {
                    onClickPhotocard(item?.photocard);
                    console.log('내가 누른 거 뭐야?',item?.photocard);
                    setPhotocardId(item?.photocardId);
                  }}
                >
                  <s.PhotocardImage
                    key={`Modalphotocard_${item?.photocardId}`}
                    src={item?.photocard}
                    alt='photocard'
                  />
                </s.PhotocardImageFrame>
              </s.PhotoCardContainer>
            );
          })}
        </s.PhotocardListWrapper>
      </s.ModalCollectionDetailsWrapper>
    </>
  );
};

export default MyCollectionModal;
