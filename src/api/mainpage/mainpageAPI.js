import HttpClient from '../HttpClient.js';

const accessToken = localStorage.getItem('atk');

const mainpageAPI = {
  getFavArtist: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/favArtist`;
      const response = await HttpClient.get(
        path,
        {},
        {
          Authorization: accessToken,
        }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  getRandomArtist: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/randomArtist`;
      const response = await HttpClient.get(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  getHot10: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/hot10`;
      const response = await HttpClient.get(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  // getHot10Like: async (, postId) => {
  //   try {
  //     const path = `${process.env.REACT_APP_BASE_URL}/mainpage/hot10/${postId}/like`;
  //     const response = await HttpClient.get(path);
  //     return response;
  //   } catch (e) {
  //     return null;
  //   }
  // },
  getNow5: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mainpage/now5`;
      const response = await HttpClient.get(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default mainpageAPI;
