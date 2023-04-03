import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h5 className="footer_text">
        &copy;{new Date().getFullYear()}{' '}
        <span className="footer_span">ComfySloth</span> All rights reserved
      </h5>
    </footer>
  );
};

export default Footer;
