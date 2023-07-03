import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import logo from "./../images/logo.svg";
import "./../css/navbar.css";
import { sideBarAndCategory_context } from "../App";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");

  const { showSideBar, changeTheSelectedCategor } = useContext(
    sideBarAndCategory_context
  );

  const updateSearchText = (searchText) => {
    changeTheSelectedCategor(`Results For : ${searchText}`);
  };
  return (
    <div className="nav_bar">
      <div className="logo">
        <button onClick={showSideBar} className="burger_btn">
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
          onClick={() => {
            updateSearchText(searchText);
            setSearchText("");
          }}
        >
          <Link to={"/"}>
            <BsSearch />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
