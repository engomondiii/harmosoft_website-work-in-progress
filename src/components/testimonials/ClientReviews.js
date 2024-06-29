// src/components/testimonials/ClientReviews.js
import React, { useState } from 'react';
import './ClientReviews.css';

const initialReviews = [
  {
    id: 1,
    name: 'John Doe',
    date: '2024-06-15',
    review: 'Harmosoft provided exceptional service and delivered a top-notch product. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    date: '2024-05-20',
    review: 'The team at Harmosoft was professional and efficient. Our project was completed on time and exceeded our expectations.',
  },
];

function ClientReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    review: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...formData, id: Date.now() }]);
    setFormData({
      name: '',
      date: '',
      review: '',
    });
    setSubmitted(true);
  };

  return (
    <section className="client-reviews">
      <div className="container">
        <h2 className="reviews-headline">Client Reviews</h2>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div className="review-item" key={review.id}>
              <h3 className="review-name">{review.name}</h3>
              <p className="review-date">{review.date}</p>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>
        <div className="review-form">
          <h3 className="form-headline">Post a Review</h3>
          {submitted ? (
            <p className="thank-you-message">Thank you for your review!</p>
          ) : (
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
                <label htmlFor="review">Review</label>
                <textarea
                  id="review"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit Review</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ClientReviews;
