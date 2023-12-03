import HttpClient from '../HttpClient';

const editorpageAPI = {
  postDesignedPhotoCard: async (userId, photocardId, formData) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/edit/save/${userId}/${photocardId}`;
      const response = await HttpClient.post(path, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default editorpageAPI;
