import { CREATE, UPDATE, DELETE, FETCH_ALL } from 'constants/actionTypes';

export default (table = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...table, action.payload];
    case UPDATE:
      return table.map((item) => (item._id === action.payload._id ? action.payload : item));
    case DELETE:
      return table.filter((item) => item._id !== action.payload);
    default:
      return table;
  }
};

