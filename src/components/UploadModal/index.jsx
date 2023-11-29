import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link, Route, useNavigate, Routes } from 'react-router-dom';
import * as s from './upload.style.js';

Modal.setAppElement('#root');

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

const CollectionSelection = ({ openModal }) => (
  <s.CollectionCardWrapper>
    {[1, 2, 3, 4, 5, 6].map((index) => (
      <s.CollectionCard
        key={index}
        onClick={() => openModal(index - 1)}
      ></s.CollectionCard>
    ))}
  </s.CollectionCardWrapper>
);

const DesignSelection = ({ openModal }) => (
  <s.PolaroidWrapper>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
      <s.PolaroidCard
        key={index}
        onClick={() => openModal(index - 1)}
      ></s.PolaroidCard>
    ))}
  </s.PolaroidWrapper>
);

const UploadComponent = ({ closeModal }) => (
  <div>
    <button onClick={closeModal}>X</button>
  </div>
);

const SelectCollection = () => {
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSecondaryModalOpened, setIsSecondaryModalOpened] = useState(false);
  const [isPolaroid, setIsPolaroid] = useState(false);
  const [isThirdModalOpened, setIsThirdModalOpened] = useState(false);

  const openModal = (index) => {
    setSelectedCard(index);
    setIsSecondaryModalOpened(true);
    setIsPolaroid(false);
    navigate(`/uploadmodal2/${index}`);
  };

  const openSecondaryModal = (index) => {
    setSelectedCard(index);
    setIsSecondaryModalOpened(true);
    setIsPolaroid(true);
  };

  const openThirdModal = () => {
    setIsThirdModalOpened(true);
  };

  const closeThirdModal = () => {
    setIsThirdModalOpened(false);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsSecondaryModalOpened(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSecondaryModalOpened === true) {
      navigate(`/uploadmodal2/${selectedCard}`);
    }
  }, [isSecondaryModalOpened, navigate, selectedCard]); //

  return (
    <>
      <Modal
        isOpen={isModalOpened}
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
              </s.CollectionCard>
            ))}
          </s.CollectionCardWrapper>
        </s.Wrapper>
      </Modal>

      <Modal
        isOpen={isSecondaryModalOpened}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <s.Wrapper>
          <s.LabelWrapper>
            <s.Label>Butter</s.Label>
            <span> {'>'} </span>
            <s.Label>도안 선택</s.Label>
            <span> {'>'} </span>
            <s.Label>업로드</s.Label>
          </s.LabelWrapper>
          <s.PolaroidWrapper>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <s.PolaroidCard key={index} onClick={() => openModal(index - 1)}>
                <img
                  src={`https://upload.wikimedia.org/wikipedia/en/thumb/3/33/BTS_-_Butter_CD.png/220px-BTS_-_Butter_CD${index}.png`}
                  alt={`Collection Card ${index}`}
                  width={100}
                  height={100}
                />
              </s.PolaroidCard>
            ))}
          </s.PolaroidWrapper>
        </s.Wrapper>
      </Modal>

      <Modal
        isOpen={isThirdModalOpened}
        style={UploadModalStyle}
        onRequestClose={closeThirdModal}
        ariaHideApp={false}
      >
        {
          <>
            <s.Button>컬렉션 선택</s.Button>
            <span> {'>'} </span>
            <s.Button>도안 선택</s.Button>
            <span> {'>'} </span>
            <s.Button>업로드</s.Button>
          </>
        }
        <div>
          <h2>Upload</h2>
          <button onClick={closeThirdModal}>X</button>
        </div>
      </Modal>
    </>
  );
};
export default SelectCollection;
