import React from 'react';

const CartColumns = () => {
  return (
    <div className="cart_column">
      <div className="cart_column_center">
        <p className="cart_column_center_text">Item</p>
        <p className="cart_column_center_text">Price</p>
        <p className="cart_column_center_text">Quantity</p>
        <p className="cart_column_center_text">Subtotal</p>
      </div>
    </div>
  );
};

export default CartColumns;
