import { useEffect, useState } from 'react';
import * as s from './style';
import mypageAPI from '../../../../api/mypage/mypageAPI';
import Modal from 'react-modal';
import CodeInputModal from '../../../../components/CodeInputModal';

const CollectionDetails = ({
  selectedArtist,
  selectedCollection,
  handleClickCodeInputButton,
  isOpenCodeInputModal,
  CodeInputModalStyle,
  setIsOpenCodeInputModal,
}) => {
  const [collectionPhotocard, setCollectionPhotocard] = useState([]);
  const [activePhotocard, setActivePhotocard] = useState([]);

  const getCollectionAllPhotocard = () => {
    mypageAPI
      .getCollectionAllPhotocard(decodeURI(selectedCollection))
      .then((data) => {
        console.log('이앨범의모든포카', data.collectionPhotocardList);
        setCollectionPhotocard(data?.collectionPhotocardList);
      });
  };
  const getCollectionActivePhotocard = () => {
    mypageAPI
      .getCollectionActivePhotocard(decodeURI(selectedCollection))
      .then((data) => {
        console.log('활성화된포카', data.ActivePhotocardList);
        setActivePhotocard(data.ActivePhotocardList);
      });
  };

  const activePhotocardId = activePhotocard.map((item) => {
    return item.photocardId;
  });

  useEffect(() => {
    getCollectionAllPhotocard();
    getCollectionActivePhotocard();
  }, []);

  useEffect(() => {
    console.log(activePhotocardId);
    console.log(collectionPhotocard);
  }, [activePhotocard]);

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
          />
        </Modal>

        <s.CollectionName>{selectedCollection}</s.CollectionName>
        <s.PhotocardListWrapper>
          {collectionPhotocard &&
            collectionPhotocard.map((item) => {
              return (
                <s.PhotoCardContainer className={selectedArtist}>
                  <s.MemberName className={selectedArtist}>
                    {item.memberName}
                  </s.MemberName>
                  <s.PhotocardImageFrame className={String(selectedArtist)}>
                    <s.PhotocardImage
                      key={`photocared_${item.photocardId}`}
                      src={item.photocard}
                      alt='photocard'
                      className={
                        activePhotocardId.find((id) => id === item.photocardId)
                          ? ''
                          : 'locked'
                      }
                    />
                  </s.PhotocardImageFrame>
                </s.PhotoCardContainer>
              );
            })}
        </s.PhotocardListWrapper>
      </s.Wrapper>
    </>
  );
};

export default CollectionDetails;
