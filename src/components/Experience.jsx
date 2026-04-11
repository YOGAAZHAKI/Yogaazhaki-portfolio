import React from 'react';
import './Experience.css';

const Experience = () => {
  const items = [
    {
      type: 'Publication',
      title: '"Generative AI for Personalized Energy Consumption Behavior Analysis"',
      place: 'Book Chapter in IGI Global\'s "Enhancing Renewable Energy Systems with Generative AI"',
      date: 'Dec 2025',
      desc: 'Explored generative AI techniques applied to renewable energy forecasting and behavioral analysis.'
    },
    {
      type: 'Internship',
      title: 'Java Associate Intern',
      place: 'Silicon Software Services, Madurai',
      date: 'Dec 2024 – Jan 2025',
      desc: 'Worked with Spring Boot, API testing, and followed Agile workflow principles.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">04. Experience & Pubs</h2>
        
        <div className="timeline">
          {items.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="item-date">{item.date}</span>
                <span className="item-type">{item.type}</span>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-place">{item.place}</p>
                <p className="item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
