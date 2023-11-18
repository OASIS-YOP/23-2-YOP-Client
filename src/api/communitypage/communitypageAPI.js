import HttpClient from '../HttpClient';

const communitypageAPI = {
  getAllArtist: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/artistpage/allArtist`;
      const response = HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default communitypageAPI;
