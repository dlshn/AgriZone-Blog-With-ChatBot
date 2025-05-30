import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FullArticle.css";

export const FullArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/article/getById/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <div className="row">
        <button className="btn btn-outline-success my-3 " onClick={() => navigate('/Article')}>
              ← All Aricles
        </button>
        <div className="card col-md-8 offset-md-2">
          
          <img src={article.image} alt={article.title} className="card-img-top" />
          <div className="card-body">
            
            <h5 className="card-title">{article.title}</h5>
            <small className="text1">{article.description}</small>
            <hr />
            <p className='text2'>{article.content}</p>
            <p className="card-text">
              <small className="text-muted">
                Published on {new Date(article.createdAt).toLocaleDateString()}
              </small>
            </p>

            {/* ✅ Back to Home Button */}
            <button className="btn btn-success mt-3" onClick={() => navigate('/')}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
