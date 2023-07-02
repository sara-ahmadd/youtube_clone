import React from "react";
import library from "./../../images/library_icon.svg";
import history from "./../../images/history.svg";
import video from "./../../images/video.svg";
import watch_later from "./../../images/watch-later.svg";
import like from "./../../images/like.svg";
import "./../../css/sidebar.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import Section from "./Section";

function Section_2({ categorySelected, setCategorySelected }) {
  const staticData = [
    { img: library, text: "Library" },
    { img: history, text: "History" },
    { img: video, text: "Your Videos" },
    { img: watch_later, text: "Watch Later" },
    { img: like, text: "Liked Videos" },
  ];
  return (
    <Section
      title={"Explore"}
      data={staticData}
      setCategorySelected={setCategorySelected}
    />
  );
}

export default Section_2;
