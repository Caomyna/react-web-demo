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

//lấy danh sách users
export const fetchUsers = () => instance.get("/users");

// Xoá người dùng
export const deleteUser = (id) => instance.delete(`/users/${id}`);

// Thêm người dùng
export const createUser = (data) => instance.post("/users", data);

// Sửa người dùng
export const updateUser = (id, data) => instance.put(`/users/${id}`, data);

// https://fakeapi.platzi.com/api/v1