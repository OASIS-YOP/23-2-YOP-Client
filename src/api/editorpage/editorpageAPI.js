import HttpClient from '../HttpClient';
const accessToken = localStorage.getItem('atk');
const editorpageAPI = {
  postDesignedPhotoCard: async (photocardId, formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/edit/save/${photocardId}`;
      const response = await HttpClient.post(path, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Cache-Control': 'no-store',
        },
        Authorization: accessToken,
      });
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default editorpageAPI;
