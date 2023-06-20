import React from "react";
import { MdHomeFilled } from "react-icons/md";
import shorts from "./../images/blach-shorts.svg";
import subs from "./../images/subscription.svg";
import library from "./../images/library_icon.svg";
import "./../css/mini_sidebar.css";
import { NavLink } from "react-router-dom";

function MiniSideBar({ setCategorySelected }) {
  return (
    <div className="mini_side_bar">
      <div className="section">
        <ul className="icons_list">
          <li className="list_item">
            <NavLink to="/" onClick={() => setCategorySelected("Home")}>
              <MdHomeFilled />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="/" onClick={() => setCategorySelected("Shorts")}>
              <div>
                <img src={shorts} alt="shorts" />
              </div>
              <span>Shorts</span>
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink
              to="/"
              onClick={() => setCategorySelected("Subscriptions")}
            >
              <div>
                <img src={subs} alt="subscriptions" />
              </div>
              <span>Subscriptions</span>
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="/" onClick={() => setCategorySelected("Library")}>
              <div>
                <img src={library} alt="library" />
              </div>
              <span>Library</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MiniSideBar;
