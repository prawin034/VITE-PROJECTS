import React from 'react';
import NavWrapper from '../utils/NavWrapper';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { ImCart } from 'react-icons/im';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import { useProductsContext } from '../context/ProductsContext';
import { SIDEBAR_CLOSE } from '../utils/Actions';
const Navbar = () => {
  const { SideBarOpen, SideBarClose, modalOpen } = useProductsContext();

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
        <li className="navbar_list_link">
          <Link
            onClick={SideBarClose}
            to="/checkout"
            className="navbar_list_link_a"
          >
            CHECKOUT
          </Link>
        </li>
      </ul>

      {/*CART  */}

      <div className={`${modalOpen ? 'cart_flex ' : 'cart_flex active'}`}>
        <div className="cart">
          <Link to="/cart" onClick={SideBarClose} className="cart_btn">
            Cart
            <span>
              <ImCart color="#222222" />
            </span>
          </Link>
        </div>
        {/* LOGIN */}
        <div className="cart">
          <button className="cart_btn">
            Login
            <span>
              <MdPeopleAlt color="#222222" />
            </span>
          </button>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
