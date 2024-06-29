// src/components/clientPortal/Dashboard.js
import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch user data from backend
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));

    // Fetch projects data from backend
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));

    // Fetch recent activities from backend
    fetch('/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));

    // Fetch notifications from backend
    fetch('/api/notifications')
      .then(response => response.json())
      .then(data => setNotifications(data));

    // Fetch support tickets from backend
    fetch('/api/tickets')
      .then(response => response.json())
      .then(data => setTickets(data));

    // Fetch invoices from backend
    fetch('/api/invoices')
      .then(response => response.json())
      .then(data => setInvoices(data));
  }, []);

  return (
    <section className="dashboard">
      <div className="container">
        <div className="welcome-message">
          <h2>Welcome, {user.name}</h2>
        </div>
        <div className="dashboard-sections">
          <div className="profile-section">
            <h3>User Profile</h3>
            <p>Email: {user.email}</p>
            <p>Account Created: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="projects-section">
            <h3>Project Overview</h3>
            <ul>
              {projects.map(project => (
                <li key={project.id}>
                  {project.name} - {project.status}
                </li>
              ))}
            </ul>
          </div>
          <div className="activities-section">
            <h3>Recent Activities</h3>
            <ul>
              {activities.map(activity => (
                <li key={activity.id}>{activity.description}</li>
              ))}
            </ul>
          </div>
          <div className="notifications-section">
            <h3>Notifications</h3>
            <ul>
              {notifications.map(notification => (
                <li key={notification.id}>{notification.message}</li>
              ))}
            </ul>
          </div>
          <div className="tickets-section">
            <h3>Support Tickets</h3>
            <ul>
              {tickets.map(ticket => (
                <li key={ticket.id}>
                  {ticket.subject} - {ticket.status}
                </li>
              ))}
            </ul>
          </div>
          <div className="invoices-section">
            <h3>Invoices and Payments</h3>
            <ul>
              {invoices.map(invoice => (
                <li key={invoice.id}>
                  Invoice #{invoice.number} - ${invoice.amount} - {invoice.status}
                </li>
              ))}
            </ul>
          </div>
          <div className="settings-section">
            <h3>Settings</h3>
            <button className="settings-button">Edit Profile</button>
            <button className="settings-button">Change Password</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
