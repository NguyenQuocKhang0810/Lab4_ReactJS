import React, { useState } from "react";
import { useUserContext } from "./UserContext";

import "../css/login_popup.css";

const LoginPopup = ({ onClose }) => {
  const { setUser } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  console.log(setUser);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api-demo-4gqb.onrender.com/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      const data = await response.json();
      setUser(data); // Store user data in context
      onClose(); // Close the popup
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="login-popup">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p>{error}</p>}
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
      <div onClick={onClose} className="popup-overlay"></div>
    </div>
  );
};

export default LoginPopup;
