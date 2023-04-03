import React from 'react';
import { NavLink, redirect } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { useGlobalAuthContext } from '../context/Auth';
const Navbar = () => {
  const { googleSignIN, user, logout } = useGlobalAuthContext();

  return (
    <section className="navbar">
      {/* TODO LOGO */}
      <div>
        <div className="navbar_logobox">
          <h2 className="navbar_logobox_logo">TODO_APP</h2>
        </div>
      </div>

      {/* TODO LINKS // LOGIN BTN */}
      <div>
        <ul className="navbar_list">
          <li className="navbar_links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navbar_links_link active' : 'navbar_links_link'
              }
            >
              ALL TODO
            </NavLink>
          </li>
          <li className="navbar_links">
            {user && (
              <NavLink
                to={`${user && '/new'}`}
                className={({ isActive }) =>
                  isActive ? 'navbar_links_link active' : 'navbar_links_link'
                }
              >
                NEW TODO
              </NavLink>
            )}
          </li>

          {/* LOGIN  */}
          <div className="navbar_login">
            {user ? (
              <button onClick={logout} className="navbar_login_btn">
                LOGOUT
              </button>
            ) : (
              <GoogleButton
                onClick={googleSignIN}
                style={{ width: '100%', fontSize: '1.3rem' }}
              />
            )}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
