import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../styles/Article.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

export const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/article/getAll')
      .then(res => {
        setArticles(res.data); // Save articles to state
      })
      .catch(err => {
        console.error('Error fetching articles:', err);
      });
  }, []);

  return (
    <div className="container-fluid ">
      <div className="row">
        <h2 className='text-primary'>All Articles</h2>
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} className="card shadow-sm col-sm-12 col-md-4 col-lg-3 mb-4">
                  <div className='card-components '>
                    <img src={article.image} alt={article.title} className="card-img-top" />
                    <div className="card-body d-flex flex-column justify-content-center ">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text preview-multiline">{article.content}</p>
                      <Link to={`/article/${article._id}`} className="btn btn-success">Read More</Link>
                    </div>
                  </div>
              </div>
            ))
          )}

      </div>
        

        

    </div>
  )
}
