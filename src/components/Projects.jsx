import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'AI-Based Smart Hostel Anomaly Detection System',
      date: 'Dec 2025 – Jan 2026',
      tags: ['Computer Vision', 'AI', 'Python'],
      desc: 'Real-time alert generation + automated evidence capture',
      github: 'https://github.com/YOGAAZHAKI/smart-hostel-anomaly-detection'
    },
    {
      title: 'Job Seeker Web Application',
      date: 'Jan 2026 – Feb 2026',
      tags: ['MERN', 'REST API', 'Full Stack'],
      desc: 'Auth + resume-based skill extraction + Jooble API integration',
      github: 'https://github.com/YOGAAZHAKI/jobSeeker.git'
    },
    {
      title: 'JobShield – AI-Based Fake Job Posting Detector',
      date: 'Mar 2026 – Apr 2026',
      tags: ['NLP', 'FastAPI', 'React', 'ML'],
      desc: 'AI-powered fake job detection system with 7-factor risk scoring and Chrome extension support',
      github: 'https://github.com/YOGAAZHAKI/Jobshield.git'
    },
    {
      title: 'Anemia Detection System',
      date: 'Mar 2025 – May 2025',
      tags: ['ML', 'Scikit-Learn', 'Classification'],
      desc: 'Naive Bayes, KNN, SVM models on CBC dataset',
      github: 'https://github.com/YOGAAZHAKI/ANEMIA-DETECTION.git'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">03. Selected Works</h2>

        <div className="projects-staggered">
          {projectList.map((project, idx) => (
            <div className={`project-card ${idx % 2 === 0 ? 'card-left' : 'card-right'}`} key={idx}>
              <div className="project-content">
                <span className="project-date">{project.date}</span>
                <h3 className="project-title">{project.title}</h3>

                <p className="project-desc">{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="project-tag">#{tag}</span>
                  ))}
                </div>
              </div>

              <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
