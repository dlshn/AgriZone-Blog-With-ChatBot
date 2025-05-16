import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../styles/Article.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container">
      <div className="row">
        <h2 className='text-primary'>All Articles</h2>
          {articles.length === 0 ? (
            <p>No articles found.</p>
          ) : (
            articles.map((article, index) => (
              <div key={index} className="article-box col-sm-12 col-md-4 col-lg-3 mb-4">
                <img src={article.image} alt="Article" className="" />
                <div className="">
                  <h5 className="">{article.title}</h5>
                  <p className="">{article.content}</p>
                </div>
              </div>
            ))
          )}

      </div>
        

        

    </div>
  )
}
