import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchVideos from "../data/fetchData";
import VideosGrid from "./VideosGrid";
import "./../css/channel_details.css";
import MiniSideBar from "./MiniSideBar";
import SideBar from "./SideBar";

function ChannelDetails({ side_bar, categorySelected, setCategorySelected }) {
  const { channel_Id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const url = `channels?id=${channel_Id}`;
  const url_2 = `search?channelId=${channel_Id}&order=date`;

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
      {side_bar && (
        <SideBar
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
      )}
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
