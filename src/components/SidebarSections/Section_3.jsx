import React from "react";
import trend from "./../../images/trend.svg";
import music from "./../../images/music.svg";
import live from "./../../images/live.svg";
import game from "./../../images/game.svg";
import cup from "./../../images/cup.svg";
import "./../../css/sidebar.css";
import { NavLink } from "react-router-dom";

function Section_3({ categorySelected, setCategorySelected }) {
  const staticData = [
    { img: trend, text: "Trending" },
    { img: music, text: "Music" },
    { img: live, text: "Live" },
    { img: game, text: "Gaming" },
    { img: cup, text: "Sports" },
  ];
  return (
    <>
      <div className="section">
        <h3>Explore</h3>
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

export default Section_3;
