import axiosSecure from './index';

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, { email });
  console.log('[Token Received from server]: ', data);
  return data;
};

// Remove token from Browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};
