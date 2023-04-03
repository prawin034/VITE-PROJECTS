import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <section className="btn_wrapper">
      <div className="btn_wrapper_btns">
        <button
          className="btn_wrapper_btns_btn"
          type="button"
          onClick={decrease}
        >
          <FaMinus />
        </button>
        <h2 className="btn_wrapper_btns_text">{amount}</h2>
        <button
          className="btn_wrapper_btns_btn"
          type="button"
          onClick={increase}
        >
          <FaPlus />
        </button>
      </div>
    </section>
  );
};

export default AmountButtons;
