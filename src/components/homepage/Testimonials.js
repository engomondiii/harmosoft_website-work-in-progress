// src/components/homepage/Testimonials.js
import React, { useState } from 'react';
import './Testimonials.css';

const initialTestimonials = [
  {
    name: 'John Doe',
    company: 'ABC Corp',
    message: 'Harmosoft transformed our business with their innovative solutions. Their team is highly skilled and professional.',
  },
  {
    name: 'Jane Smith',
    company: 'XYZ Ltd',
    message: 'The custom software development services provided by Harmosoft were top-notch. We are very satisfied with the results.',
  },
];

function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formData]);
    setFormData({
      name: '',
      company: '',
      message: ''
    });
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-headline">What Our Clients Say</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p className="testimonial-message">"{testimonial.message}"</p>
              <p className="testimonial-author">- {testimonial.name}, {testimonial.company}</p>
            </div>
          ))}
        </div>
        <div className="testimonial-form">
          <h3 className="form-headline">Submit Your Testimonial</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
