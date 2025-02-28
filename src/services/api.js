import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Change if backend URL is different

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/users`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};

export const fetchUsers = async () => {
  return axios.get(`${API_URL}/users`);
};
