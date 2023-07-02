import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchVideos from "../data/fetchData";
import VideosGrid from "./VideosGrid";

function ChannelDetails() {
  const { channel_Id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);
  const url = `channels?id=${channel_Id}`;
  const url_2 = `search?channelId=${channel_Id}`;

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

  return (
    <div className="container">
      <h1>channel id = {channel_Id}</h1>
      <div className="container">
        <VideosGrid videos={videos} />
      </div>
    </div>
  );
}

export default ChannelDetails;
