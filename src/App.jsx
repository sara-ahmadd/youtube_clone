import { useState } from "react";
import "./../src/css/index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
