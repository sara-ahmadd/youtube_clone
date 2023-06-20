import React from "react";
import trend from "./../../images/trend.svg";
import music from "./../../images/music.svg";
import live from "./../../images/live.svg";
import game from "./../../images/game.svg";
import cup from "./../../images/cup.svg";
import "./../../css/sidebar.css";
import { BiCode } from "react-icons/bi";
import { BiCodeCurly } from "react-icons/bi";
import { LuPodcast } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Section_4({ categorySelected, setCategorySelected }) {
  const staticData = [
    { img: <BiCodeCurly />, text: "Education" },
    { img: <BiCode />, text: "NextJs" },
    { img: <BiCode />, text: "ReactJs" },
    { img: <BiCode />, text: "Coding" },
    { img: <LuPodcast />, text: "Podcast" },
  ];
  return (
    <>
      <div className="section">
        <h3>Subscriptions</h3>
        <ul className="icons_list">
          {staticData.map((item) => {
            return (
              <li className="list_item" key={item.text}>
                <NavLink to="/">
                  {item.img}
                  <span onClick={() => setCategorySelected(item.text)}>
                    {item.text}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Section_4;
