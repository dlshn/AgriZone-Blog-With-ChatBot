// src/pages/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Login.css"; // ✅ Reuse same CSS file





const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/admin/login`, {
        email,
        password,
      });
      localStorage.setItem("adminToken", res.data.token);
      alert(res.data.message);
      navigate("/CreateArticle");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
  <div className="login-wrapper vh-100 ">
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
      <p className="text-center text-muted mb-4">
        <strong>Admins Only:</strong> Please enter your credentials to access the article management system.
      </p>
      <div className="login-box p-4 shadow-sm rounded-4">
        <h2 className='text-success text-center mb-4'>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fs-5">Email</label>
            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label fs-5">Password</label>
            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
);

};

export default Login;
