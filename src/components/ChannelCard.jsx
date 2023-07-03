import React from "react";
import "./../css/video_card.css";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

function ChannelCard({ channel }) {
  return (
    <div className="video_card">
      <div className="channel_img ">
        <img src={channel?.snippet?.thumbnails?.medium?.url} alt="img" />
      </div>
      <div className="text">
        <Link to={`/channel/${channel.id.channelId}`} className="description">
          {channel.snippet.title.slice(0, 50)}
        </Link>
        <Link to={`/channel/${channel.id.channelId}`} className="channel_name">
          <span className="title"> @{channel?.snippet?.channelTitle}</span>
          <BsCheckCircleFill />
        </Link>
      </div>
    </div>
  );
}

export default ChannelCard;
