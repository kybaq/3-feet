import axios from "axios";

const publicAPI = axios.create({
  baseURL: import.meta.env.PUBLIC_BASE_URL,
});

publicAPI.interceptors.request.use((config) => {
  return config;
});

export default publicAPI;
