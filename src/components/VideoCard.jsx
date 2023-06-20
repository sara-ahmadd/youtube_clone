import React, { useEffect } from "react";
import "./../css/video_card.css";

function VideoCard({ video }) {
  const timeStamp = () => {
    const currDate = new Date();
    console.log(
      `${currDate.getFullYear()}-${
        currDate.getMonth() + 1
      }-${currDate.getDate()}`
    );
  };
  useEffect(() => {
    timeStamp();
  });
  return (
    <div className="video_card">
      <div className="img">
        <img src={video.snippet.thumbnails.medium.url} alt="img" />
      </div>
      <div className="text">
        <div className="description">{video.snippet.title.slice(0, 50)}</div>
        <div className="channel_name">{video.snippet.channelTitle}</div>
        <div className="views">
          <p>{video.snippet.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
