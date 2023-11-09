import * as s from './style';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';

const CommunityPage = () => {
  const params = useParams();
  const artistId = Number(params.artistId.substring(1));
  return (
    <>
      <Header />
      <s.ArtistProfileContainer></s.ArtistProfileContainer>
    </>
  );
};

export default CommunityPage;
