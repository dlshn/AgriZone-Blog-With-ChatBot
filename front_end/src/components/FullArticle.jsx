import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const FullArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/article/getById/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{article.title}</h2>
      <img src={article.image} alt={article.title} className="img-fluid mb-3" />
      <p>{article.content}</p>
    </div>
  );
};


