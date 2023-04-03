import React from 'react';
import aboutimg from '../assets/hero-bcg.jpeg';
const About = () => {
  return (
    <section className="about">
      <div className="about_imgbox">
        <img src={aboutimg} alt="ABOUT IMG" className="about_imgbox_img" />
      </div>
      <div className="about_content">
        <h2 className="about_content_title">OUR STORY</h2>
        <p className="about_content_p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          voluptatum inventore laudantium delectus aliquam culpa beatae, quod
          sint a nam quos, adipisci vel quas quidem illum esse sapiente iste?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque
          voluptatum inventore laudantium delectus aliquam culpa beatae, quod
          sint a nam quos, adipisci vel quas quidem illum esse sapiente iste?
        </p>
      </div>
    </section>
  );
};

export default About;
