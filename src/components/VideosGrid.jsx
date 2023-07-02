import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function VideosGrid({ videos }) {
  return (
    <div className="videos-grid">
      {videos &&
        videos.length > 0 &&
        videos.map((item, id) => {
          {
            return item.id.videoId ? (
              <VideoCard video={item} key={id} />
            ) : (
              item.id.channelId && <ChannelCard channel={item} key={id} />
            );
          }
        })}
    </div>
  );
}

export default VideosGrid;
