import styled from "styled-components";


export const Icon = styled.img``;
export const Profile = styled.img`
  width: 100%;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  min-width: 1000px;
  height: 100%;
  
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
   
  width: auto;
  height: 35px;
  padding: 20px; 

  background-color: white;

  //드래그 방지
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  // border: 1px solid black;
  
`;


    export const LogoWrapper = styled.div`
      display: flex;
      justify-content: flex-start;
      
      width: 30%;
      height: 100%;

      padding: none;
      margin-right: 300px;
    `;

    export const MenuWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content : flex-end;;  

      width: 100%;
      height: 100%;
      
      padding: none;

      // border: 1px solid black;
    `;

    export const Menu = styled.button`
      border: none;

      margin: 0 8px;

      cursor: pointer;

      font-weight: bold;

      background-color: transparent;

    `;

    export const UserWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content : space-around;
      align-items: center;

      height: auto;

      padding: 5px;
      margin-left: 15px;

      // border: 1px solid black;
    `;

    export const NicknameWrapper = styled.div`
      height: auto;
      
      margin-left: 8px;

      font-weight: bold;
    `

export const ProfileSpace = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  height: 200px;

  background-color: #3F70FF;

`

  export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    //드래그 방지
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;

    margin: 0 20px; 

  `

    export const ProfileImageWrapper = styled.div`
      width: 120px;
      height: 120px;

      padding: 15px;
    `;

    export const ProfileTextsWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      margin-top: 20px;
      margin-left: 18px;
      
      // border: 1px solid black;
    `;

    export const ProfileTexts = styled.div`
      color: white;
      font-weight: 500;
      font-size: 25px;

      margin: 8px 0;

      &.sub {
        font-size: 15px;
        font-weight: normal;
      }
    `;

export const TabMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: auto;
  height: 70px;

  margin: 0 15px;

  //드래그 방지
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

  // border: 1px solid black;
`;

  export const TabMenu = styled.button`
      margin: 0 13px;
      padding: 7px 4px;
      
      font-weight: bold;
      font-size: 18px;

      border-bottom: 3px solid white;
      border-top: none;
      border-left: none;
      border-right: none;  

      cursor: pointer;

      background-color: transparent;

      &.active { 
        border-bottom: 3px solid black;
        border-top: none;
        border-left: none;
        border-right: none; 
      }
  `;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: auto;
  height: fit-content;

  border: 1px solid black;
`;