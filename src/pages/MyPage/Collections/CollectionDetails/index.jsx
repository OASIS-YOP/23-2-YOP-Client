import { useEffect, useState } from 'react';
import * as s from './style';
import mypageAPI from '../../../../api/mypage/mypageAPI';
import Modal from 'react-modal';
import CodeInputModal from '../../../../components/CodeInputModal';

const CollectionDetails = ({
  selectedArtist,
  selectedCollection,
  // // handleClickCodeInputButton,
  // isOpenCodeInputModal,
  CodeInputModalStyle,
  // setIsOpenCodeInputModal,
}) => {
  const [collectionPhotocard, setCollectionPhotocard] = useState([]);
  const [activePhotocard, setActivePhotocard] = useState([]);
  const [isOpenCodeInputModal, setIsOpenCodeInputModal] = useState(false);

  const getCollectionAllPhotocard = () => {
    mypageAPI
      .getCollectionAllPhotocard(decodeURI(selectedCollection))
      .then((data) => {
        console.log('이앨범의모든포카', data?.collectionPhotocardList);
        setCollectionPhotocard(data?.collectionPhotocardList);
      });
  };
  const getCollectionActivePhotocard = () => {
    mypageAPI
      .getCollectionActivePhotocard(decodeURI(selectedCollection))
      .then((data) => {
        console.log('활성화된포카', data?.ActivePhotocardList);
        setActivePhotocard(data?.ActivePhotocardList);
      });
  };

  const activePhotocardId = activePhotocard?.map((item) => {
    return item.photocardId;
  });

  useEffect(() => {
    getCollectionAllPhotocard();
    getCollectionActivePhotocard();

    console.log('컬렉션디테일', selectedCollection);
  }, []);

  useEffect(() => {
    console.log(activePhotocardId);
    console.log(collectionPhotocard);
  }, [activePhotocard]);

    const handleClickCodeInputButton = () => {
    setIsOpenCodeInputModal((prev) => !prev);
  };

  const closeCodeInputButton = () => {
    setIsOpenCodeInputModal(false);
  };

  return (
    <>
      <s.Wrapper className={String(selectedArtist)}>
        <s.InputCodeButton onClick={handleClickCodeInputButton}>
          코드 입력
        </s.InputCodeButton>
        <Modal
          isOpen={isOpenCodeInputModal}
          style={CodeInputModalStyle}
          onRequestClose={handleClickCodeInputButton} // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
        >
          <CodeInputModal
            albumName={selectedCollection}
            setIsOpenCodeInputModal={setIsOpenCodeInputModal}
            closeCodeInputButton={closeCodeInputButton}
          />
        </Modal>

        <s.CollectionName>{selectedCollection}</s.CollectionName>
        <s.ContentsContainer>
        <s.PhotocardListWrapper>
          <s.VersionLabel>
            Ver. A
          </s.VersionLabel>
          {collectionPhotocard['verA']?.map((item) => {
            return (
              <s.PhotoCardContainer className={selectedArtist}>
                { item.memberName === '아이유(IU)'
                  ? '' :
                  <s.MemberName className={selectedArtist}>                  
                  {item.memberName}
                </s.MemberName>
                }
                <s.PhotocardImageFrame className={String(selectedArtist)}>
                  <s.PhotocardImage
                    key={`photocared_${item.photocardId}`}
                    src={item.photocard}
                    alt='photocard'
                    className={
                      activePhotocardId?.find((id) => id === item.photocardId)
                        ? ''
                        : 'locked'
                    }
                  />
                </s.PhotocardImageFrame>
              </s.PhotoCardContainer>
            );
          })}
        </s.PhotocardListWrapper>
        <s.PhotocardListWrapper>
          <s.VersionLabel>
            Ver. B
          </s.VersionLabel>
          {collectionPhotocard['verB']?.map((item) => {
            return (
              <s.PhotoCardContainer className={selectedArtist}>
                { item.memberName === '아이유(IU)'
                  ? '' :
                  <s.MemberName className={selectedArtist}>                  
                  {item.memberName}
                </s.MemberName>
                }
                <s.PhotocardImageFrame className={String(selectedArtist)}>
                  <s.PhotocardImage
                    key={`photocared_${item.photocardId}`}
                    src={item.photocard}
                    alt='photocard'
                    className={
                      activePhotocardId?.find((id) => id === item.photocardId)
                        ? ''
                        : 'locked'
                    }
                  />
                </s.PhotocardImageFrame>
              </s.PhotoCardContainer>
            );
          })}
        </s.PhotocardListWrapper>
        <s.PhotocardListWrapper>
          <s.VersionLabel>
            Ver. C
          </s.VersionLabel>
          {collectionPhotocard['verC']?.map((item) => {
            return (
              <s.PhotoCardContainer className={selectedArtist}>
                { item.memberName === '아이유(IU)'
                  ? '' :
                  <s.MemberName className={selectedArtist}>                  
                  {item.memberName}
                </s.MemberName>
                }
                <s.PhotocardImageFrame className={String(selectedArtist)}>
                  <s.PhotocardImage
                    key={`photocared_${item.photocardId}`}
                    src={item.photocard}
                    alt='photocard'
                    className={
                      activePhotocardId?.find((id) => id === item.photocardId)
                        ? ''
                        : 'locked'
                    }
                  />
                </s.PhotocardImageFrame>
              </s.PhotoCardContainer>
            );
          })}
        </s.PhotocardListWrapper>
        </s.ContentsContainer>
      </s.Wrapper>
    </>
  );
};

export default CollectionDetails;
