import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Token expired or invalid
//       sessionStorage.removeItem("jwt");
//       window.location.href = "/"; // redirect to login
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
