import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import fetchVideos from "../data/fetchData";
import "./../css/video_details.css";
import { BsCheckCircleFill } from "react-icons/bs";
import VideoCard from "./VideoCard";

function VideoDetails() {
  const { video_Id } = useParams();
  const [video, setVideo] = useState(null);
  const [videosSuggested, setVideosSuggested] = useState([]);

  const url = `videos?part=snippet,statistics&id=${video_Id}`;
  const url_2 = `search?part=snippet&type=video&relatedToVideoId=${video_Id}`;

  useEffect(() => {
    fetchVideos(url).then((res) => {
      setVideo(res[0]);
    });
    fetchVideos(url_2).then((res) => {
      setVideosSuggested(res);
    });
  }, [video_Id]);
  const views = parseInt(video?.statistics?.viewCount).toLocaleString();
  const likes = parseInt(video?.statistics?.likeCount).toLocaleString();
  return (
    <div className="container">
      <div className="video_details">
        <div className="video_box">
          <ReactPlayer
            className="react_player"
            url={`https://www.youtube.com/watch?v=${video_Id}`}
            controls
            width={"100%"}
            height={"100%"}
          />
          <div className="details">
            <div className="text">
              <h3>{video?.snippet?.title}</h3>
              <div className="channel_title">
                <Link
                  to={`/channel/${video?.snippet?.channelId}`}
                  className="channel_link"
                >
                  {video?.snippet?.channelTitle}
                </Link>
                <BsCheckCircleFill />
              </div>
            </div>
            <div className="stats">
              <p>{views} views</p>
              <p>{likes} likes</p>
            </div>
          </div>
        </div>
        <div className="sugg_videos">
          {videosSuggested &&
            videosSuggested.length > 0 &&
            videosSuggested.map((vid) => {
              return <VideoCard key={vid.id.videoId} video={vid} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
