// src/components/about/Team.js
import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    bio: 'Alice is a visionary leader with over 20 years of experience in the tech industry. She founded Harmosoft with a mission to drive innovation and excellence.',
    photo: '/assets/images/alice-johnson.jpg'
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: 'Bob is a technology expert with a deep understanding of software development and cloud computing. He leads our technical team with a focus on innovation.',
    photo: '/assets/images/bob-smith.jpg'
  },
  {
    name: 'Charlie Brown',
    role: 'COO',
    bio: 'Charlie is an operational strategist with a keen eye for detail. He ensures that our operations run smoothly and efficiently.',
    photo: '/assets/images/charlie-brown.jpg'
  },
  {
    name: 'Charlie Brown',
    role: 'COO',
    bio: 'Charlie is an operational strategist with a keen eye for detail. He ensures that our operations run smoothly and efficiently.',
    photo: '/assets/images/charlie-brown.jpg'
  },
  {
    name: 'Charlie Brown',
    role: 'COO',
    bio: 'Charlie is an operational strategist with a keen eye for detail. He ensures that our operations run smoothly and efficiently.',
    photo: '/assets/images/charlie-brown.jpg'
  }
];

function Team() {
  return (
    <section className="team">
      <div className="container">
        <h2 className="team-headline">Our Team</h2>
        <div className="team-list-wrapper">
          <div className="team-list">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.photo} alt={member.name} className="team-photo" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
