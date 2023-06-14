import React from "react";
import { MdHomeFilled } from "react-icons/md";
import shorts from "./../../images/blach-shorts.svg";
import subs from "./../../images/subscription.svg";
import "./../../css/sidebar.css";

function Section_1() {
  return (
    <>
      <div className="section">
        <ul className="icons_list">
          <li className="list_item">
            <a href=".">
              <MdHomeFilled />
              <span>Home</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={shorts} alt="shorts" />
              </div>
              <span>Shorts</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={subs} alt="subscriptions" />
              </div>
              <span>Subscriptions</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Section_1;
