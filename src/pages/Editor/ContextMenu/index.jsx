import * as s from './styles';

const ContextMenu = ({
  canvas,
  x,
  y,
  onClose,
  onCopy,
  onPaste,
  onCut,
  onDelete,
}) => {
  // 컨텍스트 메뉴
  const handleMenuItemClick = (action) => {
    // 각 메뉴 항목을 클릭했을 때 실행될 동작을 구현
    if (action === 'copy') {
      // 복사 동작 처리

      // if (
      //   canvas.getActiveObject() !== null &&
      //   canvas.getActiveObject() !== undefined
      // ) {
      //   // 선택된 객체가 있는지 확인
      //   const activeObject = canvas.getActiveObject().toObject();
      //   // console.log(typeof activeObject);
      //   onCopy(activeObject);
      // } else {
      //   console.log('no object is selected');
      // }
    } else if (action === 'paste') {
      // 붙여넣기 동작 처리

      // onPaste(x, y);
      // // 마우스 좌클릭 위치를 onPaste 함수로 전달
    } else if (action === 'cut') {
      // 잘라내기 동작 처리

      // if (canvas.getActiveObject() !== null || undefined) {
      //   // 선택된 객체가 있는지 확인
      //   const activeObject = canvas.getActiveObject().toObject();
      //   // console.log(typeof activeObject);
      //   onCut(activeObject);
      // } else {
      //   console.log('no object is selected');
      // }
    } else if (action === 'delete') {
      // // 삭제 동작 처리

      // if (canvas.getActiveObject() !== null || undefined) {
      //   // 선택된 객체가 있는지 확인
      //   const activeObject = canvas.getActiveObject().toObject();
      //   onDelete(activeObject);
      // } else {
      //   console.log('no object is selected');
      // }
    }
    onClose();
    // 컨텍스트 메뉴 닫기
  };

  return (
    <s.ContextMenu
      canvas={canvas}
      style={{
        left: x,
        top: y,
        background: 'white',
        boxShadow: '2px 2px 5px gray',
        zIndex: 1000,
      }}
    >
      <div onClick={() => handleMenuItemClick('copy')}>복사</div>
      <div onClick={() => handleMenuItemClick('paste')}>붙여넣기</div>
      <div onClick={() => handleMenuItemClick('cut')}>잘라내기</div>
      <div onClick={() => handleMenuItemClick('delete')}>삭제</div>
    </s.ContextMenu>
  );
};

export default ContextMenu;