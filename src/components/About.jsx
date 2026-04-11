import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const learningTopics = ['Cloud Native', 'LLM Fine-tuning', 'System Design', 'Three.js'];
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
              Hey, I'm Yoga — a Computer Science student specializing in AI & ML at KPRIET. I love building things that sit at the intersection of intelligence and usability. From training ML models to shipping full-stack apps, I enjoy the entire process of turning an idea into something real. When I'm not coding, I'm probably reading about the latest in generative AI or solving problems on LeetCode.
            </p>
            
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-label">Education</span>
                <span className="stat-value">B.E. AI & ML</span>
                <span className="stat-desc">KPR Institute of Engineering and Technology</span>
                <span className="stat-desc">2023–2027</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">CGPA</span>
                <span className="stat-value highlight">9.2</span>
                <span className="stat-desc">Honors CGPA: <span className="highlight">9.4</span> (Full Stack)</span>
              </div>
            </div>

            <div className="learning-tag">
              <span className="learning-label">Currently learning:</span>
              <span className="learning-topic animate-slide-up" key={topicIndex}>
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
{`class Yogaazhaki {
  constructor() {
    this.name = 'Yogaazhaki S';
    this.major = 'AI & ML';
    this.passion = ['AI', 'Web'];
  }
  
  solveProblem() {
    return this.passion.map(
      field => \`Applying \${field}\`
    );
  }
}`}
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
