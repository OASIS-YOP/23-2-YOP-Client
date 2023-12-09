import mypageAPI from '../../api/mypage/mypageAPI';
import * as s from './CodeInputModal.style';
import { useState } from 'react';

const CodeInputModal = ({ albumName, closeCodeInputButton }) => {
  const [code, setCode] = useState({
    code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
  };

  const collectionActivate = () => {
    mypageAPI.collectionActivate(decodeURI(albumName), code).then((data) => {
      window.alert(data.message);
      // console.log(data.message);
      // window.alert('Collection activation failed');
      closeCodeInputButton();
    });
  };

  const photocardActivate = () => {
    mypageAPI.photocardActivate(decodeURI(albumName)).then((data) => {
      // if (data) {
      //   console.log(data);
      //   closeCodeInputButton();
      // } else {
      //   window.alert('Photocard activation failed');
      // }
      window.alert(data.message);
      closeCodeInputButton();
    });
  };
  const handleSubmit = () => {
    // First, execute collectionActivate and wait for it to complete
    collectionActivate();

    // Then, execute photocardActivate and wait for it to complete
    photocardActivate();
  };
  return (
    <s.Wrapper>
      <s.ModalText>코드를 입력하세요</s.ModalText>
      <s.CodeInput type='password' name='code' onChange={handleChange} />
      <s.SubmitButton onClick={handleSubmit}>입력</s.SubmitButton>
    </s.Wrapper>
  );
};

export default CodeInputModal;
