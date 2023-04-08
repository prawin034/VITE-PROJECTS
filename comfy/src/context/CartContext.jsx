import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/Cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../utils/Actions';

const getlocalstorage = () => {
  let cart = localStorage.getItem('cart');

  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  }

  return [];
};

const initalState = {
  cart: getlocalstorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  //add to cart

  const AddToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  //remove items from cart

  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  //toggle amount

  const toggleAmount = (id, value) => {
    console.log(id, value);
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  //clear cart

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, AddToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartGlobalContext = () => {
  return useContext(CartContext);
};
