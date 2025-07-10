import axios from 'axios';

export const loginApi = async (email, password) => {
    const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email,
        password
    });
    return response.data;
};

// https://api.escuelajs.co/api/v1/auth/login