import React, { useState, useRef } from 'react';
import * as s from './BannerSlider.style';

const BannerSlider = ({ children }) => {
  const [dotActive, setDotActive] = useState(0);
  const targetPost = useRef(null);

  const onScroll = (e) => {
    const currentScrollPosition = e.currentTarget.scrollLeft;
    const scrollWidth =
      e.currentTarget.scrollWidth / React.Children.toArray(children).length;
    setDotActive(Math.round(currentScrollPosition / scrollWidth));
  };
  const onClickDot = (index) => {
    const postCount = React.Children.toArray(children).length;
    targetPost.current?.scrollTo({
      left: (index * targetPost.current.scrollWidth) / postCount,
      behavior: 'smooth',
    });
  };

  return (
    <s.Wrapper>
      <s.ContentWrapper ref={targetPost} onScroll={(e) => onScroll(e)}>
        <s.CardWrapper>{children}</s.CardWrapper>
      </s.ContentWrapper>
      <s.DotsWrapper>
        {React.Children.toArray(children).map((_, index) => (
          <s.Dot
            key={index}
            className={index === dotActive ? 'active' : ''}
            onClick={() => onClickDot(index)}
          />
        ))}
      </s.DotsWrapper>
    </s.Wrapper>
  );
};

export default BannerSlider;
