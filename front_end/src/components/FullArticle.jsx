import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/FullArticle.css";

export const FullArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;

    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/article/getById/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading Article...</div>
    </div>
  );

  return (
    <div className="article-page">
      <div className="article-container">
        <button 
          className="back-button" 
          onClick={() => navigate('/Article')}
          aria-label="Back to all articles"
        >
          ← All Articles
        </button>
        
        <div className="article-card">
          <img 
            src={article.image} 
            alt={article.title} 
            className="article-image"
            loading="lazy"
          />
          <div className="article-content">
            <h1 className="article-title">{article.title}</h1>
            <p className="article-description">{article.description}</p>
            <hr className="article-divider" />
            <div className="article-text">
              {article.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <div className="article-footer">
              <small className="publish-date">
                Published on {new Date(article.createdAt).toLocaleDateString()}
              </small>
              <button 
                className="home-button" 
                onClick={() => navigate('/')}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};