import HttpClient from '../HttpClient.js';

const mainpageAPI = {
  getFavArtist: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/favArtist`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getRandomArtist: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/randomArtist`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getHot10: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/hot10`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getHot10Like: async (userId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/1/hot10/1/like`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getNow5: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/now5`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default mainpageAPI;
