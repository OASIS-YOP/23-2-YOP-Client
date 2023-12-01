import React, { useState } from 'react';
import * as s from './EditorUploadModal.style';
import Desktop from '../../assets/Desktop.svg';
import MyPage from '../../assets/MyPage.svg';
import Arrow from '../../assets/Arrow.svg';
import { fabric } from 'fabric';

const EditorUploadModal = ({
  canvas,
  image,
  setImage,
  setIsBackImgEmpty,
  setIsOpenUploadModal,
}) => {
  const [myPhotocard, setMyPhotoCard] = useState();

  // 파일 불러오기 버튼 눌렀을 때 실행되는 함수
  const handleLoadFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      console.log('파일 로드 :' + file.name);

      if (file && file.type.includes('image') && canvas) {
        // 이미지 로드 함수를 호출하여 이미지 전달
        handleImageLoad(file);
      } else {
        console.log('파일 로드 실패');
      }
    };
    input.click();
  };

  // 파일 불러와서 이미지 로드하는 함수
  const handleImageLoad = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const resultImage = reader.result;
      const loadImage = () => {
        new fabric.Image.fromURL(resultImage.toString(), (imgFile) => {
          imgFile.set({
            id: 'backImg',
            left: 340 / 2,
            top: 492 / 2,
            originX: 'center',
            originY: 'center',
            // rotation: rotationValue,
            evented: true,
            hoverCursor: 'default',
            selected: true,
            hasControls: false, // Optional: Disable resizing controls
            hasBorders: false, // Optional: Disable borders

            //드래그 동작 구현
          });
          const imgWidth = imgFile.width;
          const imgHeight = imgFile.height;

          if (imgWidth > imgHeight) {
            imgFile.scaleToHeight(492);
          } else if (imgHeight > imgWidth) {
            imgFile.scaleToWidth(340);
          } else if (imgWidth === imgHeight) {
            imgFile.scaleToHeight(492);
          }

          if (image) {
            canvas.remove(image);
          }

          canvas.add(imgFile);
          setImage(imgFile);
          setIsBackImgEmpty(false);

          canvas.renderAll();
        });
      };
      loadImage();
      setIsOpenUploadModal(false);
    };
  };

  return (
    <s.Wrapper>
      <s.Text>파일 불러오기 옵션</s.Text>
      <s.BodyWrapper>
        <s.BodyItem>
          <s.ButtonBox bg={'rgba(204, 208, 221, 1)'} onClick={handleLoadFile}>
            <s.Icon src={Desktop} width={50} height={50} />
            <s.ButtonLabel>데스크탑 폴더</s.ButtonLabel>
          </s.ButtonBox>
          <s.BodyLabel>
            <s.Icon src={Arrow} width={25} height={25} />
            저장된 파일 불러오기
          </s.BodyLabel>
        </s.BodyItem>
        <s.BodyItem>
          <s.ButtonBox
            bg={'rgba(63, 112, 255, 1)'}
            onClick={() => setIsOpenUploadModal(false)}
          >
            <s.Icon src={MyPage} width={50} height={50}></s.Icon>
            <s.ButtonLabel>마이페이지</s.ButtonLabel>
          </s.ButtonBox>
          <s.BodyLabel>
            <s.Icon src={Arrow} width={25} height={25} />내 도안 불러오기
          </s.BodyLabel>
        </s.BodyItem>
      </s.BodyWrapper>
    </s.Wrapper>
  );
};
export default EditorUploadModal;