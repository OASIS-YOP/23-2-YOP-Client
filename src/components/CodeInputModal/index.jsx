import * as s from './CodeInputModal.style';
import { useState } from 'react';

const CodeInputModal = () => {
  const [code, setCode] = useState();

  return (
    <s.Wrapper>
      <s.ModalText>코드를 입력하세요</s.ModalText>
      <s.CodeInput type='password' />
      <s.SubmitButton>입력</s.SubmitButton>
    </s.Wrapper>
  );
};

export default CodeInputModal;
