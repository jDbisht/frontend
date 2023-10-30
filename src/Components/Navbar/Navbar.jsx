import React from "react";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cartLogo from "../Assets/cart_icon.png";

export const Navbar = () => {
  return (
    <nav className="row">
      <div className="cols-4 brand">
        <img src={logo} alt="shoppers" />
        <p>SHOPPER</p>
      </div>
      <div className="cols-4">
        <ul>
          <li>
            <a href={Shop}> Shop</a>
          </li>
          <li>
            <a href="/"> Men</a>
          </li>
          <li>
            <a href="/"> Womens</a>
          </li>
          <li>
            <a href="/"> Kids</a>
          </li>
        </ul>
      </div>

      <div className="cols-4 btn-grp">
        <button type="submit" id="login">
          Login
        </button>
        <img src={cartLogo} alt="" />
      </div>
    </nav>
  );
};
