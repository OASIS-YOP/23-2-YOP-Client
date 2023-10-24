import * as s from './Banner.style';

const Banner = ({ src }) => {
  return (
    <s.BannerWrapper class='scroll'>
      <s.BannerContent>
        <img src={src} />
      </s.BannerContent>
    </s.BannerWrapper>
  );
};

export default Banner;
