// src/components/resources/Whitepapers.js
import React, { useState } from 'react';
import './Whitepapers.css';

const initialWhitepapers = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    date: '2024-06-01',
    link: '/docs/future-of-ai.pdf',
  },
  {
    id: 2,
    title: 'Blockchain Technology Explained',
    date: '2024-06-10',
    link: '/docs/blockchain-explained.pdf',
  },
];

function Whitepapers() {
  const [whitepapers, setWhitepapers] = useState(initialWhitepapers);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    link: '',
  });
  const [editingPaper, setEditingPaper] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPaper) {
      setWhitepapers(
        whitepapers.map((paper) =>
          paper.id === editingPaper.id ? { ...editingPaper, ...formData } : paper
        )
      );
      setEditingPaper(null);
    } else {
      setWhitepapers([...whitepapers, { ...formData, id: Date.now() }]);
    }
    setFormData({
      title: '',
      date: '',
      link: '',
    });
  };

  const handleEdit = (paper) => {
    setEditingPaper(paper);
    setFormData(paper);
  };

  const handleDelete = (id) => {
    setWhitepapers(whitepapers.filter((paper) => paper.id !== id));
  };

  return (
    <section className="whitepapers">
      <div className="container">
        <h2 className="whitepapers-headline">Whitepapers</h2>
        <div className="whitepapers-list">
          {whitepapers.map((paper) => (
            <div className="whitepaper-item" key={paper.id}>
              <h3 className="whitepaper-title">{paper.title}</h3>
              <p className="whitepaper-date">{paper.date}</p>
              <a href={paper.link} className="whitepaper-link" target="_blank" rel="noopener noreferrer">
                Download
              </a>
              <div className="whitepaper-actions">
                <button onClick={() => handleEdit(paper)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(paper.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="whitepaper-form">
          <h3 className="form-headline">{editingPaper ? 'Edit Whitepaper' : 'New Whitepaper'}</h3>
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
              <label htmlFor="link">Link</label>
              <input
                type="text"
                id="link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">{editingPaper ? 'Update Whitepaper' : 'Post Whitepaper'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Whitepapers;
