import React from 'react';
import * as s from './EditorUploadModal.style';
import Desktop from '../../assets/Desktop.svg';
import MyPage from '../../assets/MyPage.svg';
import Arrow from '../../assets/Arrow.svg';

const EditorUploadModal = () => {
  return (
    <s.Wrapper>
      <s.Text>파일 불러오기 옵션</s.Text>
      <s.BodyWrapper>
        <s.BodyItem>
          <s.ButtonBox bg={'rgba(204, 208, 221, 1)'}>
            <s.Icon src={Desktop} width={50} height={50}></s.Icon>
            <s.ButtonLabel>데스크탑 폴더</s.ButtonLabel>
          </s.ButtonBox>
          <s.BodyLabel>저장된 파일 불러오기</s.BodyLabel>
        </s.BodyItem>
        <s.BodyItem>
          <s.ButtonBox bg={'rgba(63, 112, 255, 1)'}>
            <s.Icon src={MyPage} width={50} height={50}></s.Icon>
            <s.ButtonLabel>마이페이지</s.ButtonLabel>
          </s.ButtonBox>
          <s.BodyLabel>내 도안 불러오기</s.BodyLabel>
        </s.BodyItem>
      </s.BodyWrapper>
    </s.Wrapper>
  );
};
export default EditorUploadModal;
