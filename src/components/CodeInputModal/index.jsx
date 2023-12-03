import mypageAPI from '../../api/mypage/mypageAPI';
import * as s from './CodeInputModal.style';
import { useState } from 'react';

const CodeInputModal = ({ albumName }) => {
  const userId = 1;
  const [code, setCode] = useState();
  const handleChange = (e) => {
    const value = e.target.value;
    setCode(value);
    console.log(`code: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mypageAPI
    //   .photocardActivate(userId, decodeURI(albumName), code)
    //   .then((data) => {
    //     if (data) {
    //       console.log(data.message);
    //     } else {
    //       window.alert('코드를 다시 확인해주세요.');
    //     }
    //   });
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
