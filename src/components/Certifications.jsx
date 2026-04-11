import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    { title: 'JavaScript Essentials', issuer: 'Cisco', icon: '💻' },
    { title: 'Problem Solving (Basic)', issuer: 'HackerRank', icon: '🧠' },
    { title: 'Java, Python, JavaScript (Basic)', issuer: 'HackerRank', icon: '⚙️' },
    { title: 'Data Analytics with Python', issuer: 'NPTEL', icon: '📊' },
    { title: 'Industry 4.0 & IIoT', issuer: 'NPTEL', icon: '🏭' }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">05. Certifications</h2>
        
        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
