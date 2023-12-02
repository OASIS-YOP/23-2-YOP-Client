import HttpClient from './HttpClient';

const commonAPI = {
  postFavorite: async (artistId, userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/updateFavorite/${userId}`;
      const response = await HttpClient.post(path, {}, {});
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteFavorite: async (artistId, userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/notFavorite/${userId}`;
      const response = await HttpClient.delete(path, {}, {});
      return response;
    } catch (e) {
      return null;
    }
  },
  postLike: async (userId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/post/${userId}/${postId}/updateLike`;
      const response = await HttpClient.post(path, {}, {});
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteLike: async (userId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/post/notLike/${userId}/${postId}`;
      const response = await HttpClient.delete(path, {}, {});
      return response;
    } catch (e) {
      return null;
    }
  },
  getIfLikePost: async (userId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/${userId}/isLike/${postId}`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default commonAPI;
