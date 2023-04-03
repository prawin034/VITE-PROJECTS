import React, { useEffect } from 'react';
import { useProductsContext } from '../context/ProductsContext';
import Loading from './Loading';
import Error from './Error';
// import Product from './Products';
import Products from './Products';
const FeatureProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    feature_products: featured,
    FetchProducts,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="features">
      <h2 className="features_title">FEATURE PRODUCTS</h2>
      <div className="features_content">
        {featured?.slice(0, 3).map((product) => {
          return <Products key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default FeatureProducts;
