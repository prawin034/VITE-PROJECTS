import React, { useEffect } from 'react';
import { single_product_url as url } from '../data/Constants';
import {
  useParams,
  useLocation,
  Link,
  useNavigate,
  redirect,
} from 'react-router-dom';
import FormatPrice from '../utils/FormatPrice';
import { useProductsContext } from '../context/ProductsContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProductImages from '../components/ProductImages';
import Stars from '../components/Stars';
import AddtoCart from '../components/AddtoCart';
const SingleProduct = () => {
  const { id } = useParams();

  const {
    SingleProduct: singleProduct,
    single_products_loading: loading,
    single_products_error: error,
    single_products: product,
  } = useProductsContext();

  useEffect(() => {
    singleProduct(`${url}${id}`);
  }, [id]);

  const location = useNavigate();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        location('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    images,
    stars,
    reviews,
    name,
    price,
    description,
    stock,
    id: sku,
    company,
    colors,
  } = product ? product : '';

  return (
    <section className="single_product">
      <div className="about_hero">
        <h3 className="about_hero_h">HOME/{product?.name}</h3>
      </div>

      <div className="single_product_btnbox">
        <Link to="/products" className="single_product_btnbox_btn">
          BACK TO PRODUCT
        </Link>
      </div>

      <div className="product_container">
        <ProductImages images={images} />

        <section className="product_container_content">
          <h2 className="product_container_content_name">{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h4 className="product_container_content_price">
            {FormatPrice(price)}
          </h4>
          <p className="product_container_content_description">{description}</p>
          <p className="product_container_content_info">
            <span>AVAILABLE : </span>
            {stock > 0 ? ' IN STOCK' : 'OUT OF STOCK'}
          </p>
          <p className="product_container_content_info">
            <span>SKU : </span>
            {sku}
          </p>
          <p className="product_container_content_info">
            <span>BRAND : </span>
            {company}
          </p>
          <hr />

          {stock > 0 && <AddtoCart product={product} />}
        </section>
      </div>
    </section>
  );
};

export default SingleProduct;
