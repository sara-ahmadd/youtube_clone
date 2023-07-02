import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import logo from "./../images/logo.svg";
import "./../css/navbar.css";

const Navbar = ({
  side_bar,
  set_side_bar,
  categorySelected,
  setCategorySelected,
}) => {
  const [searchText, setSearchText] = useState("");
  const hideSideBar = () => {
    set_side_bar(!side_bar);
  };
  const updateSearchText = (searchText) => {
    setCategorySelected(searchText);
  };
  return (
    <div className="nav_bar">
      <div className="logo">
        <button onClick={hideSideBar} className="burger_btn">
          <RxHamburgerMenu />
        </button>
        <a href="/" className="logo_img">
          <img src={logo} alt={"logo"} />
        </a>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search_icon"
          type="submit"
          onClick={() => updateSearchText(searchText)}
        >
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
