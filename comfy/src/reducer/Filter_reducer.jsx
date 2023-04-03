import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
} from '../utils/Actions';

const filter_reducer = (action, state) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      allProducts: [{ ...action.payload }],
      filtered_Products: [{ ...action.payload }],
    };
  }
  return state;
};

export default filter_reducer;
