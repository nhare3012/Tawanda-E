import React from "react";
import "./Navbar.css";
import logo from "../img /Capture1-removebg-preview 1.png";
// import banner from "../img /Banner.png";
import { Link } from "react-router-dom";

function Navbar ({click}) {
  return (
    <div className="Navbar">
      <nav>
        <div className="nav__logo">
        <Link to="/"  >
          <img src={logo} alt="Logo" className="img-fluid" />
        </Link>
        </div>

        <ul className="navbar__links">
          <li>
            <Link to="/cart"  >
              <span>
                <i className="fas fa-shopping-cart fa-2x" aria-hidden="true"></i>
              </span>
              <span>
                Cart
                <span className="cartlogo__badge">0</span>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>

        {/* hambuger menu */}
        <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </nav>
      <div className="banner-text">
        <h1>Designer Catalogue</h1>
        <h6>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
          tenetur?
        </h6>
        <div className="banner-links ">
          <button className="btn ">
            <Link to="/cart">shop for men</Link>
          </button>
          <button className="btn b2">
            <Link to="/">shop for women</Link>
          </button>
        </div>
        <p>**complementary 2-3 day shipping</p>
      </div>
    </div>
  );
}

export default Navbar;
