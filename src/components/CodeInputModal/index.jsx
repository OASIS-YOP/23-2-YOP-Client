import mypageAPI from '../../api/mypage/mypageAPI';
import * as s from './CodeInputModal.style';
import { useEffect, useState } from 'react';

const CodeInputModal = ({ albumName, closeCodeInputModal }) => {
  const [code, setCode] = useState({
    code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
  };

  const collectionActivate = () => {
    mypageAPI.collectionActivate(decodeURI(albumName), code).then((data) => {
      if (data?.message === 'Network Error') {
        return;
      } else {
        window.alert(data.message);
      }
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
      if (data?.message) {
        console.log(data);
        window.alert(
          '포카깡 ! ' + data?.message.slice(1, 4) + '번 당첨 짝짝짝!'
        );
        window.location.reload();
      } else {
        window.alert('다시 시도해주세요.');
      }
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
