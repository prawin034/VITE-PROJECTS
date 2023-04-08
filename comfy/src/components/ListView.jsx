import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ListView = ({ allProducts }) => {
  const [para, setpara] = useState(true);
  return (
    <section className="list_view">
      {allProducts?.map((product) => {
        const { id, name, image, price, description } = product;
        return (
          <article
            className="list_view_container"
            key={id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <img src={image} alt={name} className="product_content_img" />

            <div
              className="list_view_container_content"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '50%',
              }}
            >
              <h2 className="product_content_title">{name}</h2>
              <p className="product_content_title">{price}</p>
              <p className="product_content_price">
                {para ? description.substring(0, 100) : description}
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '2rem',
                  }}
                  onClick={() => setpara(!para)}
                >
                  ...
                </button>
              </p>

              <Link
                className="product_content_title"
                style={{
                  backgroundColor: 'pink',
                  textDecorationLine: 'none',
                  padding: '1rem',
                  marginBottom: '2rem',

                  display: 'inline-block',
                  width: 'fit-content',
                }}
                to={`/products/${id}`}
              >
                DETAILS
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
