import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <a href="">Home</a>
        <div className="a-div">
          <a href="">Log in</a>
          <a href="">Sign up</a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
