import React from "react";
import "./../css/video_card.css";

function ChannelCard({ channel }) {
  return (
    <div className="video_card">
      <div className="img">
        <img src={channel.snippet.thumbnails.medium.url} alt="img" />
      </div>
      <div className="text">
        <div className="description">{channel.snippet.title.slice(0, 50)}</div>
        <div className="channel_name">{channel.snippet.channelTitle}</div>
        <div className="views">
          <p>{channel.snippet.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ChannelCard;
