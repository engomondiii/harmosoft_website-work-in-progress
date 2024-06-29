// src/components/blog/EducationalContent.js
import React, { useState } from 'react';
import './EducationalContent.css';

const initialContent = [
  {
    title: 'Introduction to React',
    date: '2024-06-12',
    content: 'This tutorial covers the basics of React, a popular JavaScript library for building user interfaces.',
  },
  {
    title: 'Getting Started with Node.js',
    date: '2024-06-05',
    content: 'Learn how to set up a Node.js development environment and create your first application.',
  },
];

function EducationalContent() {
  const [contentList, setContentList] = useState(initialContent);
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
    setContentList([...contentList, formData]);
    setFormData({
      title: '',
      date: '',
      content: '',
    });
  };

  return (
    <section className="educational-content">
      <div className="container">
        <h2 className="content-headline">Educational Content</h2>
        <div className="content-list">
          {contentList.map((item, index) => (
            <div className="content-item" key={index}>
              <h3 className="content-title">{item.title}</h3>
              <p className="content-date">{item.date}</p>
              <p className="content-text">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="content-form">
          <h3 className="form-headline">Publish New Content</h3>
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
            <button type="submit" className="submit-button">Publish</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EducationalContent;
