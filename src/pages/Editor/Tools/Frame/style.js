import styled from 'styled-components';

export const FrameList = styled.div`
  display: block;
  width: 100%;
  text-align: center;

  & img {
    display: inline-block;

    width: 30%;
    height: 'auto';

    border: 4px solid white;
    background-color: #d9d9d9;

    margin: 10px;

      &:hover {
        border: 4px solid #7198FF;
        cursor: pointer;
      }

  }



`;

