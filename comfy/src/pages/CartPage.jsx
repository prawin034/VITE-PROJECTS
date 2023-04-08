import React, { useEffect } from 'react';
import { useCartGlobalContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartColumns from '../components/CartColumns';
import CartContent from '../components/CartContent';
import CartBtns from '../components/CartBtns';
import CartTotal from '../components/CartTotal';
const CartPage = () => {
  const { cart } = useCartGlobalContext();
  if (cart.length < 1) {
    return (
      <div className="cart_empty">
        <h3 className="cart_empty_text">EMPTY LIST </h3>
        <Link to="/products" className="cart_empty_link">
          FILL IT
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="about_hero">
        <h3 className="about_hero_h">HOME/CART</h3>
      </div>

      <div className="cart_content">
        {/* CART COLUMNS  */}
        <CartColumns />
        <hr />
        {/* CART CONTENT */}
        {cart.map((item) => {
          return <CartContent key={item.id} {...item} />;
        })}

        <hr />

        {/* CART BTNS */}
        <CartBtns />
        {/* CART TOTAL BOX */}
        <CartTotal />
      </div>
    </div>
  );
};

export default CartPage;
