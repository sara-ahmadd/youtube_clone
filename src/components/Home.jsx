import React, { useEffect, useState } from "react";
import fetchVideos from "../data/fetchData";
import SideBar from "./SideBar";
import MiniSideBar from "./MiniSideBar";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import "./../css/home.css";
import VideosGrid from "./VideosGrid";

function Home({ side_bar, categorySelected, setCategorySelected }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const url = `search?q=${categorySelected}`;
    fetchVideos(url).then((res) => {
      setVideos(res);
      console.log(res);
    });
  }, [categorySelected]);

  return (
    <div className="container">
      {side_bar ? (
        <SideBar
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      ) : (
        <MiniSideBar
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      )}
      <div className="feed">
        <h3>{categorySelected}</h3>
        <VideosGrid videos={videos} />
      </div>
    </div>
  );
}

export default Home;
