import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <section className="error">
      <div className="error_page">
        <h1 className="error_page_title">404</h1>
        <p className="error_page_p">
          Sorry,the page you tried cannot be found.
        </p>
        <Link to="/" className="error_page_btn">
          BACK HOME
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
