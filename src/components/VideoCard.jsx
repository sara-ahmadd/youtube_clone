import React, { useEffect } from "react";
import "./../css/video_card.css";
import { Link } from "react-router-dom";

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
        <img src={video?.snippet?.thumbnails?.medium?.url} alt="img" />
      </div>
      <div className="text">
        <Link to={`/video/${video.id.videoId}`} className="description">
          {video.snippet.title.slice(0, 50)}
        </Link>
        <Link
          to={`/channel/${video.snippet.channelId}`}
          className="channel_name"
        >
          {video.snippet.channelTitle}
        </Link>
        <div className="views">
          <p>{video?.snippet?.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
