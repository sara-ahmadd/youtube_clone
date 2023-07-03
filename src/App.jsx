import { createContext, useState } from "react";
import "./../src/css/index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";

export const sideBarAndCategory_context = createContext();

function App() {
  const [sidebar, setHideSidebar] = useState(true);
  const [categorySelected, setCategorySelected] = useState("New");

  const changeTheSelectedCategor = (text) => {
    setCategorySelected(text);
  };
  const showSideBar = () => {
    setHideSidebar(!sidebar);
  };

  const contextObject = {
    showSideBar,
    sidebar,
    changeTheSelectedCategor,
    categorySelected,
  };

  return (
    <BrowserRouter>
      <sideBarAndCategory_context.Provider value={contextObject}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:video_Id" element={<VideoDetails />} />
            <Route path="/channel/:channel_Id" element={<ChannelDetails />} />
          </Routes>
        </div>
      </sideBarAndCategory_context.Provider>
    </BrowserRouter>
  );
}

export default App;
