import * as s from './DesignCard.style';

const DesignCard = ({ polaroid }) => {
  // const handleClickLikeIcon = () => {};

  return (
    <s.Wrapper>
      <s.ImageContainer>
        <img width={180} height={280} src={polaroid} alt='도안' />
      </s.ImageContainer>
    </s.Wrapper>
  );
};

export default DesignCard;
