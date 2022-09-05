import axios from "axios";

const api = axios.create({
  baseURL: "https://nowaiting-kenzie.herokuapp.com/",
  timeout: 10000,
});

export default api