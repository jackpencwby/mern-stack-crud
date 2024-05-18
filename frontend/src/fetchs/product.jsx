import axios from 'axios'

export const getData = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/product');
export const addData = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/product', data);
export const updateData = async (id, data) => await axios.put(import.meta.env.VITE_API_ENDPOINT + '/product?id=' + id, data);
export const deleteData = async (id) => await axios.delete(import.meta.env.VITE_API_ENDPOINT + '/product?id=' + id);

