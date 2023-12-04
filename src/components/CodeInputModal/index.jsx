import mypageAPI from '../../api/mypage/mypageAPI';
import * as s from './CodeInputModal.style';
import { useState } from 'react';

const CodeInputModal = ({ albumName }) => {
  const userId = 1;
  const [code, setCode] = useState({
    code: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
    console.log(`code: ${e.target.value}`);
  };

  const collectionActivate = async () => {
    try {
      const data = await mypageAPI.collectionActivate(
        userId,
        decodeURI('<LILAC>'),
        code
      );
      if (data) {
        console.log(data.message);
      } else {
        window.alert('코드를 다시 확인해주세요.');
      }
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error('Error during collection activation:', error);
      window.alert('Collection activation failed');
    }
  };

  const photocardActivate = async () => {
    try {
      const data = await mypageAPI.photocardActivate(
        userId,
        decodeURI('<LILAC>')
      );
      if (data) {
        console.log(data.message);
      } else {
        window.alert('포토카드활성화 실패');
      }
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error('Error during photocard activation:', error);
      window.alert('Photocard activation failed');
    }
  };
  const handleSubmit = async () => {
    // First, execute collectionActivate and wait for it to complete
    await collectionActivate();

    // Then, execute photocardActivate and wait for it to complete
    await photocardActivate();
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
