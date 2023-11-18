import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

const handleStatusCode = (error) => {
  console.log(error);
  if (error.status === 403) {
    console.log(error.status);
  } else if (error.status === 400) {
    console.log(error.status);
  } else if (error.status === 404) {
    console.log(error.status);
  } else {
    // 그 외에는 rethrow
    throw error;
  }
};

const HttpClient = {
  get: async (path, params = {}, headers = {}) => {
    try {
      const response = await axiosInstance.get(path, { params, headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  post: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.post(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  put: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.put(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  patch: async (path, body, headers = {}) => {
    try {
      const response = await axiosInstance.patch(path, body, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },

  delete: async (path, headers = {}) => {
    try {
      const response = await axiosInstance.delete(path, { headers });
      return response.data;
    } catch (e) {
      handleStatusCode(e);
    }
  },
};

export default HttpClient;
