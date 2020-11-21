import axios from 'axios';

const url = 'http://localhost:5000/table';

export const fetchTable = () => axios.get(url);
export const createTableItem = (newItem) => axios.post(url, newItem);
export const updateTableItem = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem);
export const deleteTableItem = (id) => axios.delete(`${url}/${id}`);
