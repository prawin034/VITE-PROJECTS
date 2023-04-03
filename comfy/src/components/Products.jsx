import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormatPrice from '../utils/FormatPrice';
const Products = ({ name, price, image, id }) => {
  return (
    <section className="product">
      <div className="product_content">
        <img className="product_content_img" src={image} alt={name} />
        <Link className="product_content_search" to={`/products/${id}`}>
          <FaSearch />
        </Link>

        <div className="img_flex">
          <h3 className="product_content_title">{name}</h3>
          <p className="product_content_price">{FormatPrice(price)}</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
