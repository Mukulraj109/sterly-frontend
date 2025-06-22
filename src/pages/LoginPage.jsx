
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
    <div>
      <h2>Login / Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br/>
      <input name="email" placeholder="Email" onChange={handleChange} /><br/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
