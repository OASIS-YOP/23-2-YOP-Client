import React, { useEffect, useState } from 'react';
import * as s from './style';
import Header from '../../../components/Header';
import CardsSlider from '../../../components/CardSlider';
import mainpageAPI from '../../../api/mainpage/mainpageAPI';
import communitypageAPI from '../../../api/communitypage/communitypageAPI';

import ArtistCard from '../../../components/ArtistCard';

const AllArtist = () => {
  const [userId, setUserId] = useState(1);
  const [allArtistList, setAllArtistList] = useState([]);
  const [favArtist, setFavArtist] = useState([]);

  const getFavArtist = () => {
    mainpageAPI.getFavArtist(userId).then((data) => {
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
      <CardsSlider>
        {favArtist &&
          favArtist.map((item) => (
            <ArtistCard
              key={`favArtist_${item.artistId}`}
              photo={item.photo}
              groupName={item.groupName}
              artistId={item.artistId}
            />
          ))}
      </CardsSlider>

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
