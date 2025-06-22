import { useEffect, useState } from "react";
import API from "../api";
import VideoCard from "../components/VideoCard";

export default function FeedPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/videos").then((res) => {
      setVideos(res.data.data.videos || res.data.data);
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Public Feed</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
          marginTop: "1rem",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
