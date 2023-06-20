import React from "react";
import { MdHomeFilled } from "react-icons/md";
import shorts from "./../../images/blach-shorts.svg";
import subs from "./../../images/subscription.svg";
import "./../../css/sidebar.css";
import { NavLink } from "react-router-dom";

function Section_1({ categorySelected, setCategorySelected }) {
  return (
    <>
      <div className="section">
        <ul className="icons_list">
          <li className="list_item">
            <NavLink to="/">
              <MdHomeFilled />
              <span onClick={() => setCategorySelected("Home")}>Home</span>
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="/">
              <div>
                <img src={shorts} alt="shorts" />
              </div>
              <span onClick={() => setCategorySelected("Shorts")}>Shorts</span>
            </NavLink>
          </li>
          <li className="list_item">
            <NavLink to="/">
              <div>
                <img src={subs} alt="subscriptions" />
              </div>
              <span onClick={() => setCategorySelected("Subscriptions")}>
                Subscriptions
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Section_1;
