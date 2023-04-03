import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useFilterGlobal } from '../context/FilterContext';
const ProductsList = () => {
  const { filtered_Products: products } = useFilterGlobal();
  console.log(products);
  return <GridView></GridView>;
};

export default ProductsList;
