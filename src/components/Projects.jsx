import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'CodeMate – AI-Powered Codebase Onboarding Agent',
      date: 'Jun 2026 – Aug 2026',
      tags: ['Python', 'Gemini', 'RAG', 'ChromaDB'],
      desc: 'Built an AI codebase assistant using Python, Gemini, RAG, and ChromaDB for intelligent code search, semantic retrieval, and developer onboarding.',
      github: 'https://github.com/YOGAAZHAKI/CodeMate.git'
    },
    {
      title: 'HealthLens AI – AI-Powered Medical Report Intelligence Platform',
      date: 'May 2026 – Jul 2026',
      tags: ['Python', 'FastAPI', 'OCR', 'LLMs'],
      desc: 'Developed an AI medical report analysis platform using Python, FastAPI, OCR, and LLMs for report extraction, summaries, and health trend analysis.',
      github: 'https://github.com/Vikiviki006/Kartiline---HealthLens-AI.git'
    },
    {
      title: 'JobShield – AI-Based Fake Job Posting Detector',
      date: 'Mar 2026 – Apr 2026',
      tags: ['NLP', 'FastAPI', 'React', 'ML'],
      desc: 'Developed an NLP and Machine Learning system with FastAPI and Chrome Extension for real-time fraudulent job detection and risk analysis.',
      github: 'https://github.com/YOGAAZHAKI/Jobshield.git'
    },
    {
      title: 'Job Seeker Web Application',
      date: 'Jan 2026 – Feb 2026',
      tags: ['MERN', 'REST API', 'Full Stack'],
      desc: 'Built a MERN-based job portal with JWT authentication, resume-based NLP skill extraction, and Jooble API-driven recommendations.',
      github: 'https://github.com/YOGAAZHAKI/jobSeeker.git'
    },
    {
      title: 'AI-Based Smart Hostel Anomaly Detection System',
      date: 'Dec 2025 – Jan 2026',
      tags: ['Computer Vision', 'AI', 'Python'],
      desc: 'Built a computer vision anomaly detection system using Python and OpenCV with automated evidence capture and alert generation.',
      github: 'https://github.com/YOGAAZHAKI/smart-hostel-anomaly-detection'
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
