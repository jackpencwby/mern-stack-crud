import axios from 'axios'

export const getData = async () => await axios.get(import.meta.env.VITE_API_ENDPOINT + '/productTest');
export const addData = async (data) => await axios.post(import.meta.env.VITE_API_ENDPOINT + '/productTest', data);
export const updateData = async (id, data) => await axios.put(import.meta.env.VITE_API_ENDPOINT + '/productTest?id=' + id, data);
export const deleteData = async (id) => await axios.delete(import.meta.env.VITE_API_ENDPOINT + '/productTest?id=' + id);

