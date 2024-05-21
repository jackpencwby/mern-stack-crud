import axios from 'axios'

export const getAdminData = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/user/getAdminData', {withCredentials: true});
export const getUserData = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/user/getUserData', {withCredentials: true});