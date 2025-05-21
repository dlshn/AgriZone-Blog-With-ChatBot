import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export const FullArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  

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
        <div className="card col-md-8 offset-md-2">
          <img src={article.image} alt={article.title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title text-center">{article.title}</h5>
            <p className="card-text">{article.content}</p>
            <p className="card-text"><small className="text-muted">Published on {new Date(article.createdAt).toLocaleDateString()}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};


