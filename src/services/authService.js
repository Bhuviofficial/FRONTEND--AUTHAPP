import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const registerUser = (data) =>
  axios.post(`${API}/register`, data);

export const loginUser = (data) =>
  axios.post(`${API}/login`, data);

export const forgotPassword = (data) =>
  axios.post(`${API}/forgot-password`, data);

export const verifyToken = (token) =>
  axios.get(`${API}/reset-password/${token}`);

export const resetPassword = (token, data) =>
  axios.post(`${API}/reset-password/${token}`, data);
