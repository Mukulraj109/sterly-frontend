import React, { useState } from "react";
import "./VideoCard.css";

export default function VideoCard({ video }) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorThumbnail, setErrorThumbnail] = useState(false);

  const handleLoadedData = () => setIsLoading(false);
  const handleError = () => {
    setErrorThumbnail(true);
    setIsLoading(false);
  };

  return (
    <div className="video-card">
      <h3 className="video-title">{video.title}</h3>

      {isLoading && <p>Loading video...</p>}

      {!errorThumbnail ? (
        <video
          className="video-element"
          controls
          onLoadedData={handleLoadedData}
          onError={handleError}
          style={{ display: isLoading ? "none" : "block" }}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="video-thumbnail"
          src="https://via.placeholder.com/400x225?text=Video+Not+Available"
          alt="Video not available"
        />
      )}

      <p className="video-author">
        <strong>By:</strong> {video.uploadedBy?.name || "Unknown"}
      </p>
    </div>
  );
}
