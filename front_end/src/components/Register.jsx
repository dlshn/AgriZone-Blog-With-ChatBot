// src/pages/Register.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CreateArticle.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      alert("Failed to register");
    }
  };

  return (
    <div className='container'>
      <div className="row d-flex align-items-center flex-column">
        <div className='col-12 col-sm-6 col-md-8 col-lg-8 p-5 create-article'>
          <h2 className='text-success text-center'>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label fs-5">Username</label>
              <input type="text" className="form-control" onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label fs-5">Email</label>
              <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label className="form-label fs-5">Password</label>
              <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
