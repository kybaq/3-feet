import axios from "axios";

const tourismAPI = axios.create({
  baseURL: import.meta.env.VITE_TOURISM_BASE_URL,
});

tourismAPI.interceptors.request.use((config) => {
  return config;
});

export default tourismAPI;
