import API from "./api";

export const registerUser = (data) => {
  return API.post("/api/auth/register", data);
};

export const loginUser = (data) => {
  return API.post("/api/auth/login", data);
};

/**

 * @param {string} token
 * @param {object} data
 * @returns {Promise}
 */
export const forgotPassword = (email) => {
  return API.post("/api/auth/forgot-password", { email });
};

export const resetPassword = (token, password) => {
  return API.post(`/api/auth/reset-password/${token}`, { password });
};
