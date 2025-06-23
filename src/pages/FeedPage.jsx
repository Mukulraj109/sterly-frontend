import { useEffect, useState } from "react";
import API from "../api";
import VideoCard from "../components/VideoCard";
import "./FeedPage.css";

export default function FeedPage() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6; 

  const fetchVideos = async (pageNum) => {
    try {
      const res = await API.get(`/videos?page=${pageNum}&limit=${limit}`);
      setVideos(res.data.data.videos);
      setTotalPages(res.data.data.totalPages);
      setPage(res.data.data.page);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  useEffect(() => {
    fetchVideos(page);
  }, []);

  const handlePrev = () => {
    if (page > 1) {
      fetchVideos(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      fetchVideos(page + 1);
    }
  };

  return (
    <div className="feed-container">
      <h2 className="feed-title">🎥 Public Video Feed</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={page <= 1}>
          ⬅ Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={page >= totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
}
