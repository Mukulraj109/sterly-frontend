// src/App.jsx
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UploadPage from "./pages/UploadPage";
import FeedPage from "./pages/FeedPage";
import Dashboard from "./pages/Dashboard";

export default function App() {

  const isAuthenticated = localStorage.getItem("token") !== null;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/upload" element={isAuthenticated ? <UploadPage /> : <Navigate to="/login" />} />
        <Route path="/videos" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}
