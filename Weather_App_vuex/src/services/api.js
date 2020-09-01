import axios from "axios";

export const API = axios.create({
    baseURL: "https://api.weatherbit.io/v2.0/current"
});
export const key = "4fd9c923a04d4180ba7a323eed11661f";