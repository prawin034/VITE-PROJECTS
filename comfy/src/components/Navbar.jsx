import React from 'react';
import NavWrapper from '../utils/NavWrapper';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { useProductsContext } from '../context/ProductsContext';
import { useCartGlobalContext } from '../context/CartContext';
import { SIDEBAR_CLOSE } from '../utils/Actions';
import { useUserGlobalContext } from '../context/UserContext';
import { User } from '@auth0/auth0-react';
const Navbar = () => {
  const { SideBarOpen, SideBarClose, modalOpen } = useProductsContext();
  const { total_items } = useCartGlobalContext();

  const { loginWithRedirect, logout, myUser } = useUserGlobalContext();

  return (
    <NavWrapper>
      {/* LOGOS */}
      <div className="navbar_logo">
        <Link to="/">
          <img src={logo} alt="comfy-sloth" className="navbar_logo_img" />
        </Link>
      </div>

      {modalOpen ? (
        <button className="navbar_toggle">
          <FaBars onClick={SideBarOpen} className="navbar_toggle_bar" />
        </button>
      ) : (
        <button onClick={SideBarClose} className="navbar_toggle">
          <FaTimes className="navbar_toggle_bar" />
        </button>
      )}

      {/* LINKS */}

      <ul className={`${modalOpen ? 'navbar_list  ' : 'navbar_list  active'}`}>
        <li className="navbar_list_link">
          <Link onClick={SIDEBAR_CLOSE} to="/" className="navbar_list_link_a">
            HOME
          </Link>
        </li>
        {/*ABOUT */}
        <li className="navbar_list_link">
          <Link
            onClick={SideBarClose}
            to="/about"
            className="navbar_list_link_a"
          >
            ABOUT
          </Link>
        </li>
        {/*PRODUCT*/}
        <li className="navbar_list_link">
          <Link
            onClick={SideBarClose}
            to="/products"
            className="navbar_list_link_a"
          >
            PRODUCTS
          </Link>
        </li>
        {/*CHECKOUT */}
        {myUser && (
          <li className="navbar_list_link">
            <Link
              onClick={SideBarClose}
              to="/checkout"
              className="navbar_list_link_a"
            >
              CHECKOUT
            </Link>
          </li>
        )}
      </ul>

      {/*CART  */}

      <div className={`${modalOpen ? 'cart_flex ' : 'cart_flex active'}`}>
        <div className="cart">
          <Link to="/cart" onClick={SideBarClose} className="cart_btn">
            Cart
            <span>
              <ImCart color="#222222" />
            </span>
            <span className="cart_btn_badge">{total_items}</span>
          </Link>
        </div>
        {/* LOGIN */}
        <div className="cart">
          {myUser ? (
            <button
              className="cart_btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
              <span>
                <MdPeopleAlt color="#222222" />
              </span>
            </button>
          ) : (
            <button className="cart_btn" onClick={loginWithRedirect}>
              Login
              <span>
                <MdPeopleAlt color="#222222" />
              </span>
            </button>
          )}
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
