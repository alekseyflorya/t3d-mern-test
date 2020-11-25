import { FETCH_ALL, CREATE, UPDATE, DELETE } from 'constants/actionTypes';

import * as api from 'api/index.js';

export const getTable = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTable();
    setTimeout(() => {
      dispatch({ type: FETCH_ALL, payload: data });
    },3000)
  } catch (error) {
    console.log(error.message);
  }
};

export const createTableItem = (item) => async (dispatch) => {

  try {
    const { data } = await api.createTableItem(item);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateTableItem = (id, item) => async (dispatch) => {

  try {
    const { data } = await api.updateTableItem(id, item);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTableItem = (id) => async (dispatch) => {
  try {
    await api.deleteTableItem(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
