// src/components/resources/WebinarsEvents.js
import React, { useState } from 'react';
import './WebinarsEvents.css';

const initialEvents = [
  {
    id: 1,
    title: 'Future of AI Webinar',
    date: '2024-07-15',
    description: 'Join us for a webinar on the future of AI in business and technology. Learn about the latest trends and advancements.',
    type: 'upcoming',
  },
  {
    id: 2,
    title: 'Blockchain Technology Conference',
    date: '2024-06-10',
    description: 'Attend our conference to explore the latest developments in blockchain technology and its applications in various industries.',
    type: 'upcoming',
  },
  {
    id: 3,
    title: 'Past Event: Cloud Computing Workshop',
    date: '2024-05-20',
    description: 'Our cloud computing workshop covered essential cloud concepts, tools, and best practices. Watch the recorded sessions online.',
    type: 'past',
  },
];

function WebinarsEvents() {
  const [events, setEvents] = useState(initialEvents);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    type: 'upcoming',
  });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      setEvents(
        events.map((event) =>
          event.id === editingEvent.id ? { ...editingEvent, ...formData } : event
        )
      );
      setEditingEvent(null);
    } else {
      setEvents([...events, { ...formData, id: Date.now() }]);
    }
    setFormData({
      title: '',
      date: '',
      description: '',
      type: 'upcoming',
    });
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setFormData(event);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const upcomingEvents = events.filter((event) => event.type === 'upcoming');
  const pastEvents = events.filter((event) => event.type === 'past');

  return (
    <section className="webinars-events">
      <div className="container">
        <h2 className="events-headline">Webinars & Events</h2>
        <h3 className="sub-headline">Upcoming Events</h3>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <div className="event-item" key={event.id}>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <div className="event-actions">
                <button onClick={() => handleEdit(event)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(event.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <h3 className="sub-headline">Past Events</h3>
        <div className="events-list">
          {pastEvents.map((event) => (
            <div className="event-item" key={event.id}>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <div className="event-actions">
                <button onClick={() => handleEdit(event)} className="edit-button">Edit</button>
                <button onClick={() => handleDelete(event.id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className="event-form">
          <h3 className="form-headline">{editingEvent ? 'Edit Event' : 'New Event'}</h3>
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
              <label htmlFor="type">Type</label>
              <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>
            </div>
            <button type="submit" className="submit-button">{editingEvent ? 'Update Event' : 'Post Event'}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default WebinarsEvents;
