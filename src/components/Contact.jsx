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
              I'm always open to collaborating on interesting projects or just geeking out about AI. Drop me a message!
            </p>
            
            <div className="contact-details">
              <a href="mailto:yogaazhaki@gmail.com" className="contact-item">
                <span className="contact-icon">✉️</span> yogaazhaki@gmail.com
              </a>
              <a href="tel:+919361030696" className="contact-item">
                <span className="contact-icon">📞</span> +91 93610 30696
              </a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">LeetCode</a>
              <a href="#" className="social-icon">HackerRank</a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="name" placeholder="Your Name" required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder="Your Email" required />
                <label htmlFor="email">Your Email</label>
              </div>
              <div className="form-group">
                <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn-primary form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>Hand-crafted with 🧡 loosely typing on a mechanical keyboard.</p>
        <p className="copyright">© 2026 Yogaazhaki S. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
