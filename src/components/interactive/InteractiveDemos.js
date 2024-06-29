// src/components/interactive/InteractiveDemos.js
import React, { useState } from 'react';
import './InteractiveDemos.css';

const demoVideos = [
  {
    id: 1,
    title: 'Product A Demo',
    description: 'See how Product A can help you streamline your workflow.',
    videoUrl: 'https://www.youtube.com/embed/sampleVideoId1',
  },
  {
    id: 2,
    title: 'Product B Demo',
    description: 'Discover the features and benefits of Product B.',
    videoUrl: 'https://www.youtube.com/embed/sampleVideoId2',
  },
  {
    id: 3,
    title: 'Product C Demo',
    description: 'Learn how Product C can enhance your business operations.',
    videoUrl: 'https://www.youtube.com/embed/sampleVideoId3',
  },
];

function InteractiveDemos() {
  const [selectedDemo, setSelectedDemo] = useState(demoVideos[0]);

  return (
    <section className="interactive-demos">
      <div className="container">
        <h2 className="demos-headline">Interactive Demos</h2>
        <div className="demos-content">
          <div className="demos-list">
            {demoVideos.map((demo) => (
              <div
                key={demo.id}
                className={`demo-item ${selectedDemo.id === demo.id ? 'active' : ''}`}
                onClick={() => setSelectedDemo(demo)}
              >
                <h3 className="demo-title">{demo.title}</h3>
                <p className="demo-description">{demo.description}</p>
              </div>
            ))}
          </div>
          <div className="demo-video">
            <iframe
              width="100%"
              height="400"
              src={selectedDemo.videoUrl}
              title={selectedDemo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveDemos;
