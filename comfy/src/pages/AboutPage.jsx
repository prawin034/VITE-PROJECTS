import React from 'react';
import About from '../components/About';
const AboutPage = () => {
  return (
    <>
      <div className="about_hero">
        <h3 className="about_hero_h">HOME/ABOUT</h3>
      </div>
      <main>
        <About title="ABOUT" />
      </main>
    </>
  );
};

export default AboutPage;
