import HttpClient from '../HttpClient';

const landingpageAPI = {
  register: async (formdata) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/register`;
      const response = await HttpClient.post(path, formdata, {});
      return response;
    } catch (e) {
      return null;
    }
  },
  login: async (formdata) => {
    try {
      const path = `${process.env.REACT_APP_BASE_URL}/login`;
      const response = await HttpClient.post(path, formdata, {});
      return response;
    } catch (e) {
      return null;
    }
  },
};

export default landingpageAPI;
