import * as s from './Banner.style';

const Banner = ({ src }) => {
  return (
    <s.BannerWrapper className='scroll'>
      <s.BannerContent>
        <img src={src} alt='banner' />
      </s.BannerContent>
    </s.BannerWrapper>
  );
};

export default Banner;
