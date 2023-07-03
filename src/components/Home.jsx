import React, { useContext, useEffect, useState } from "react";
import fetchVideos from "../data/fetchData";
import SideBar from "./SideBar";
import MiniSideBar from "./MiniSideBar";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import "./../css/home.css";
import VideosGrid from "./VideosGrid";
import { sideBarAndCategory_context } from "../App";

function Home() {
  const [videos, setVideos] = useState([]);

  const { sidebar, categorySelected } = useContext(sideBarAndCategory_context);

  useEffect(() => {
    const url = `search?q=${categorySelected}`;
    fetchVideos(url).then((res) => {
      setVideos(res);
      console.log(res);
    });
  }, [categorySelected]);

  return (
    <div className="container">
      {sidebar ? <SideBar /> : <MiniSideBar />}
      <div className="feed">
        <h3>{categorySelected}</h3>
        <VideosGrid videos={videos} />
      </div>
    </div>
  );
}

export default Home;
