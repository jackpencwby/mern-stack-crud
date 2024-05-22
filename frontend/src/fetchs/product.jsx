import axios from 'axios'

export const getAllProduct = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/product', {withCredentials: true});
export const addProduct = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/product', data, {withCredentials: true});
export const updateProduct = async (id, data) => await axios.put(import.meta.env.VITE_API_ENDPOINT + '/product?id=' + id, data, {withCredentials: true});
export const deleteProduct = async (id) => await axios.delete(import.meta.env.VITE_API_ENDPOINT + '/product?id=' + id, {withCredentials: true});
