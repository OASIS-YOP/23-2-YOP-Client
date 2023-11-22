import HttpClient from '../HttpClient';

const mypageAPI = {
  getMyProfile: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myProfile`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },

  getMyPostArtistTab: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPost/artistTab`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getMyPost: async (userId, artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPost/${artistId}/Post`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteMyPost: async (userId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/3/myPost/delete/10`;
      const response = await HttpClient.post(path, {}, {});
      return response;
    } catch (e) {
      return null;
    }
  },
  getMyCollectionArtistTab: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myCollection/artistTab`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default mypageAPI;
