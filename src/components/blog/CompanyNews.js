// src/components/blog/CompanyNews.js
import React, { useState } from 'react';
import './CompanyNews.css';

const initialNews = [
  {
    title: 'Harmosoft Launches New Product',
    date: '2024-06-15',
    content: 'We are excited to announce the launch of our new product, which offers innovative features and unparalleled performance.',
  },
  {
    title: 'Harmosoft Expands to New Markets',
    date: '2024-06-10',
    content: 'We are pleased to share that Harmosoft is expanding its operations to new international markets, bringing our solutions to a wider audience.',
  },
];

function CompanyNews() {
  const [news, setNews] = useState(initialNews);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNews([...news, formData]);
    setFormData({
      title: '',
      date: '',
      content: '',
    });
  };

  return (
    <section className="company-news">
      <div className="container">
        <h2 className="news-headline">Company News</h2>
        <div className="news-list">
          {news.map((newsItem, index) => (
            <div className="news-item" key={index}>
              <h3 className="news-title">{newsItem.title}</h3>
              <p className="news-date">{newsItem.date}</p>
              <p className="news-content">{newsItem.content}</p>
            </div>
          ))}
        </div>
        <div className="news-form">
          <h3 className="form-headline">Post New Update</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Post News</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CompanyNews;
