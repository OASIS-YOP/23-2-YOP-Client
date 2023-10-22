import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  };

  @media (min-width: 769px) and (max-width: 1617px) {
    width: 250px;
    height: 250px;
  };

  @media (min-width: 1618px) {
    width: 350px;
    height: 350px;
  };

  margin: 0 20px;

  &:hover {
    cursor: pointer;

  };

`;


export const CollectionImage = styled.img`
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  };

  @media (min-width: 769px) and (max-width: 1617px) {
    width: 250px;
    height: 250px;
  };

  @media (min-width: 1618px) {
    width: 350px;
    height: 350px;
  };

  `;

  // export const CollectionCardOverlay = styled.div`
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   bacground-color: rgba(0, 0, 0, 0.7);

  //   @media (max-width: 768px) {
  //     width: 150px;
  //     height: 150px;
  //   };
  
  //   @media (min-width: 769px) and (max-width: 1617px) {
  //     width: 250px;
  //     height: 250px;
  //   };
  
  //   @media (min-width: 1618px) {
  //     width: 350px;
  //     height: 350px;
  //   };

  //   display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};

  //   z-index: 1;
  // `

  // export const CollectionCardInfo = styled.div`
  //   display: absolute;
  //   top: 0;
  //   left: 0;

    

  //   background-color: white;

  // `;

  // export const InfoWrapper = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: flex-start;
    
  // `;

  // export const 