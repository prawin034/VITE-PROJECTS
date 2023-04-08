import React from 'react';
import { useCartGlobalContext } from '../context/CartContext';
import FormatPrice from '../utils/FormatPrice';
import { Link } from 'react-router-dom';
const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartGlobalContext();
  return (
    <div className="cart_totals">
      <div className="cart_totals_center">
        <div className="cart_flex">
          <h1 className="cart_totals_center_heading">Subtotal :</h1>
          <p className="cart_totals_center_value">
            {FormatPrice(total_amount)}
          </p>
        </div>
        <div className="cart_flex">
          <h1 className="cart_totals_center_heading">Shipping Fee :</h1>
          <p className="cart_totals_center_value">
            {FormatPrice(shipping_fee)}
          </p>
        </div>
        <hr />
        <div className="cart_flex">
          <h1 className="cart_totals_center_heading">Order Total :</h1>
          <p className="cart_totals_center_value">
            {FormatPrice(total_amount + shipping_fee)}
          </p>
        </div>
        <Link
          className="cart_btns_btn"
          style={{ textAlign: 'center' }}
          to="/checkout"
        >
          PROCCED TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
