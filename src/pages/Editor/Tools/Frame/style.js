import styled from 'styled-components';

export const FrameList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  width: 100%;
  height: 100%;
  text-align: center;

  & img {
    display: inline-block;

    width: 30%;
    height: 'auto';

    border: 4px solid #F0F0F0;
    background-color: #d9d9d9;

    margin: 10px;

      &:hover {
        border: 4px solid #CCD0DD;
        cursor: pointer;
      }

  }

  padding: 20px 0;


`;

