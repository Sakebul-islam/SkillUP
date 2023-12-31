import axios from 'axios';
import { clearCookie } from './auth';

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
});
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// intercept response and check for unauthrozed responses
axiosSecure.interceptors.response.use(
  (response) => response,
  async (error) => {
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
