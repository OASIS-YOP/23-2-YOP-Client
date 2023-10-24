import * as s from './DesignCard.style';

const DesignCard = ({ photoCard }) => {
  // const handleClickLikeIcon = () => {};

  return (
    <s.Wrapper>
      <s.ImageContainer>
        <img width={180} height={280} src={photoCard.fileUrl} alt='도안' />
      </s.ImageContainer>
    </s.Wrapper>
  );
};

export default DesignCard;
