import React, { useContext } from "react";
import { MdHomeFilled } from "react-icons/md";
import shorts from "./../images/blach-shorts.svg";
import subs from "./../images/subscription.svg";
import library from "./../images/library_icon.svg";
import "./../css/mini_sidebar.css";
import { NavLink } from "react-router-dom";
import { sideBarAndCategory_context } from "../App";

function MiniSideBar() {
  const { changeTheSelectedCategor } = useContext(sideBarAndCategory_context);
  return (
    <div className="mini_side_bar">
      <div className="section">
        <ul className="icons_list">
          <button
            className="list_item"
            onClick={() => changeTheSelectedCategor("Latest")}
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
          <button
            className="list_item"
            onClick={() => setCategorySelected("Library")}
          >
            <div className="content">
              <div>
                <img src={library} alt="library" />
              </div>
              <span>Library</span>
            </div>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default MiniSideBar;
