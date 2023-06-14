import React from "react";
import trend from "./../../images/trend.svg";
import music from "./../../images/music.svg";
import live from "./../../images/live.svg";
import game from "./../../images/game.svg";
import cup from "./../../images/cup.svg";
import "./../../css/sidebar.css";

function Section_3() {
  return (
    <>
      <div className="section">
        <h3>Explore</h3>
        <ul className="icons_list">
          <li className="list_item">
            <a href=".">
              <div>
                <img src={trend} alt="trend" />
              </div>
              <span>Trending</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={music} alt="music" />
              </div>
              <span>Music</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={live} alt="live" />
              </div>
              <span>Live</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={game} alt="game" />
              </div>
              <span>Gaming</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={cup} alt="cup" />
              </div>
              <span>Sports</span>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default Section_3;
