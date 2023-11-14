import HttpClient from '../HttpClient.js';

const mainpageAPI = {
  getFavArtist: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/favArtist`;
      const response = HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getRandomArtist: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/randomArtist`;
      const response = HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getHot10: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/hot10`;
      const response = HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getNow5: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/now5`;
      const response = HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default mainpageAPI;
