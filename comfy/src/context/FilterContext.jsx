import React, { useContext, useEffect, useReducer } from 'react';
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

import { useProductsContext } from '../context/ProductsContext';
import reducer from '../reducer/Filter_reducer';
const FilterContext = React.createContext();

const initialState = {
  allProducts: [],
  filtered_Products: [],
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //USING USEFFECT TO LOAD THE PRODUCTS FROM ANOTHER CONTEXT

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterGlobal = () => {
  return useContext(FilterContext);
};
