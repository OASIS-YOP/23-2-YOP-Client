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
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPost/3/Post`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  deleteMyPost: async (userId, postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPost/delete/${postId}`;
      const response = await HttpClient.delete(path, {}, {});
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
  getAllCollection: async (userId, artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myCollection/${artistId}/allCollection`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getMyActiveCollection: async (userId, artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myCollection/${artistId}/active`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getCollectionPhotocardList: async (userId, albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myCollection/${albumName}/allPhotocard`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  //내도안
  getMyPolaroidArtistTab: async (userId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPolaroid/artistTab`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getMyPolaroidCollection: async (userId, artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPolaroid/${artistId}/collection`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getMyPolaroidQuant: async (userId, albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPolaroid/${albumName}/polaroidQuant`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
  getMyPolaids: async (userId, albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/${userId}/myPolaroid/${albumName}/polaroids`;
      const response = await HttpClient.get(path);
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default mypageAPI;
