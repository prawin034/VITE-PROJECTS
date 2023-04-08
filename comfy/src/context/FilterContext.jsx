import React, { useContext, useEffect, useReducer } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import reducer from '../reducer/Filter_reducer';
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

const FilterContext = React.createContext();

const initialState = {
  allProducts: [],
  filtered_Products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //USING USEFFECT TO LOAD THE PRODUCTS FROM ANOTHER CONTEXT

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  //USEFFECT TO UPDATE THE SORT WHEN SORT VALUE CHAGES

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  //DISPATCHING TWO ACTIONS ONE FOR GRID VIEW AND LIST VIEW

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const upDateSort = (e) => {
    //demonstration purposes
    // const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: UPDATE_SORT, payload: value });

    // console.log(name, value);
  };

  const updatefilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'color') {
      value = e.target.dataset.color;
    }
    if (name === 'price') {
      value = +e.target.value;
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        upDateSort,
        updatefilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterGlobal = () => {
  return useContext(FilterContext);
};
