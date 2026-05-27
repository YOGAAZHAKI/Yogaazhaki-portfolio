import React from 'react';
import './Experience.css';

const Experience = () => {
  const items = [
    {
      type: 'Internship',
      title: 'Software Development Intern',
      place: 'Payoda Technologies',
      date: 'Feb 2026 – Present',
      desc: 'Contributing to Generative AI-based applications involving LLM workflows, CrewAI, and agentic AI concepts.'
    },
    {
      type: 'Internship',
      title: 'Java Associate Intern',
      place: 'Silicon Software Services, Madurai',
      date: 'Dec 2024 – Jan 2025',
      desc: 'Worked with Spring Boot, REST APIs, Postman, MySQL, and Agile development workflows.'
    },
    {
      type: 'Publication',
      title: 'Generative AI for Personalized Energy Consumption Behavior Analysis',
      place: 'IGI Global – Enhancing Renewable Energy Systems with Generative AI',
      date: 'Dec 2025',
      desc: 'Applied generative AI techniques to model personalized energy consumption patterns for renewable energy optimization.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">04. Experience & Publications</h2>

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