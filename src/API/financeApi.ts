import axios from "axios";

export const API = axios.create({
  baseURL: `https://api.hgbrasil.com/finance?format=json-cors&`,
});
