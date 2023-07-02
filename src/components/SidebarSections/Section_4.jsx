import React from "react";
import "./../../css/sidebar.css";
import { BiCode } from "react-icons/bi";
import { BiCodeCurly } from "react-icons/bi";
import { LuPodcast } from "react-icons/lu";
import Section from "./Section";

function Section_4({ categorySelected, setCategorySelected }) {
  const staticData = [
    { icon: <BiCodeCurly />, text: "Education" },
    { icon: <BiCode />, text: "NextJs" },
    { icon: <BiCode />, text: "ReactJs" },
    { icon: <BiCode />, text: "Coding" },
    { icon: <LuPodcast />, text: "Podcast" },
  ];
  return (
    <Section
      title={"Subscriptions"}
      data={staticData}
      setCategorySelected={setCategorySelected}
    />
  );
}

export default Section_4;
