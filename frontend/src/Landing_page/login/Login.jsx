import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isLoggedIn");
    if (isAuthenticated === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/login", formData, {
        withCredentials: true
      });
      setMessage(res.data.message || "Login successful");
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        navigate("/"); // Redirect to home
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setMessage("Logged out successfully.");
  };

  // Determine message type for styling
  const getMessageClass = () => {
    if (message.includes("successful") || message.includes("Welcome")) {
      return "message success";
    }
    return "message error";
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {isLoggedIn ? (
          <div className="welcome-section">
            <h2 className="welcome-title">Welcome Back!</h2>
            <p className="welcome-message">
              You are successfully logged in. You can now access all features.
            </p>
            <button 
              className="logout-button" 
              onClick={handleLogout}
            >
              Logout
            </button>
            {message && <div className={getMessageClass()}>{message}</div>}
          </div>
        ) : (
          <>
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button 
                className="login-button" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
            {message && <div className={getMessageClass()}>{message}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Login;