import axio from "axios";

export const API = axio.create({
    baseURL: `https://api.hgbrasil.com/`
});