import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome 🎬</h1>
        <p style={styles.subtext}>Choose an action to get started</p>

        <div style={styles.btnGroup}>
          <button style={styles.btnBlue} onClick={() => navigate("/upload")}>
            Upload Video
          </button>
          <button style={styles.btnGreen} onClick={() => navigate("/videos")}>
            View All Videos
          </button>
          <button style={styles.btnGray} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Inter', sans-serif",
    padding: "1rem",
  },
  container: {
    background: "#1e293b",
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    width: "100%",
    maxWidth: "420px",
    textAlign: "center",
    color: "#e2e8f0",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  subtext: {
    color: "#94a3b8",
    marginBottom: "2rem",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  btnBlue: {
    background: "#3b82f6",
    padding: "0.75rem",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
  },
  btnGreen: {
    background: "#10b981",
    padding: "0.75rem",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
  },
  btnGray: {
    background: "#64748b",
    padding: "0.75rem",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Dashboard;
