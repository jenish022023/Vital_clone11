import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      Navigate('/home');
    } else {
      alert('Your credentials are wrong. Please try again.');
    }
  };

  return (
    <div className="LoginPage">
      <div className="auth-form-container">
        <h1>Sign in to the Vital Trends Portal</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button type="submit" >Log In</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
