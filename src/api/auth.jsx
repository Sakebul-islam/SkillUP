import axiosSecure, { axiosPublic } from './axiosFunc';

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

// get single user
export const getSingleUsers = async ({ email }) => {
  const { data } = await axiosSecure(`/profile?email=${email}`);
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

// get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure(`/users/${email}`);
  return data?.role;
};
// get Classes of a single user
export const getTeacherClasses = async (email) => {
  const { data } = await axiosSecure(`/classes/${email}`);
  return data;
};

// get Classes of Admin
export const getAllClassesByAdmin = async () => {
  const { data } = await axiosSecure(`/classes`);
  return data;
};
// get Classes of student
export const allClasses = async () => {
  const { data } = await axiosSecure(`/classes`);
  return data;
};

// get update status of class by Admin
export const updateClassStatus = async ({ id, status }) => {
  const { data } = await axiosSecure.patch(`/classes/update-status/${id}`, {
    status,
  });
  return data;
};

// delete a Classes
export const deleteClass = async (id) => {
  const { data } = await axiosSecure.delete(`/classes/${id}`);
  return data;
};

// get single class info
export const singleClass = async (id) => {
  const { data } = await axiosSecure.get(`/classes/single/${id}`);
  return data;
};
// get update class info by teacher
export const updateClass = async ({ id, updateData }) => {
  const { data } = await axiosSecure.patch(`/classes/update/${id}`, {
    updateData,
  });
  return data;
};

// get update class info by teacher
export const addAssignment = async ({ id, assignment }) => {
  const { data } = await axiosSecure.post(`/classes/add-assignment/${id}`, {
    assignment,
  });
  return data;
};

// create paymentIntent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post('/create-payment-intent', price);
  return data;
};

// store payment info in database
export const makePayment = async ({ id, paymentInfo }) => {
  const { data } = await axiosSecure.post(`/payments/${id}`, paymentInfo);
  return data;
};

// get site stats
export const getSiteStats = async () => {
  const { data } = await axiosPublic('/stats');
  return data;
};

// get top 4 teacher
export const getTopTeachers = async () => {
  const { data } = await axiosPublic('/top-teachers');
  return data;
};
