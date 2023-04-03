import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import FeatureProducts from '../components/FeatureProducts';

const HomePage = () => {
  return (
    <section className="Home">
      {/*HERO SECTION */}
      <Hero />
      {/*FEATURE SERVICES */}
      <FeatureProducts />
      {/*SERVICES  */}
      <Services />
      {/*CONTACT */}
      <Contact />
    </section>
  );
};

export default HomePage;
