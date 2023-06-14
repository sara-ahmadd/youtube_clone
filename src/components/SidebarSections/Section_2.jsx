import React from "react";
import library from "./../../images/library_icon.svg";
import history from "./../../images/history.svg";
import video from "./../../images/video.svg";
import watch_later from "./../../images/watch-later.svg";
import like from "./../../images/like.svg";
import "./../../css/sidebar.css";
import { IoIosArrowDown } from "react-icons/io";

function Section_2() {
  return (
    <>
      <div className="section">
        <ul className="icons_list">
          <li className="list_item">
            <a href=".">
              <div>
                <img src={library} alt="library" />
              </div>
              <span>Library</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={history} alt="history" />
              </div>
              <span>History</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={video} alt="your_videos" />
              </div>
              <span>Your Videos</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={watch_later} alt="watch_later" />
              </div>
              <span>Watch Later</span>
            </a>
          </li>
          <li className="list_item">
            <a href=".">
              <div>
                <img src={like} alt="like" />
              </div>
              <span>Liked Videos</span>
            </a>
          </li>
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
