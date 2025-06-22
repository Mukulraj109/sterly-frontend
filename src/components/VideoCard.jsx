
import React, { useState } from "react";

export default function VideoCard({ video }) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorThumbnail, setErrorThumbnail] = useState(false);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setErrorThumbnail(true);
    setIsLoading(false);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "10px",
        backgroundColor: "#fafafa",
        boxShadow: "0 0 8px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>{video.title}</h3>

      {isLoading && <p>Loading video...</p>}

      {!errorThumbnail ? (
        <video
          width="100%"
          controls
          onLoadedData={handleLoadedData}
          onError={handleError}
          style={{ borderRadius: "8px", display: isLoading ? "none" : "block" }}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="https://via.placeholder.com/400x225?text=Video+Not+Available"
          alt="Video not available"
          width="100%"
          style={{ borderRadius: "8px" }}
        />
      )}

      <p style={{ marginTop: "0.5rem", color: "#555" }}>
        <strong>By:</strong> {video.uploadedBy?.name || "Unknown"}
      </p>
    </div>
  );
}
