import React from "react";
import './Navbar.css';

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
            <li>Shop</li>
            <li>Men</li>
            <li>Womens</li>
            <li>Kids</li>
          </ul>
        </div>

      <div className="cols-4">
        <button type="submit">Login</button>
        <img src={cartLogo} alt="" />
        </div>
    </nav>
  );
};
