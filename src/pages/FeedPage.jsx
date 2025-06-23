import { useEffect, useState } from "react";
import API from "../api";
import VideoCard from "../components/VideoCard";
import "./FeedPage.css"; 

export default function FeedPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/videos").then((res) => {
      setVideos(res.data.data.videos || res.data.data);
    });
  }, []);

  return (
    <div className="feed-container">
      <h2 className="feed-title">🎥 Public Video Feed</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
