import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/Logo-LetsDecide.png";

const Header: React.FC = () => {
  return (
    <>
      <nav className="header-container">
        <img src={Logo} alt="logo" />
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/rules">Rules</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="fade" />
    </>
  );
};

export default Header;
