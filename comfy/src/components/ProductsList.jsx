import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useFilterGlobal } from '../context/FilterContext';
const ProductsList = () => {
  const { filtered_Products, grid_view } = useFilterGlobal();

  if (filtered_Products < 1) {
    return <h2>Sorry, no products matched your search...</h2>;
  }

  if (grid_view === false) {
    return <ListView allProducts={filtered_Products} />;
  }

  return <GridView allProducts={filtered_Products}> </GridView>;
};

export default ProductsList;
