import HttpClient from '../HttpClient';
const accessToken = localStorage.getItem('atk');

const communitypageAPI = {
  getAllArtist: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/artistpage/allArtist`;
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
  getArtistProfile: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/artistProfile`;
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
  getArtistFavoriteQuant: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/favoriteQuant`;
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
  getMyCollectionQuant: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/collectionQuant`;
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
  getMemberProfile: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/members`;
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
  getMemberPost: async (memberName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${decodeURI(
        memberName
      )}/memberPost`;
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
  getAllArtistPost: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/allPost`;
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
  getPostLikeQuant: async (artistId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/${artistId}/allPost/${postId}/like`;
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
  getIfFavoriteArtist: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/community/isFavorite/${artistId}`;
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

export default communitypageAPI;
