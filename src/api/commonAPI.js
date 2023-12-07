import HttpClient from './HttpClient';
const accessToken = localStorage.getItem('atk');

const commonAPI = {
  postFavorite: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/updateFavorite`;
      const response = await HttpClient.post(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteFavorite: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/notFavorite`;
      const response = await HttpClient.delete(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  postLike: async (postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/post/${postId}/updateLike`;
      const response = await HttpClient.post(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteLike: async (postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/post/notLike/${postId}`;
      const response = await HttpClient.delete(
        path,
        {},
        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },
  getIfLikePost: async (postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/isLike/${postId}`;
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

export default commonAPI;
