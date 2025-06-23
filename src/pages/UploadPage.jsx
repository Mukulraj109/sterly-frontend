import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import "./UploadPage.css";

export default function UploadPage() {
  const [data, setData] = useState({ title: "", description: "", video: null });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "video") {
      setData({ ...data, video: e.target.files[0] });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleUpload = async () => {
    if (!data.title || !data.description || !data.video) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("video", data.video);

    try {
      setLoading(true);
      await API.post("/videos/upload", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("Video uploaded!");
      navigate("/videos");
    } catch (err) {
      alert("Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <h2>Upload Video</h2>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="upload-input"
        />
        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="upload-input"
        />
        <label  htmlFor="file-upload" className="file-label">
          {data.video ? data.video.name : "Choose File"}
        </label>
        <input
          id="file-upload"
          type="file"
          name="video"
          onChange={handleChange}
        />

        {loading ? (
          <p>Uploading... Please wait ⏳</p>
        ) : (
          <button onClick={handleUpload}>Upload</button>
        )}
      </div>
    </div>
  );
}
