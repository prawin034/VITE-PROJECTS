import React, { useState } from 'react';
import { useFilterGlobal } from '../context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import { getUniqueValues } from '../utils/FormatPrice';
import FormatPrice from '../utils/FormatPrice';
const Filter = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },

    updatefilters,
    clearFilters,
    allProducts,
  } = useFilterGlobal();

  const categories = getUniqueValues(allProducts, 'category');
  const companies = getUniqueValues(allProducts, 'company');
  const colors = getUniqueValues(allProducts, 'colors');

  return (
    <div className="content">
      <form onSubmit={(e) => e.preventDefault()} className="content_form">
        {/* SEARCH INPUT */}

        <div className="content_form_inputbox">
          <input
            type="text"
            name="text"
            value={text}
            onChange={updatefilters}
            className="content_form_inputbox_input"
            placeholder="Search"
          />
        </div>

        {/* CATEGORIES */}
        <div className="content_form_category">
          <h5 className="content_form_category_title">category</h5>
          <div className="content_form_category_btns">
            {categories.map((c, index) => {
              return (
                <button
                  className={`${
                    category === c.toLowerCase()
                      ? 'content_form_category_btns_btn actives'
                      : 'content_form_category_btns_btn'
                  }`}
                  key={index}
                  onClick={updatefilters}
                  name="category"
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        {/* COMPANY */}

        <div className="content_form_companies">
          <h5 className="content_form_category_title">Companies</h5>
          <select
            className="content_form_companies_select"
            name="company"
            value={company}
            onChange={updatefilters}
          >
            {companies.map((com, index) => {
              return (
                <option
                  className={`${
                    company === com.toLowerCase()
                      ? 'content_form_companies_select actives'
                      : 'content_form_companies_select'
                  }`}
                  key={index}
                  value={com}
                >
                  {com}
                </option>
              );
            })}
          </select>
        </div>
        {/* COLOR */}

        <div className="content_form_colors">
          <h5 className="content_form_category_title">COLORS</h5>

          <div className="content_form_colors_box">
            {colors.map((col, index) => {
              if (col === 'all') {
                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updatefilters}
                    data-color="all"
                    className={`${col === 'all' ? 'all all_active' : 'all'}`}
                  >
                    all
                  </button>
                );
              }
              return (
                <button
                  name="color"
                  data-color={col}
                  onClick={updatefilters}
                  key={index}
                  className={`content_form_colors_box_color ${
                    color === col ? 'active-color' : ''
                  }`}
                  style={{ backgroundColor: col }}
                >
                  {color === col ? <FaCheck size={10} /> : null}
                </button>
              );
            })}
          </div>
        </div>
        {/* PRICE */}

        <div className="content_form_price">
          <h5 className="content_form_category_title">Price</h5>
          <p>{FormatPrice(price)}</p>
          <input
            type="range"
            min={min_price}
            max={max_price}
            value={price}
            name="price"
            onChange={updatefilters}
          />
        </div>
        {/* SHIPPING */}

        <div
          className="content_form_shipping"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={updatefilters}
            checked={shipping}
          />
        </div>
        {/* CLEAR FILTERS */}
      </form>

      <div className="content_clear">
        <button
          className="content_clear_btn"
          type="button"
          onClick={clearFilters}
        >
          CLEAR FILTERS
        </button>
      </div>
    </div>
  );
};

export default Filter;
