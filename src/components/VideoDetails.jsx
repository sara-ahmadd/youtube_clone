import React from "react";
import { useParams } from "react-router-dom";

function VideoDetails() {
  const { video_Id } = useParams();
  return (
    <div className="container">
      <h1>VideoDetails id = {video_Id}</h1>
    </div>
  );
}

export default VideoDetails;
