import React, { useEffect, useState } from "react";
import fetchVideos from "../data/fetchData";
import SideBar from "./SideBar";
import MiniSideBar from "./MiniSideBar";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import "./../css/home.css";

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
        <div className="videos-grid">
          {videos &&
            videos.length > 0 &&
            videos.map((item, id) => {
              {
                return item.id.videoId ? (
                  <VideoCard video={item} key={id} />
                ) : (
                  item.id.channelId && <ChannelCard channel={item} key={id} />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
