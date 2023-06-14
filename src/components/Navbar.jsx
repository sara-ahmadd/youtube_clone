import React from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import logo from "./../images/logo.svg";
import "./../css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav_bar">
      <div className="logo">
        <button className="burger_btn">
          <RxHamburgerMenu />
        </button>
        <a href="/" className="logo_img">
          <img src={logo} alt={"logo"} />
        </a>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="search_icon">
          <BsSearch />
        </button>
      </div>
      <div className="notifications">
        <div className="bell">
          <span className="count">+9</span>
          <BsBell />
        </div>
        <div className="user">
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
