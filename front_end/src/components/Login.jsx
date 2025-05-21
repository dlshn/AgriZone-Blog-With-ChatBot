// src/pages/Login.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CreateArticle.css"; // ✅ Reuse same CSS file
import dotenv from 'dotenv';
dotenv.config();


// Then use login(data) after successful login 


const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
        email,
        password,
      });
      login(res.data);
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className='container'>
      <div className="row d-flex align-items-center flex-column">
        <div className='col-12 col-sm-6 col-md-8 col-lg-8 p-5 create-article'>
          <h2 className='text-success text-center'>Login</h2>
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
