import React from 'react';
import { Link } from 'react-router-dom';
import herobcg from '../assets/hero-bcg.jpeg';
import herobcg2 from '../assets/hero-bcg-2.jpeg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_content">
        <h1 className="hero_content_title">
          DESIGN YOUR <br /> COMFORT ZONE
        </h1>
        <p className="hero_content_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          molestias fugiat a ipsa mollitia est alias ratione, repellat delectus
          impedit quibusdam asperiores corporis laborum, quos voluptatibus quis
          nisi ad! Optio.
        </p>
        <Link to="/products" className="hero_content_btn">
          SHOP
        </Link>
      </div>
      <div className="hero_imgbox">
        <img src={herobcg} alt="hero-img" className="hero_imgbox_img" />
        <p className="hero_imgbox_img3" />
        <img src={herobcg2} alt="hero-img2" className="hero_imgbox_img2" />
      </div>
    </section>
  );
};

export default Hero;
