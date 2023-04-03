import React from 'react';
import Filter from '../components/Filter';
import ProductsList from '../components/ProductsList';
import Sort from '../components/Sort';

const ProductsPage = () => {
  return (
    <div>
      <div className="about_hero">
        <h3 className="about_hero_h">HOME/PRODUCTS</h3>
      </div>

      <div className="products_page">
        <div className="products_page_center">
          <div className="products_page_center_grid1">
            <Filter />
          </div>

          <div className="products_page_center_grid2">
            <Sort />
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
