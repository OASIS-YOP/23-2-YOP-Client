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
    mainpageAPI.getFavArtist(1).then((data) => {
      console.log(data);
      setFavArtist(data.favArtistList);
    });
  };

  const getAllArtist = () => {
    communitypageAPI.getAllArtist().then((data) => {
      console.log(data);
      setAllArtistList(data.allArtistList);
      console.log(data.allArtistList[0].enterComp);
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
            />
          ))}
      </CardsSlider>

      <s.PageLabel>모든 아티스트</s.PageLabel>
      {allArtistList &&
        allArtistList.map((item) => (
          <>
            <s.EnterCompLabel key={item.enterComp}>
              {item.enterComp}
            </s.EnterCompLabel>
            <CardsSlider>
              {item.artistList.map((data) => (
                <ArtistCard
                  key={`artist_${data.artistId}`}
                  photo={data.photo}
                  groupName={data.groupName}
                  artistId={data.artistId}
                />
              ))}
            </CardsSlider>
          </>
        ))}
    </>
  );
};

export default AllArtist;
