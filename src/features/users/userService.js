import axios from "axios";
const base_url = "http://localhost:5174/api/users";
export const regUserService = async (userData) => {
  const response = await axios.post(`${base_url}/reg-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const logUser = async (userData) => {
  const response = await axios.post(`${base_url}/login-user`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const verifyOTP = async (otpData) => {
  const response = await axios.post(
    `${base_url}/verify-otp/${otpData?.id}`,
    otpData
  );
  return response.data;
};


export const getMyInfo = async (user_id) => {
  const response = await axios.get(`${base_url}/my-info/${user_id}`);
  return response.data
}

export const getAllUsers = async () => {
  const response = await axios.get(`${base_url}/get-all-users`);
  return response.data
}