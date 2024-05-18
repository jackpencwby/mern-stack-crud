import axios from 'axios'

export const register = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/auth/register', data);
export const login = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/auth/login', data);


