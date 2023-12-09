import React, { useEffect, useState } from 'react';
import * as s from './style';
import Header from '../../../components/Header';
import CardsSlider from '../../../components/CardSlider';
import mainpageAPI from '../../../api/mainpage/mainpageAPI';
import communitypageAPI from '../../../api/communitypage/communitypageAPI';

import ArtistCard from '../../../components/ArtistCard';

const AllArtist = () => {
  const [allArtistList, setAllArtistList] = useState([]);
  const [favArtist, setFavArtist] = useState([]);

  const getFavArtist = () => {
    mainpageAPI.getFavArtist().then((data) => {
      setFavArtist(data?.favArtistList);
    });
  };

  const getAllArtist = () => {
    communitypageAPI.getAllArtist().then((data) => {
      setAllArtistList(data?.allArtistList);
    });
  };

  useEffect(() => {
    getFavArtist();
    getAllArtist();
  }, []);
  return (
    <>
      <Header />
      <s.HeaderBox></s.HeaderBox>
      <s.PageLabel>나의 최애 아티스트</s.PageLabel>
      {favArtist.length !==0 ? (
      <CardsSlider>
          {favArtist.map((item) => (
            <ArtistCard
              key={`favArtist_${item.artistId}`}
              photo={item.photo}
              groupName={item.groupName}
              artistId={item.artistId}
            />
          ))}
      </CardsSlider>
      ) : (
        <s.TextIfEmptyArtist>아티스트를 즐겨찾기해보세요!</s.TextIfEmptyArtist>
      )}
      <s.PageLabel>모든 아티스트</s.PageLabel>
      {allArtistList &&
        allArtistList.map((item) => (
          <React.Fragment key={`enterComp_${item.enterComp}`}>
            <s.EnterCompLabel>{item.enterComp}</s.EnterCompLabel>
            <CardsSlider>
              {item.artistList.map((item) => (
                <ArtistCard
                  key={`artist_${item.artistId}`}
                  photo={item.photo}
                  groupName={item.groupName}
                  artistId={item.artistId}
                />
              ))}
            </CardsSlider>
          </React.Fragment>
        ))}
    </>
  );
};

export default AllArtist;
