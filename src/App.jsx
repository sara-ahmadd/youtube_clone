import { useState } from "react";
import "./../src/css/index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [hideSidebar, setHideSidebar] = useState(true);
  const [categorySelected, setCategorySelected] = useState("Home");
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar
          side_bar={hideSidebar}
          set_side_bar={setHideSidebar}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                side_bar={hideSidebar}
                categorySelected={categorySelected}
                setCategorySelected={setCategorySelected}
              />
            }
          />
          <Route path="/video/:video_Id" element={<VideoDetails />} />
          <Route path="/channel/:channel_Id" element={<ChannelDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
