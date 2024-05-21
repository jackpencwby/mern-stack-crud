import axios from 'axios'

export const register = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/auth/register', data);
export const login = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/auth/login', data, {withCredentials: true});
export const logout = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/auth/logout', {withCredentials: true});
export const authenticateToken = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/auth/protected', {withCredentials: true});


