import React from 'react';
import * as s from './style';
import Header from '../../components/Header';
import CardsSlider from '../../components/CardSlider';
import DesignCard from '../../components/DesignCard';
import Top10DesignCard from '../../components/DesignCard/Top10';
import ArtistCard from '../../components/ArtistCard';
import FireIcon from '../../assets/FireIcon.svg';

//더미데이터
import Top10 from '../../Temp/Top10';
import MyArtist from '../../Temp/MyArtist';
import RealTimeDesignCard from '../../Temp/RealTimeDesignCard';

const MainPage = () => {
  return (
    <s.Wrapper>
      {/* 헤더 */}
      <Header />

      {/* 배너 */}
      <s.BannerWrapper>
        <s.BannerContent>프로모션 및 이벤트 배너 슬라이드 공간</s.BannerContent>
      </s.BannerWrapper>

      {/* 나의 최애 아티스트 */}
      <s.PageLabel>나의 최애 아티스트</s.PageLabel>
      <CardsSlider>
        {MyArtist.map((item) => (
          <ArtistCard fileUrl={item.fileUrl} artistName={item.artistName} />
        ))}
      </CardsSlider>

      {/* 폴꾸 Top10 */}
      <s.PageLabel>폴꾸 TOP 10</s.PageLabel>
      <CardsSlider>
        {Top10.map((item) => (
          <Top10DesignCard photoCard={item} />
        ))}
      </CardsSlider>

      {/* 실시간 도안 */}
      <s.PageLabel>실시간 도안</s.PageLabel>
      <s.RealTimeDesignWrapper>
        <s.DesignCardContainer>
          {RealTimeDesignCard.map((item) => (
            <DesignCard photoCard={item} />
          ))}
        </s.DesignCardContainer>
      </s.RealTimeDesignWrapper>

      {/* 뜨는 컬렉션(하드코딩) */}
      <s.ContentRowBox>
        <s.CollectionBox>
          <s.PageLabel>뜨는 컬렉션</s.PageLabel>
          <s.CollectionRowContainer>
            <s.IndexNumber>1</s.IndexNumber>
            <s.AlbumImage
              src={`${process.env.PUBLIC_URL}/images/album/getup.png`}
            />
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
            <s.IndexNumber>2</s.IndexNumber>
            <s.AlbumImage
              src={`${process.env.PUBLIC_URL}/images/album/butter.png`}
            />
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

        {/* 모든 아티스트 */}
        <s.AllArtistBox>
          <s.PageLabel>모든 아티스트</s.PageLabel>

          <s.EnterCompanyLabel>SM Entertainment</s.EnterCompanyLabel>

          <ArtistCard
            fileUrl={`${process.env.PUBLIC_URL}/images/artist/aespa.jpeg`}
            artistName={'에스파'}
          />
        </s.AllArtistBox>
      </s.ContentRowBox>
    </s.Wrapper>
  );
};

export default MainPage;
