import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    try {
      const res = await API.post("/users/signup", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Strmly</h1>
        <p style={styles.subtitle}>Login or Signup to continue</p>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          style={styles.input}
        />

        <div style={styles.btnGroup}>
          <button style={styles.btnGreen} onClick={handleSignup}>Sign Up</button>
          <button style={styles.btnBlue} onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

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
    padding: "4rem",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    width: "100%",
    maxWidth: "420px",
    color: "#e2e8f0",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#94a3b8",
  },
  input: {
    width: "100%",
    padding: "0.8rem 1rem",
    marginBottom: "1rem",
    borderRadius: "10px",
    border: "1px solid #334155",
    background: "#0f172a",
    color: "#e2e8f0",
    fontSize: "1rem",
    outline: "none",
    transition: "0.3s",
    boxShadow: "inset 0 0 4px rgba(255,255,255,0.03)",
  },
  btnGroup: {
    display: "flex",
    gap: "1rem",
  },
  btnGreen: {
    flex: 1,
    background: "#10b981",
    padding: "0.75rem",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
  btnBlue: {
    flex: 1,
    background: "#3b82f6",
    padding: "0.75rem",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
};
