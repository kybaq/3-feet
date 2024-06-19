import axios from "axios";

const tourismAPI = axios.create({
  baseURL: import.meta.env.VITE_TOURISM_BASE_URL,
});

export default tourismAPI;
