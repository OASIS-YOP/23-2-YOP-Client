import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for createPortal
import Modal from 'react-modal';
import * as s from './upload.style.js';

Modal.setAppElement('#root'); // Set the app element for accessibility

const SelectCollection = () => {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

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
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <Modal
      isOpen={isModalOpened}
      style={UploadModalStyle}
      onRequestClose={closeModal}
      // onRequestClose={closeModal}
      // Handle closing when clicking outside
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
            <s.CollectionCard key={index} onClick={() => openModal(index - 1)}>
              <img width={100} height={100} />
              <div>
                <h2>Modal for Collection Card {selectedCard + 1}</h2>
                <button onClick={closeModal}>Close Modal</button>
              </div>
            </s.CollectionCard>
          ))}
        </s.CollectionCardWrapper>
      </s.Wrapper>
    </Modal>
  );
};

export default SelectCollection;
