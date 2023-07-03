import React from "react";
import "./../css/sidebar.css";
import Section_2 from "./SidebarSections/Section_2";
import Section_1 from "./SidebarSections/Section_1";
import Section_3 from "./SidebarSections/Section_3";
import Section_4 from "./SidebarSections/Section_4";

function SideBar() {
  return (
    <div className="side_bar">
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <footer>
        <ul className="links">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Copyright</a>
          </li>
          <li>
            <a href="/">Contact us</a>
          </li>
          <li>
            <a href="/">Creators</a>
          </li>
          <li>
            <a href="/">Advertise</a>
          </li>
          <li>
            <a href="/">Developers</a>
          </li>
        </ul>
        <ul className="links">
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Policy & Safety</a>
          </li>
          <li>
            <a href="/">How Youtube Works</a>
          </li>
          <li>
            <a href="/">Test new features</a>
          </li>
        </ul>
        <p>&copy; 2023 Google LLC</p>
      </footer>
    </div>
  );
}

export default SideBar;
