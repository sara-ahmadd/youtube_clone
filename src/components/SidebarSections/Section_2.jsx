import React from "react";
import library from "./../../images/library_icon.svg";
import history from "./../../images/history.svg";
import video from "./../../images/video.svg";
import watch_later from "./../../images/watch-later.svg";
import like from "./../../images/like.svg";
import "./../../css/sidebar.css";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Section_2({ categorySelected, setCategorySelected }) {
  const staticData = [
    { img: library, text: "Library" },
    { img: history, text: "History" },
    { img: video, text: "Your Videos" },
    { img: watch_later, text: "Watch Later" },
    { img: like, text: "Liked Videos" },
  ];
  return (
    <>
      <div className="section">
        <ul className="icons_list">
          {staticData.map((item) => {
            return (
              <li className="list_item" key={item.text}>
                <NavLink to="/">
                  <div>
                    <img src={item.img} alt={item.text} />
                  </div>
                  <span onClick={() => setCategorySelected(item.text)}>
                    {item.text}
                  </span>
                </NavLink>
              </li>
            );
          })}
          <li className="list_item">
            <a href=".">
              <IoIosArrowDown />
              <span>Show more</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Section_2;
