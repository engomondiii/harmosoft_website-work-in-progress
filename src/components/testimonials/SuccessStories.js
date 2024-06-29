// src/components/testimonials/SuccessStories.js
import React, { useState } from 'react';
import './SuccessStories.css';

const initialStories = [
  {
    id: 1,
    title: 'Increased Sales by 40%',
    client: 'ABC Corp',
    date: '2024-05-10',
    description: 'By revamping ABC Corp\'s e-commerce platform, we increased their sales by 40% within the first quarter.',
    outcomes: [
      'Sales increased by 40%',
      'User engagement improved by 30%',
      'Customer satisfaction rate reached 95%',
    ],
  },
  {
    id: 2,
    title: 'Reduced Operational Costs by 25%',
    client: 'XYZ Ltd',
    date: '2024-03-20',
    description: 'Implementing AI solutions for XYZ Ltd reduced their operational costs by 25% and improved efficiency.',
    outcomes: [
      'Operational costs reduced by 25%',
      'Efficiency improved by 20%',
      'Employee productivity increased by 15%',
    ],
  },
];

function SuccessStories() {
  const [stories, setStories] = useState(initialStories);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    date: '',
    description: '',
    outcomes: '',
  });
  const [editingStory, setEditingStory] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const outcomesArray = formData.outcomes.split(';').map((outcome) => outcome.trim());
    if (editingStory) {
      setStories(
        stories.map((story) =>
          story.id === editingStory.id ? { ...editingStory, ...formData, outcomes: outcomesArray } : story
        )
      );
      setEditingStory(null);
    } else {
      setStories([...stories, { ...formData, id: Date.now(), outcomes: outcomesArray }]);
    }
    setFormData({
      title: '',
      client: '',
      date: '',
      description: '',
      outcomes: '',
    });
  };

  const handleEdit = (story) => {
    setEditingStory(story);
    setFormData({ ...story, outcomes: story.outcomes.join('; ') });
  };

  const handleDelete = (id) => {
    setStories(stories.filter((story) => story.id !== id));
  };

  return (
    <section className="success-stories">
      <div className="container">
        <h2 className="stories-headline">Success Stories</h2>
        <div className="stories-list">
          {stories.map((story) => (
            <div className="story-item" key={story.id}>
              <h3 className="story-title">{story.title}</h3>
              <p className="story-client">Client: {story.client}</p>
              <p className="story-date">{story.date}</p>
              <p className="story-description">{story.description}</p>
              <ul className="story-outcomes">
                {story.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
              <div className="story-actions">
                <button onClick={() => handleEdit(story)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(story.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="story-form">
          <h3 className="form-headline">{editingStory ? 'Edit Success Story' : 'New Success Story'}</h3>
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
              <label htmlFor="client">Client</label>
              <input
                type="text"
                id="client"
                name="client"
                value={formData.client}
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
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="outcomes">Outcomes (separate with semicolons)</label>
              <textarea
                id="outcomes"
                name="outcomes"
                value={formData.outcomes}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">{editingStory ? 'Update Story' : 'Post Story'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
