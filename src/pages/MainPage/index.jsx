import React from 'react';
import * as s from './style';
import Header from '../../components/Header';
import CardsSlider from '../../components/CardSlider';
import DesignCard from '../../components/DesignCard';
import MyArtistCard from '../../components/MyArtistCard';
import FireIcon from '../../assets/FireIcon.svg';
const MainPage = () => {
  const Top10Index = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <s.Wrapper>
      <Header />
      <s.BannerWrapper>
        <s.BannerContent>프로모션 및 이벤트 배너 슬라이드 공간</s.BannerContent>
      </s.BannerWrapper>
      <s.PageLabel>나의 최애 아티스트</s.PageLabel>

      <CardsSlider>
        <MyArtistCard />
        <MyArtistCard />
        <MyArtistCard />
        <MyArtistCard />
      </CardsSlider>

      <s.PageLabel>폴꾸 TOP 10</s.PageLabel>

      <CardsSlider>
        {Top10Index.map((item, index) => (
          <DesignCard item={item} index={index + 1} />
        ))}
      </CardsSlider>

      <s.PageLabel>실시간 도안</s.PageLabel>
      <s.RealTimeDesignWrapper></s.RealTimeDesignWrapper>

      <s.ContentRowBox>
        <s.CollectionBox>
          <s.PageLabel>뜨는 컬렉션</s.PageLabel>
          <s.CollectionRowContainer>
            <s.IndexNumber>1</s.IndexNumber>
            <s.AlbumImage src={`${process.env.PUBLIC_URL}/images/getup.png`} />
            <s.CollectionTextBox>
              <s.CollectionText>Get up(The 2nd EP)</s.CollectionText>
              <s.CollectionText>#ADOR #뉴진스</s.CollectionText>

              <s.CollectionText>
                <s.FireIcon src={FireIcon} />
                102
              </s.CollectionText>
            </s.CollectionTextBox>
          </s.CollectionRowContainer>
          <s.CollectionRowContainer>
            <s.IndexNumber>1</s.IndexNumber>
            <s.AlbumImage src={`${process.env.PUBLIC_URL}/images/butter.png`} />
            <s.CollectionTextBox>
              <s.CollectionText>Butter(single)</s.CollectionText>
              <s.CollectionText>#BIGHITMUSIC #방탄소년단</s.CollectionText>

              <s.CollectionText>
                <s.FireIcon src={FireIcon} />
                89
              </s.CollectionText>
            </s.CollectionTextBox>
          </s.CollectionRowContainer>
        </s.CollectionBox>
        <s.AllArtistBox>
          <s.PageLabel>모든 아티스트</s.PageLabel>
          <CardsSlider>
            <MyArtistCard />
            <MyArtistCard />
            <MyArtistCard />
            <MyArtistCard />
            <MyArtistCard />
          </CardsSlider>
        </s.AllArtistBox>
      </s.ContentRowBox>
    </s.Wrapper>
  );
};

export default MainPage;
