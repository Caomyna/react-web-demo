import axios from "axios";
import { getToken } from "../utils/auth";

const instance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
});

instance.interceptors.request.use((config) => {
    const token = getToken(); // Lấy token từ localStorage
    if (token) config.headers.Authorization = `Bearer ${token}`; // Gắn token vào header
    return config;
});

export const fetchUsers = () => instance.get("/users");


// https://fakeapi.platzi.com/api/v1