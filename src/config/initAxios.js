import axios from 'axios';

const initAxios = () => {
  axios.interceptors.request.use(
    (config) => {
      const modifiedConfig = { ...config };

      return modifiedConfig;
    },
    (error) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (res) => {
      if (res.status !== 200) {
        throw res.data;
      }

      return res.data;
    },
    (error) => Promise.reject(error),
  );
};

export default initAxios;
