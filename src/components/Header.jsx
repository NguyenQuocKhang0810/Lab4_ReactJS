import React, { useState, useEffect } from "react";
import { useUserContext } from "./UserContext";
import LoginPopup from "./LoginPopup";

const Header = ({ cartCount, togglePopup }) => {
  const { user, setUser } = useUserContext();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  console.log("user: ", user);

  const handleUserIconClick = () => {
    setLoginPopupOpen(true);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="index.html">
            <span> Pizza House </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="menu.html">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="book.html">
                  Book Table
                </a>
              </li>
            </ul>
            <div className="user_option">
              {user ? (
                <div className="user_link" onClick={handleLogout}>
                  <div style={{ marginRight: 10 }}>
                    <i
                      className="fa-solid fa-right-from-bracket"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              ) : (
                <div className="user_link" onClick={handleUserIconClick}>
                  <div style={{ marginRight: 10 }}>
                    <i className="fa fa-user" style={{ cursor: "pointer" }}></i>
                  </div>
                </div>
              )}

              <div className="cart_link" onClick={togglePopup}>
                <div>
                  <i
                    className="fa fa-shopping-cart"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                <span className="number-item">
                  {cartCount > 0 ? cartCount : 0}
                </span>{" "}
                {/* Display total cart count */}
              </div>
              <form className="form-inline">
                <button
                  className="btn my-2 my-sm-0 nav_search-btn"
                  type="submit"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              {/* Display user's information if logged in, else show login */}
              {user ? (
                <span style={{ color: "white" }} className="welcome-text">
                  Welcome, {user?.data?.name}
                </span>
              ) : (
                <a
                  className="order_online"
                  style={{ cursor: "pointer" }}
                  onClick={handleUserIconClick}
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>

      {/* Render the login popup */}
      {isLoginPopupOpen && (
        <LoginPopup onClose={() => setLoginPopupOpen(false)} />
      )}
    </header>
  );
};

export default Header;
