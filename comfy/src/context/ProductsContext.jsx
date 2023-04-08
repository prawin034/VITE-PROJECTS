import { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import ProductsReducer from '../reducer/Products_reducer';
import {
  products_url as url,
  // single_product_url as single,
} from '../data/Constants';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from '../utils/Actions';
import React from 'react';

const initalState = {
  //MODAL OPEN CLOSE
  modalOpen: true,

  //PRODUCTS
  products_loading: false,
  products_error: false,
  products: [],
  //FETURE PRODUCTS
  feature_products: [],

  //SINGLE PRODUCTS
  single_products_loading: false,
  single_products_error: false,
  single_products: {},
};
const ProductsContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initalState);

  //SIDEBAR OPEN
  const SideBarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  //SIDEBAR CLOSE
  const SideBarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  ///FETCHING PRODUCTS

  const FetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const Response = await axios(url);
      const Products = await Response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: Products });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: GET_PRODUCTS_ERROR, payload: error.response });
    }
  };

  //FETCHING SINGLE PRODUCT

  const SingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const Response = await axios(url);
      const singleProduct = Response.data;

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      console.log(error.response);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    FetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        SideBarOpen,
        SideBarClose,
        SingleProduct,
        // FetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
