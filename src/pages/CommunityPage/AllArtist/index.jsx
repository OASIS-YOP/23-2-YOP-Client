import React from 'react';
import * as s from './style';
import Header from '../../../components/Header';
import CardsSlider from '../../../components/CardSlider';

import AllArtists from '../../../Temp/mainpage/AllArtists';

import ArtistCard from '../../../components/ArtistCard';

const AllArtist = () => {
  return (
    <>
      <Header />
      <s.HeaderBox></s.HeaderBox>
      <s.PageLabel>모든 아티스트</s.PageLabel>
      {AllArtists.map((item) => (
        <>
          <s.EnterCompLabel>{item.enterComp}</s.EnterCompLabel>
          <CardsSlider>
            {item.artistList.map((item) => (
              <ArtistCard fileUrl={item.fileUrl} artistName={item.artistName} />
            ))}
          </CardsSlider>
        </>
      ))}
    </>
  );
};

export default AllArtist;
