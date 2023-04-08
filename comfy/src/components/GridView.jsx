import React, { useEffect, useState } from 'react';

import { Link, redirect } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import FormatPrice from '../utils/FormatPrice';
import Products from './Products';
const GridView = ({ allProducts }) => {
  return (
    <section className="features_content">
      {allProducts?.map((product) => {
        return <Products key={product.id} {...product} />;
      })}
    </section>
  );
};

export default GridView;
