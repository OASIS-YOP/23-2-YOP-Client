import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as s from './style';
import Header from '../../components/Header';
import CardsSlider from '../../components/CardSlider';
import DesignCard from '../../components/DesignCard';
import Top10DesignCard from '../../components/DesignCard/Top10';
import ArtistCard from '../../components/ArtistCard';
import FireIcon from '../../assets/FireIcon.svg';
import mainpageAPI from '../../api/mainpage/mainpageAPI.js';

//더미데이터
import Top10 from '../../Temp/mainpage/Top10';
import Banner from '../../components/Banner';
import BannerSlider from '../../components/BannerSlider';

const MainPage = () => {
  const [favArtist, setFavArtist] = useState([]);
  const [randomArtist, setRandomArtist] = useState([]);
  const [hot10, setHot10] = useState([]);
  const [now5, setNow5] = useState([]);
  const navigate = useNavigate();

  const [userId, setUserId] = useState(1);

  const getFavArtist = () => {
    mainpageAPI.getFavArtist(userId).then((data) => {
      console.log(data);
      setFavArtist(data.favArtist);
    });
  };

  const getRandomArtist = () => {
    mainpageAPI.getRandomArtist(userId).then((data) => {
      console.log(data);
      setRandomArtist(data.randomArtistList);
    });
  };

  // const getHot10 = () => {
  //   mainpageAPI.getHot10(userId).then((data) => {
  //     console.log(data);
  //     setHot10(data.hot10List);
  //   });
  // };

  const getNow5 = () => {
    mainpageAPI.getNow5(userId).then((data) => {
      console.log(data);
      setNow5(data.now5List);
    });
  };
  // const
  useEffect(() => {
    getFavArtist();
    getRandomArtist();
    // getHot10();
    getNow5();
  }, []);
  return (
    <s.Wrapper>
      {/* 헤더 */}
      <Header />

      {/* 배너 */}
      <s.BannerWrapper>
        {/* <s.BannerContent>프로모션 및 이벤트 배너 슬라이드 공간</s.BannerContent> */}
        <BannerSlider>
          <Banner
            src={`${process.env.PUBLIC_URL}/images/artist/NewJeans.jpeg`}
          />
          <Banner src={`${process.env.PUBLIC_URL}/images/artist/bts.jpg`} />
          <Banner src={`${process.env.PUBLIC_URL}/images/artist/aespa.jpeg`} />
        </BannerSlider>
      </s.BannerWrapper>

      {/* 나의 최애 아티스트 */}
      <s.PageLabel>나의 최애 아티스트</s.PageLabel>
      <CardsSlider>
        {favArtist.map((item, index) => (
          <ArtistCard
            key={index}
            photo={item.photo}
            groupName={item.groupName}
            artistId={item.artistId}
          />
        ))}
      </CardsSlider>

      {/* 폴꾸 Top10 */}
      <s.PageLabel>폴꾸 TOP 10</s.PageLabel>
      <CardsSlider>
        {Top10.map((item, index) => (
          <Top10DesignCard key={index} photoCard={item} />
        ))}
      </CardsSlider>

      {/* 실시간 도안 */}
      <s.PageLabel>실시간 도안</s.PageLabel>
      <s.RealTimeDesignWrapper>
        <s.DesignCardContainer>
          {now5.map((item, index) => (
            <DesignCard key={index} polaroid={item.polaroid} />
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

        {/* 모든 아티스트 랜덤 */}
        <s.AllArtistBox>
          <s.PageLabel>
            모든 아티스트
            <span onClick={() => navigate('/allartist')}>전체보기</span>
          </s.PageLabel>

          {/* api 받아서 수정해야함 */}
          {/* <s.EnterCompanyLabel>{randomArtist[0].enterComp}</s.EnterCompanyLabel> */}
          {randomArtist.map((item) => (
            <>
              <CardsSlider>
                <ArtistCard
                  photo={item.photo}
                  groupName={item.groupName}
                  artistId={item.artistId}
                />
              </CardsSlider>
            </>
          ))}
        </s.AllArtistBox>
      </s.ContentRowBox>
    </s.Wrapper>
  );
};

export default MainPage;
