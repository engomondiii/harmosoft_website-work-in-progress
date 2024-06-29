// src/components/about/Careers.js
import React, { useState } from 'react';
import './Careers.css';

const jobOpenings = [
  {
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    description: 'We are looking for a skilled Software Engineer to join our team. The ideal candidate will have experience in developing scalable software solutions.'
  },
  {
    title: 'Project Manager',
    location: 'New York, NY',
    description: 'We are seeking an experienced Project Manager to oversee our projects. The candidate should have a proven track record of managing successful projects.'
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    description: 'We need a creative UI/UX Designer to help us create intuitive and engaging user interfaces. The ideal candidate will have a strong portfolio of design projects.'
  }
];

function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobOpenings);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
    jobTitle: ''
  });

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setFilteredJobs(jobOpenings.filter(job => 
      job.title.toLowerCase().includes(value.toLowerCase()) || 
      job.location.toLowerCase().includes(value.toLowerCase())
    ));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      resume: '',
      jobTitle: ''
    });
  };

  return (
    <section className="careers">
      <div className="container">
        <h2 className="careers-headline">Join Our Team</h2>
        <input 
          type="text" 
          placeholder="Search for job openings..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="search-input"
        />
        <div className="job-list">
          {filteredJobs.map((job, index) => (
            <div className="job-item" key={index}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <button 
                className="apply-button" 
                onClick={() => setFormData({ ...formData, jobTitle: job.title })}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
        {formData.jobTitle && (
          <div className="application-form">
            <h3 className="form-headline">Apply for {formData.jobTitle}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleFormChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleFormChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="resume">Resume</label>
                <input 
                  type="file" 
                  id="resume" 
                  name="resume" 
                  onChange={handleFormChange} 
                  required 
                />
              </div>
              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default Careers;
