import React from 'react';
import FormatPrice from '../utils/FormatPrice';
import { useCartGlobalContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import CartBtns from './CartBtns';
import AmountButtons from './AmountButtons';

const CartContent = ({ id, img, color, price, name, amount }) => {
  const { removeItem, toggleAmount } = useCartGlobalContext();

  const increase = () => {
    toggleAmount(id, 'increase');
  };

  const decrease = () => {
    toggleAmount(id, 'decrease');
  };

  return (
    <div className="cart_details">
      <div className="cart_details_grid1">
        <img src={img} alt={name} className="cart_details_grid1_img" />

        <div>
          <h5 className="cart_details_grid1_title">{name}</h5>
          <div className="card_details_grid1_flex">
            <p className="cart_details_grid1_color">color:</p>
            <p
              className="cart_details_grid1_color_span"
              style={{ backgroundColor: color }}
            ></p>
          </div>
        </div>
      </div>

      <div className="cart_details_grid2">
        <p className="cart_details_grid2_price">{FormatPrice(price)}</p>
      </div>

      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <div className="cart_details_grid2">
        <p className="cart_details_grid2_price">
          {FormatPrice(price * amount)}
        </p>
      </div>

      <div className="cart_details_trash">
        <FaTrash onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartContent;
