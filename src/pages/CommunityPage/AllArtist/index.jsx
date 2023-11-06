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

      <s.PageLabel>{AllArtists[0].enterComp}</s.PageLabel>
      <CardsSlider>
        {AllArtists.map((item) => (
          <ArtistCard fileUrl={item.fileUrl} artistName={item.artistName} />
        ))}
      </CardsSlider>
    </>
  );
};

export default AllArtist;
