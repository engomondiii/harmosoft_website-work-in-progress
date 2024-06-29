// src/components/faq/FAQ.js
import React, { useState, useEffect } from 'react';
import './FAQ.css';

const initialFAQs = [
  {
    id: 1,
    question: 'What services does Harmosoft offer?',
    answer: 'Harmosoft offers a wide range of services including software development, cloud solutions, AI implementation, and more.',
  },
  {
    id: 2,
    question: 'How does Harmosoft determine pricing?',
    answer: 'Our pricing is determined based on the scope and complexity of the project. We provide customized quotes after understanding your specific needs.',
  },
  {
    id: 3,
    question: 'What is the typical process for starting a project with Harmosoft?',
    answer: 'The process typically starts with an initial consultation to understand your requirements, followed by a proposal, agreement, and project kickoff.',
  },
];

function FAQ() {
  const [faqs, setFaqs] = useState(initialFAQs);
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
  });
  const [editingFAQ, setEditingFAQ] = useState(null);

  useEffect(() => {
    // Fetch FAQs from the backend if needed
    // fetch('/api/faqs')
    //   .then(response => response.json())
    //   .then(data => setFaqs(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFAQ) {
      setFaqs(
        faqs.map((faq) =>
          faq.id === editingFAQ.id ? { ...editingFAQ, ...formData } : faq
        )
      );
      setEditingFAQ(null);
    } else {
      setFaqs([...faqs, { ...formData, id: Date.now() }]);
    }
    setFormData({
      question: '',
      answer: '',
    });
  };

  const handleEdit = (faq) => {
    setEditingFAQ(faq);
    setFormData(faq);
  };

  const handleDelete = (id) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };

  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq-headline">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.id}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
              <div className="faq-actions">
                <button onClick={() => handleEdit(faq)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(faq.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-form">
          <h3 className="form-headline">{editingFAQ ? 'Edit FAQ' : 'New FAQ'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="question">Question</label>
              <input
                type="text"
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="answer">Answer</label>
              <textarea
                id="answer"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">{editingFAQ ? 'Update FAQ' : 'Post FAQ'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
