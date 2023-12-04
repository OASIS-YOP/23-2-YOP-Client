import HttpClient from '../HttpClient.js';

const accessToken = localStorage.getItem('accessToken');

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
  // getHot10Like: async (userId, postId) => {
  //   try {
  //     const path = `${process.env.REACT_APP_BASE_URL}/mainpage/${userId}/hot10/${postId}/like`;
  //     const response = await HttpClient.get(path);
  //     return response;
  //   } catch (e) {
  //     return null;
  //   }
  // },
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
