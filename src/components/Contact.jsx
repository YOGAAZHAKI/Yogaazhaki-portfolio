import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">06. Get In Touch</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-heading">Let's Connect</h3>

            <p className="contact-note">
              I’m open to internships, collaborations, and opportunities in
              AI, Machine Learning, Full Stack Development, and Generative AI.
              Feel free to reach out for projects, discussions, or networking.
            </p>

            <div className="contact-details">
              <a href="mailto:yogaazhaki@gmail.com" className="contact-item">
                yogaazhaki@gmail.com
              </a>

              <a href="tel:+919361030696" className="contact-item">
                +91 93610 30696
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/yogaazhaki-saravanan-54364528b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/YOGAAZHAKI"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                GitHub
              </a>

              <a
                href="https://leetcode.com/u/yogaazhakiS/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                LeetCode
              </a>

              <a
                href="https://www.hackerrank.com/profile/yogaazhaki"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                HackerRank
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <input type="text" id="name" required />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="form-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="form-group">
                <textarea id="message" rows="5" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>

              <button type="submit" className="btn-primary form-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p className="copyright">
          © 2026 Yogaazhaki S. Built with React & Vite.
        </p>
      </footer>
    </section>
  );
};

export default Contact;