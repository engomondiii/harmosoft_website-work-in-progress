// src/components/resources/CaseStudies.js
import React, { useState } from 'react';
import './CaseStudies.css';

const initialCaseStudies = [
  {
    id: 1,
    title: 'Revamping E-commerce Platform for ABC Corp',
    date: '2024-04-10',
    description: 'We transformed ABC Corp’s e-commerce platform, enhancing user experience and boosting sales by 30%.',
    details: `ABC Corp approached us with the challenge of revamping their outdated e-commerce platform. Our team conducted a thorough analysis of their requirements and proposed a modern, user-friendly design. The project involved:
    - Implementing a responsive design
    - Integrating advanced search functionality
    - Optimizing the checkout process
    - Enhancing security features

    The results were outstanding, with a 30% increase in sales and a significant improvement in customer satisfaction.`,
  },
  {
    id: 2,
    title: 'Implementing AI Solutions for XYZ Ltd',
    date: '2024-02-20',
    description: 'We implemented AI-driven solutions for XYZ Ltd, leading to a 40% improvement in operational efficiency.',
    details: `XYZ Ltd wanted to leverage AI to improve their operational efficiency. We developed and integrated AI solutions tailored to their needs. The project included:
    - Developing predictive maintenance algorithms
    - Implementing AI-powered data analytics
    - Automating routine tasks

    These solutions resulted in a 40% improvement in operational efficiency, reduced downtime, and significant cost savings for XYZ Ltd.`,
  },
];

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState(initialCaseStudies);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    details: '',
  });
  const [editingCaseStudy, setEditingCaseStudy] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCaseStudy) {
      setCaseStudies(
        caseStudies.map((caseStudy) =>
          caseStudy.id === editingCaseStudy.id ? { ...editingCaseStudy, ...formData } : caseStudy
        )
      );
      setEditingCaseStudy(null);
    } else {
      setCaseStudies([...caseStudies, { ...formData, id: Date.now() }]);
    }
    setFormData({
      title: '',
      date: '',
      description: '',
      details: '',
    });
  };

  const handleEdit = (caseStudy) => {
    setEditingCaseStudy(caseStudy);
    setFormData(caseStudy);
  };

  const handleDelete = (id) => {
    setCaseStudies(caseStudies.filter((caseStudy) => caseStudy.id !== id));
  };

  return (
    <section className="case-studies">
      <div className="container">
        <h2 className="case-studies-headline">Case Studies</h2>
        <div className="case-studies-list">
          {caseStudies.map((caseStudy) => (
            <div className="case-study-item" key={caseStudy.id}>
              <h3 className="case-study-title">{caseStudy.title}</h3>
              <p className="case-study-date">{caseStudy.date}</p>
              <p className="case-study-description">{caseStudy.description}</p>
              <details className="case-study-details">
                <summary>Read More</summary>
                <p>{caseStudy.details}</p>
              </details>
              <div className="case-study-actions">
                <button onClick={() => handleEdit(caseStudy)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(caseStudy.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="case-study-form">
          <h3 className="form-headline">{editingCaseStudy ? 'Edit Case Study' : 'New Case Study'}</h3>
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
              <label htmlFor="details">Details</label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">{editingCaseStudy ? 'Update Case Study' : 'Post Case Study'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
