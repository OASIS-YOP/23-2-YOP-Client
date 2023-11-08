import { useState } from 'react';
import * as s from './upload.style.js';
import Modal from 'react-modal';

const UploadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  // 모달 스타일
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
  return (
    <Modal
      isOpen={isModalOpen}
      style={UploadModalStyle}
      // onRequestClose={}
      ariaHideApp={false}
    >
      <s.Wrapper>{<s.Button>컬렉션 선택</s.Button>}</s.Wrapper>
    </Modal>
  );
};

export default UploadModal;
