import React, { useEffect } from "react";
import "./../css/video_card.css";
import { Link } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";

function VideoCard({ video }) {
  return (
    <div className="video_card" title={`${video.snippet.title}`}>
      <div className="img">
        <img src={video?.snippet?.thumbnails?.medium?.url} alt="img" />
      </div>
      <div className="text">
        <Link to={`/video/${video.id.videoId}`} className="description">
          {video.snippet.title.slice(0, 50)}...
        </Link>
        <Link
          to={`/channel/${video.snippet.channelId}`}
          className="channel_name"
        >
          {video.snippet.channelTitle}
          <BsCheckCircleFill />
        </Link>
        <div className="views">
          <p>Published at {video?.snippet?.publishedAt.slice(0, 10)}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
