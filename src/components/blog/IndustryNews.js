// src/components/blog/IndustryNews.js
import React, { useState } from 'react';
import './IndustryNews.css';

const initialIndustryNews = [
  {
    title: 'Latest Tech Trends in 2024',
    date: '2024-06-14',
    content: 'Explore the latest trends in technology for 2024, including advancements in AI, blockchain, and IoT.',
  },
  {
    title: 'Impact of AI on Various Industries',
    date: '2024-06-10',
    content: 'AI is transforming industries across the board. Read about the significant impacts and future prospects of AI technology.',
  },
];

function IndustryNews() {
  const [industryNews, setIndustryNews] = useState(initialIndustryNews);
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
    setIndustryNews([...industryNews, formData]);
    setFormData({
      title: '',
      date: '',
      content: '',
    });
  };

  return (
    <section className="industry-news">
      <div className="container">
        <h2 className="news-headline">Industry News</h2>
        <div className="news-list">
          {industryNews.map((newsItem, index) => (
            <div className="news-item" key={index}>
              <h3 className="news-title">{newsItem.title}</h3>
              <p className="news-date">{newsItem.date}</p>
              <p className="news-content">{newsItem.content}</p>
            </div>
          ))}
        </div>
        <div className="news-form">
          <h3 className="form-headline">Post Industry News</h3>
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

export default IndustryNews;
