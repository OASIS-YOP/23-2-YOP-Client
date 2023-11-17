import * as s from './style';
import HeaderIsLogOffed from '../../components/Header/HeaderIsLogOffed';
import { useState } from 'react';
import Load from '../../assets/Load.svg';
import Delete from '../../assets/Delete.svg';
import Redo from '../../assets/Redo.svg';
import Undo from '../../assets/Undo.svg';
import Save from '../../assets/Save.svg';
import ToBack from '../../assets/ToBack.svg';
import Backward from '../../assets/Backward.svg';
import Forward from '../../assets/Forward.svg';
import ToFront from '../../assets/ToFront.svg';


const Editor = () => {

  const [isLogedIn, setIsLogedIn ] = useState();

  


  return (
    <s.Wrapper>
      <HeaderIsLogOffed />
      <s.EditorWrapper>
        <s.LeftContainer>
          <s.TopMenuWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonLeft>
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon src={Load}  />
                  <s.TopMenuButtonLabel>
                    불러오기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon src={Delete} />
                  <s.TopMenuButtonLabel>
                    삭제하기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>    
              </s.TopMenuButtonLeft>
            </s.TopMenuGroupWrapper>
            <s.TopMenuGroupWrapper>
              <s.TopMenuButtonRight>
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon src={Undo} />
                  <s.TopMenuButtonLabel>
                    뒤로
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon src={Redo} />
                  <s.TopMenuButtonLabel>
                    앞으로
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton> 
                <s.TopMenuButton>
                  <s.TopMenuButtonIcon src={Save} />
                  <s.TopMenuButtonLabel>
                    저장하기
                  </s.TopMenuButtonLabel>
                </s.TopMenuButton>   
              </s.TopMenuButtonRight>
            </s.TopMenuGroupWrapper>
          </s.TopMenuWrapper>
          <s.CanvasSpaceWrapper>
            <s.CanvasWrapper>

            </s.CanvasWrapper>
            <s.LayerButtonWrapper>
              <s.LayerButton>
                <s.LayerButtonIcon src={ToBack} />
                <s.LayerButtonLabel>맨 뒤로</s.LayerButtonLabel>
              </s.LayerButton>
              <s.LayerButton>
                <s.LayerButtonIcon src={Backward} />
                <s.LayerButtonLabel>뒤로</s.LayerButtonLabel>
              </s.LayerButton>
              <s.LayerButton>
                <s.LayerButtonLabel>앞으로</s.LayerButtonLabel>
                <s.LayerButtonIcon src={Forward} />  
              </s.LayerButton>
              <s.LayerButton>
                <s.LayerButtonLabel>맨 앞으로</s.LayerButtonLabel>
                <s.LayerButtonIcon src={ToFront} />
              </s.LayerButton>
            </s.LayerButtonWrapper>
            <s.SelectedObjects>
              선택된 오브젝트: 0/0
            </s.SelectedObjects>
          </s.CanvasSpaceWrapper>
        </s.LeftContainer>

        <s.RightContainer>
          <s.ToolContainer>
            <s.ToolLabelWrapper>
              <s.ToolLabel>
                이미지
              </s.ToolLabel>
            </s.ToolLabelWrapper>

          </s.ToolContainer>
        </s.RightContainer>
      </s.EditorWrapper>

    </s.Wrapper>






  )



}

export default Editor;