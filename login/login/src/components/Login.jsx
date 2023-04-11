import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsApple, BsFacebook } from 'react-icons/bs';
const Login = () => {
  return (
    <div className="login_container">
      <div className="login_container_heading">
        <h3 className="login_container_heading_primary">
          <img
            className="login_container_heading_primary_img"
            src="http://zettastack.com/assets/img/logo1-default.png"
            alt="zettastack"
          />
        </h3>
        <h4 className="login_container_heading_secondary">
          Welcome back you've been missed!
        </h4>
      </div>

      <form className="login_container_form">
        <div className="login_container_form_box">
          <input
            type="text"
            className="login_container_form_box_input"
            placeholder="Enter Username"
          />
          <input
            type="password"
            className="login_container_form_box_input"
            placeholder="Password"
          />
        </div>

        <div className="login_container_button">
          <button className="login_container_button_btn">
            Recovery Password
          </button>
        </div>

        <button type="button" className="login_container_login">
          Sign In
        </button>
      </form>

      <p className="login_container_bottom_detail">or continue with</p>

      <div className="login_container_social_links">
        <p className="login_container_social_links_p">
          <FcGoogle size={30} />
        </p>
        <p className="login_container_social_links_p">
          <BsApple size={30} />
        </p>
        <p className="login_container_social_links_p">
          <BsFacebook size={30} color="blue" />
        </p>
      </div>

      <p className="login_container_end">
        Not a member?.{' '}
        <span>
          <a href="#">Register now</a>
        </span>
      </p>
    </div>
  );
};

export default Login;
