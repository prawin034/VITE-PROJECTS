import React, { useState } from 'react';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  const [data, setdata] = useState(0);

  //CHANGE THE IMG BASED  ON INDEX

  const ImgChangeHandler = (index) => {
    setMain(images[index]);
    setdata(index);
  };

  return (
    <section className="product_images">
      <img src={main.url} alt="PRODUCT-IMG" className="product_images_img" />

      <div className="product_images_gallery">
        {images.map((img, index) => {
          return (
            <img
              onClick={() => ImgChangeHandler(index)}
              className={`product_images_gallery_img ${
                index === data ? 'activeimg' : ''
              } `}
              src={img.url}
              alt={img.filename}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
