import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import './Hero.css';

const Hero = () => {
  const words = [
    'AI Developer',
    'Full Stack Builder',
    'ML Enthusiast',
    'Problem Solver'
  ];

  const typewriterText = useTypewriter(words, 100, 50, 2000);

  return (
    <section id="hero" className="hero-section">
      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container hero-container animate-fade">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">
            Yogaazhaki S
            <svg className="name-underline" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 14.5C65 4.5 150 2 297.5 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </h1>

          <h2 className="hero-tagline">
            Building intelligent and scalable digital solutions.
          </h2>

          <div className="hero-typewriter-container">
            <span className="hero-typewriter-text">{typewriterText}</span>
            <span className="typewriter-cursor">|</span>
          </div>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              See My Work
            </button>
            <a href="/resume.pdf" className="btn-secondary" download="Yogaazhaki_Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
