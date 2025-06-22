import React, { useState } from "react";
import "./style/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '') {
      alert("Please enter your name or email.");
      return;
    }
    onLogin(username); // Pass to App.jsx
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          className="image"
          src="https://t3.ftcdn.net/jpg/02/14/29/22/360_F_214292295_dsMiBAa83bToIrvyKXeXDJyZtaK0S2bv.jpg"
          alt="Login"
        />
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username or Email"
          className="first-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;