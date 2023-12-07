import HttpClient from '../HttpClient';
const accessToken = localStorage.getItem('atk');

const mypageAPI = {
  getMyProfile: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myProfile`;
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

  //내 포스트
  getMyPostArtistTab: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPost/artistTab`;
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
  getMyPost: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPost/${artistId}/Post`;
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
  deleteMyPost: async (postId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPost/delete/${postId}`;
      const response = await HttpClient.delete(
        path,

        { Authorization: accessToken }
      );
      return response;
    } catch (e) {
      return null;
    }
  },

  //내 컬렉션
  getMyCollectionArtistTab: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/artistTab`;
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
  getAllCollection: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/${artistId}/allCollection`;
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
  getMyActiveCollection: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/${artistId}/active`;
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
  getCollectionAllPhotocard: async (albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/${albumName}/allPhotocard`;
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
  getCollectionActivePhotocard: async (albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/${albumName}/activePhotocard`;
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

  //내 도안
  getMyPolaroidArtistTab: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPolaroid/artistTab`;
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
  getMyPolaroidCollection: async (artistId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPolaroid/${artistId}/collection`;
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
  getMyPolaroidQuant: async (albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPolaroid/${albumName}/polaroidQuant`;
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
  getMyPolaroids: async (albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPolaroid/${albumName}/polaroids`;
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
  deleteMyPolaroids: async (polaroidId) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myPolaroid/delete/${polaroidId}`;
      const response = await HttpClient.delete(path, {
        Authorization: accessToken,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  //내 좋아요
  getMyLike: async () => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myLike`;
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

  //컬렉션활성화
  collectionActivate: async (albumName, code) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/${albumName}/collectionActivation`;
      const response = await HttpClient.post(path, JSON.stringify(code), {
        Authorization: accessToken,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
  photocardActivate: async (albumName) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/mypage/myCollection/${albumName}/cardActivationRandomly`;
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
};

export default mypageAPI;
