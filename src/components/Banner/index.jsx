import * as s from './Banner.style';

const Banner = ({ src }) => {
  return (
    <s.BannerWrapper>
      <s.BannerContent>
        <img src={src} />
      </s.BannerContent>
    </s.BannerWrapper>
  );
};

export default Banner;
