import React from 'react';
import { Link } from 'react-router-dom';

import { useCartGlobalContext } from '../context/CartContext';
const CartBtns = () => {
  const { clearCart } = useCartGlobalContext();
  return (
    <div className="cart_btns">
      <Link className="cart_btns_btn" to="/products">
        CONTINUE SHOPPING
      </Link>
      <button className="cart_btns_btn2" onClick={clearCart}>
        CLEAR SHOPPING CART{' '}
      </button>
    </div>
  );
};

export default CartBtns;
