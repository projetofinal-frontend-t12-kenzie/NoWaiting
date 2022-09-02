import axios from "axios";

export const api = axios.create({
  baseURL: "https://nowaiting-kenzie.herokuapp.com/",
});
