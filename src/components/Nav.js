import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";

const Nav = () => {
  return (
    <nav style={{ minHeight: "5vh" }}>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/" className="pages">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="pages">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/qa" className="pages">
            Q&A
          </Link>
        </li>
        <li>
          <Link to="/tdee" className="pages">
            TDEE
          </Link>
        </li>
        <li>
          <Link to="/contact" className="pages">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
