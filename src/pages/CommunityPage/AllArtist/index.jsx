import React, { useEffect, useState } from 'react';
import * as s from './style';
import Header from '../../../components/Header';
import CardsSlider from '../../../components/CardSlider';

import ArtistCard from '../../../components/ArtistCard';
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/AxiosC';

const AllArtist = () => {
  const navigate = useNavigate();
  const [allArtistList, setAllArtistList] = useState([]);
  const [favArtist, setFavArtist] = useState([]);

  const getFavArtist = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/mainpage/1`)
      .then((response) => {
        if (response.status === 200) {
          console.log(200);
          return response.data;
        }
        if (response.status === 400) {
          console.log(400);
          const responseData = response.data;
          const errorMessages = Object.values(responseData.error).join('\n');
          alert(errorMessages);
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        setFavArtist(data.favArtist);
      });
  };

  const getAllArtist = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/artistpage`)
      .then((response) => {
        if (response.status === 200) {
          console.log(200);
          return response.data;
        }
        if (response.status === 400) {
          console.log(400);
          const responseData = response.data;
          const errorMessages = Object.values(responseData.error).join('\n');
          alert(errorMessages);
          throw new Error();
        }
      })
      .then((data) => {
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
        {favArtist.map((item, index) => (
          <ArtistCard
            key={index}
            fileUrl={item.photo}
            artistName={item.groupName}
          />
        ))}
      </CardsSlider>

      <s.PageLabel>모든 아티스트</s.PageLabel>
      {allArtistList.map((item) => (
        <>
          <s.EnterCompLabel>{item.enterComp}</s.EnterCompLabel>
          <CardsSlider>
            {item.artistList.map((data) => (
              <ArtistCard
                fileUrl={data.photo}
                artistName={data.groupName}
                onClick={() => navigate(`/communitypage/:${data.artistId}`)}
              />
            ))}
          </CardsSlider>
        </>
      ))}
    </>
  );
};

export default AllArtist;
