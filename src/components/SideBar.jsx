import React from "react";
import { MdHomeFilled } from "react-icons/md";
import shorts from "./../images/blach-shorts.svg";
import subs from "./../images/subscription.svg";
import "./../css/sidebar.css";
import Section_2 from "./SidebarSections/Section_2";
import Section_1 from "./SidebarSections/Section_1";
import Section_3 from "./SidebarSections/Section_3";

function SideBar() {
  return (
    <div className="side_bar">
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </div>
  );
}

export default SideBar;
