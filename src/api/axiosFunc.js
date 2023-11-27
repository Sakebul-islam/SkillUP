import axios from 'axios';
import { clearCookie } from './auth';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// intercept response and check for unauthrozed responses
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('[axiosSecure] : ', error);
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      await clearCookie();
      window.location.replace('/signin');
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
