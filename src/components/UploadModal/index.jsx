import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import * as s from './upload.style.js';

Modal.setAppElement('#root');

const SelectCollection = () => {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSecondaryModalOpened, setIsSecondaryModalOpened] = useState(false); // Added this state

  const UploadModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: 10,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      overflow: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      border: '1px solid black',
      borderRadius: '15px',
      outline: 'none',
      zIndex: 10,
    },
  };

  const openModal = (index) => {
    setSelectedCard(index);
    setIsSecondaryModalOpened(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsSecondaryModalOpened(false);
  };

  const closeSecondaryModal = () => {
    setIsSecondaryModalOpened(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpened}
        style={UploadModalStyle}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <s.Wrapper>
          <s.HeaderLabelWrapper>
            <s.HeaderLabel>컬렉션 선택</s.HeaderLabel>
            <span> {'>'} </span>
            <s.HeaderLabel>도안 선택</s.HeaderLabel>
            <span> {'>'} </span>
            <s.HeaderLabel>업로드</s.HeaderLabel>
          </s.HeaderLabelWrapper>
          <s.CollectionCardWrapper>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <s.CollectionCard
                key={index}
                onClick={() => openModal(index - 1)}
              >
                <img
                  src={`https://upload.wikimedia.org/wikipedia/en/thumb/3/33/BTS_-_Butter_CD.png/220px-BTS_-_Butter_CD${index}.png`}
                  alt={`Collection Card ${index}`}
                  width={100}
                  height={100}
                />
                <div>
                  <h2>Modal for Collection Card {selectedCard + 1}</h2>
                  <button onClick={closeModal}>Close Modal</button>
                </div>
              </s.CollectionCard>
            ))}
          </s.CollectionCardWrapper>
        </s.Wrapper>
      </Modal>

      {isSecondaryModalOpened && (
        <Modal
          isOpen={isSecondaryModalOpened}
          style={UploadModalStyle}
          onRequestClose={closeSecondaryModal}
          ariaHideApp={false}
        >
          <s.Wrapper>
            <s.LabelWrapper>
              <s.Label>컬렉션 선택</s.Label>
              <span> {'>'} </span>
              <s.Label>도안 선택</s.Label>
              <span> {'>'} </span>
              <s.Label>업로드</s.Label>
            </s.LabelWrapper>
            <s.PolaroidWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <s.PolaroidCard
                  key={index}
                  onClick={() => openModal(index - 1)}
                >
                  <img
                    src={`https://upload.wikimedia.org/wikipedia/en/thumb/3/33/BTS_-_Butter_CD.png/220px-BTS_-_Butter_CD${index}.png`}
                    alt={`Collection Card ${index}`}
                    width={120}
                    height={200}
                  />
                </s.PolaroidCard>
              ))}
            </s.PolaroidWrapper>
          </s.Wrapper>
          <div>
            <button onClick={closeSecondaryModal}>X</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectCollection;
