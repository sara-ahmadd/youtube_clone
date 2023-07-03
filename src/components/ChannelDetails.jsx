import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchVideos from "../data/fetchData";
import VideosGrid from "./VideosGrid";
import "./../css/channel_details.css";
import MiniSideBar from "./MiniSideBar";
import SideBar from "./SideBar";
import { sideBarAndCategory_context } from "../App";

function ChannelDetails() {
  const { channel_Id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const url = `channels?order=date&part=snippet,statistics&id=${channel_Id}`;
  const url_2 = `search?channelId=${channel_Id}`;

  const { sidebar } = useContext(sideBarAndCategory_context);

  useEffect(() => {
    fetchVideos(url).then((res) => {
      setChannel(res[0]);
      console.log(channel);
    });

    fetchVideos(url_2).then((res) => {
      setVideos(res);
      console.log(videos);
    });
  }, [channel_Id]);

  const subscribers = parseInt(
    channel?.statistics?.subscriberCount
  ).toLocaleString();
  return (
    <div className="container ">
      {sidebar && <SideBar />}
      <div className="channel">
        <div className="profile">
          <div className="img">
            <img src={`${channel?.snippet?.thumbnails?.default?.url}`} alt="" />
          </div>
          <div className="text">
            <h2>{channel?.snippet?.localized?.title}</h2>
            <p>{channel?.snippet?.customUrl}</p>
            <p>{subscribers} Subscribers</p>
            <p className="description">{channel?.snippet?.description}</p>
          </div>
        </div>
        <VideosGrid videos={videos} />
      </div>
    </div>
  );
}

export default ChannelDetails;
