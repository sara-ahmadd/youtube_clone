import React from "react";
import { MdHomeFilled } from "react-icons/md";
import shorts from "./../../images/blach-shorts.svg";
import subs from "./../../images/subscription.svg";
import "./../../css/sidebar.css";
import { Link, NavLink } from "react-router-dom";

function Section_1({ categorySelected, setCategorySelected }) {
  return (
    <>
      <div className="section">
        <div className="icons_list">
          <button
            className="list_item"
            onClick={() => setCategorySelected("Latest")}
          >
            <div className="content">
              <MdHomeFilled />
              <span>Home</span>
            </div>
          </button>
          <button
            className="list_item"
            onClick={() => setCategorySelected("Shorts")}
          >
            <div className="content">
              <div>
                <img src={shorts} alt="shorts" />
              </div>
              <span>Shorts</span>
            </div>
          </button>
          <button
            className="list_item"
            onClick={() => setCategorySelected("Subscriptions")}
          >
            <div className="content">
              <div>
                <img src={subs} alt="subscriptions" />
              </div>
              <span>Subscriptions</span>
            </div>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Section_1;
