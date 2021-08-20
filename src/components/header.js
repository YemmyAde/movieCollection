import React from "react";
import "./styles.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div class="flexContainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logoImg" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
