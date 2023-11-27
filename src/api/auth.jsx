import axiosSecure from './axiosFunc';

// get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post(`/jwt`, { email });
  console.log(data);
  return data;
};

// Remove token from Browser
export const clearCookie = async () => {
  const { data } = await axiosSecure.get(`/logout`);
  return data;
};

// get all user
export const getAllUsers = async () => {
  const { data } = await axiosSecure(`/users`);
  return data;
};

// update user Role
export const updateRole = async ({ email, role }) => {
  const currentUser = {
    email,
    role,
  };
  const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);
  return data;
};

// get all user
export const getAllTeacherRequest = async () => {
  const { data } = await axiosSecure('/teachers/requests');
  return data;
};

// update user Role
export const updateStatus = async ({ id, status }) => {
  const { data } = await axiosSecure.put(`/teachers/update-status/${id}`, {
    status,
  });
  return data;
};
