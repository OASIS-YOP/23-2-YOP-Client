import { useState } from 'react';
import * as s from './style';

const Collections = () => {
  const [isActivated, setIsActivated] = useState(false);

  const artistslist = ['뉴진스', '방탄소년단', '에스파',];

  const artists = artistslist.map((artist, index) => (
    <s.ArtistsTab key={artist + index}>{artist}</s.ArtistsTab>
  ));

  const CollectionCard = () => {
    return <s.CollectionCardWrapper></s.CollectionCardWrapper>;
  };

  return (
    <>
      <s.Wrapper>
        <s.ArtistsTabWrapper>{artists}</s.ArtistsTabWrapper>
        <s.CollectionCardsContainer>
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </s.CollectionCardsContainer>
      </s.Wrapper>
    </>
  );
};

export default Collections;
