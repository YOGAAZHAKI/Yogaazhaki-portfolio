import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const learningTopics = [
    'Generative AI',
    'Computer Vision',
    'NLP',
    'CrewAI'
  ];

  const [topicIndex, setTopicIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopicIndex((prev) => (prev + 1) % learningTopics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">01. About Me</h2>

        <div className="about-grid">
          <div className="about-content">
            <p className="about-bio">
              I am an AI & ML undergraduate at KPR Institute of Engineering
              and Technology with strong interests in Generative AI,
              Full Stack Development, NLP, and Computer Vision.
              I enjoy building intelligent software systems that combine
              scalable engineering with practical AI applications.
            </p>

            <p className="about-bio">
              My experience includes developing full-stack applications,
              machine learning systems, and AI-powered solutions using
              modern technologies such as React, FastAPI, Python, and LLM-based workflows.
              I recently completed a Software Development Internship at Payoda Technologies, working on backend APIs and agentic AI systems.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-label">Education</span>

                <span className="stat-value">
                  B.E. CSE (AI & ML)
                </span>

                <span className="stat-desc">
                  KPR Institute of Engineering and Technology
                </span>

                <span className="stat-desc">
                  2023 – 2027
                </span>
              </div>

              <div className="stat-card">
                <span className="stat-label">CGPA</span>

                <span className="stat-value highlight">
                  9.03
                </span>

                <span className="stat-desc">
                  Honors in Full Stack Development
                </span>

                <span className="stat-desc highlight">
                  Honors CGPA: 9.4
                </span>
              </div>
            </div>

            <div className="learning-tag">
              <span className="learning-label">
                Currently Exploring:
              </span>

              <span
                className="learning-topic animate-slide-up"
                key={topicIndex}
              >
                {learningTopics[topicIndex]}
              </span>
            </div>
          </div>

          <div className="about-visual">
            <div className="code-snippet-card">
              <div className="window-header">
                <span className="dot dot-r"></span>
                <span className="dot dot-y"></span>
                <span className="dot dot-g"></span>
              </div>

              <pre className="code-content">
                <code>
                  {`const developer = {
  name: "Yogaazhaki S",
  role: "AI/ML Developer",
  skills: [
    "Generative AI",
    "Full Stack",
    "NLP",
    "Computer Vision"
  ],
  internship: "Payoda Technologies"
};`}
                </code>
              </pre>
            </div>

            <div className="decorative-shape"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;