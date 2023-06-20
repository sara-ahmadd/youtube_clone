import React from "react";
import trend from "./../../images/trend.svg";
import music from "./../../images/music.svg";
import live from "./../../images/live.svg";
import game from "./../../images/game.svg";
import cup from "./../../images/cup.svg";
import "./../../css/sidebar.css";
import { NavLink } from "react-router-dom";

function Section_4({ categorySelected, setCategorySelected }) {
  const staticData = [
    { img: trend, text: "Education" },
    { img: music, text: "NextJs" },
    { img: live, text: "ReactJs" },
    { img: game, text: "Coding" },
    { img: cup, text: "Podcast" },
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
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Section_4;
