import React from 'react';
import { services } from '../data/Constants';

const Services = () => {
  return (
    <section className="services">
      <div className="services_content">
        <h2 className="services_content_title">
          Custom Furniture <br /> Built Only For You
        </h2>
        <p className="services_content_para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro minus
          iste exercitationem, culpa quos aperiam ipsum at iusto adipisci
        </p>
      </div>

      <div className="services_box">
        {services.map((service) => {
          const { id, text, title, icon } = service;

          return (
            <div className="services_box_box" key={id}>
              <span className="services_box_box_img">{icon}</span>
              <h3 className="services_box_box_title">{title}</h3>
              <p className="services_box_box_text">{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
