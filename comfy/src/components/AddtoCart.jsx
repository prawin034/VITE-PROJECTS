import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from './AmountButtons';
import { Link } from 'react-router-dom';
import { useCartGlobalContext } from '../context/CartContext';
const AddtoCart = ({ product }) => {
  const { AddToCart } = useCartGlobalContext();

  const { id, colors, stock } = product;
  const [mainColor, setmainColor] = useState(colors[0]);
  const [amount, setamount] = useState(1);

  const increase = () => {
    setamount((oldamount) => {
      let tempAmount = oldamount + 1;

      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setamount((oldamount) => {
      let tempAmount = oldamount - 1;

      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <section className="addtoCart">
      <div className="addtoCart_colors">
        <span className="addtoCart_colors_span">colors: </span>
        <div className="colors_flex">
          {colors.map((color, index) => {
            return (
              <button
                className={`${
                  mainColor === color
                    ? 'colors_btn colors_active'
                    : 'colors_btn'
                } `}
                style={{ backgroundColor: color }}
                key={index}
                onClick={() => setmainColor(color)}
              >
                {mainColor === color ? (
                  <FaCheck fontSize="1rem" color="#fff" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="addtoCart_btn">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />

        <Link
          onClick={() => AddToCart(id, mainColor, amount, product)}
          className="add_link"
          to="/cart"
        >
          ADD TO CART
        </Link>
      </div>
    </section>
  );
};

export default AddtoCart;
