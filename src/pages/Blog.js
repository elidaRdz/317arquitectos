import React from 'react';
import './Blog.css';

const Article = ({ title, date, content }) => {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p><em>{date}</em></p>
      <p>{content}</p>
    </div>
  );
};

const Blog = () => {
  const articles = [
    {
      title: 'Artículo 1',
      date: 'Fecha 1',
      content: 'Contenido del artículo 1...'
    },
    {
      title: 'Artículo 2',
      date: 'Fecha 2',
      content: 'Contenido del artículo 2...'
    },
    {
      title: 'Artículo 3',
      date: 'Fecha 3',
      content: 'Contenido del artículo 3...'
    },
    {
      title: 'Artículo 4',
      date: 'Fecha 4',
      content: 'Contenido del artículo 4...'
    },
    {
      title: 'Artículo 5',
      date: 'Fecha 5',
      content: 'Contenido del artículo 5...'
    }
  ];

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      {Array.isArray(articles) ? (
        articles.map((article, index) => (
          <Article 
            key={index}
            title={article.title}
            date={article.date}
            content={article.content}
          />
        ))
      ) : (
        <p>No hay artículos disponibles.</p>
      )}
    </div>
  );
};

export default Blog;