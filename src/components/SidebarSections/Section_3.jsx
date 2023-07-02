import React from "react";
import trend from "./../../images/trend.svg";
import music from "./../../images/music.svg";
import live from "./../../images/live.svg";
import game from "./../../images/game.svg";
import cup from "./../../images/cup.svg";
import "./../../css/sidebar.css";
import { Link, NavLink } from "react-router-dom";
import Section from "./Section";

function Section_3({ categorySelected, setCategorySelected }) {
  const staticData = [
    { img: trend, text: "Trending" },
    { img: music, text: "Music" },
    { img: live, text: "Live" },
    { img: game, text: "Gaming" },
    { img: cup, text: "Sports" },
  ];
  return (
    <Section
      title={"Explore"}
      data={staticData}
      setCategorySelected={setCategorySelected}
    />
  );
}

export default Section_3;
