import axiosSecure from './index';

// save user
export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: 'guest',
    status: 'verified',
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

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
