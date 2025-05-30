import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Article.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

export const Article = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 articles

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/article/getAll`)
      .then(res => {
        console.log("Articles Response Data: ", res.data);
        setArticles(res.data);
      })
      .catch(err => {
        console.error('Error fetching articles:', err);
      });
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="container">
      <div className="row p-4">
        <h2 className='text-success text-center my-4'>Latest Articles</h2>

        <input
          type="text"
          placeholder="🔍 Search articles..."
          className="form-control mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredArticles.length === 0 ? (
          <p className='text-center text-success'>No articles found.</p>
        ) : (
          visibleArticles.map((article, index) => (
            <div key={index} className="shadow-sm col-12 col-md-4 col-lg-3 mb-4 p-2">
              <div className='card card-components'>
                <img src={article.image} alt={article.title} className="card-img-top" />
                <div className="card-body d-flex flex-column justify-content-center">
                  <h5 className="card-title">{article.title}</h5>
                  <small className="description">{article.description}</small>
                  <hr />
                  <p className='card-text content'>{article.content}</p>
                  <Link to={`/article/${article._id}`} className="btn btn-success">Read More</Link>
                  <hr />
                  <p className="card-text">
                    <small className="text-muted">Published on {new Date(article.createdAt).toLocaleDateString()}</small>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}

        {/* See More Button */}
        {visibleCount < filteredArticles.length && (
          <div className="text-center mt-3">
            <button
              className="btn btn-outline-success"
              onClick={() => setVisibleCount(visibleCount + 6)}
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
