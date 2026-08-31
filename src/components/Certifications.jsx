import React from 'react';
import './Certifications.css';

import {
  FaPython,
  FaJsSquare,
  FaIndustry,
  FaCode,
  FaExternalLinkAlt,
  FaBrain,
  FaAmazon
} from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: 'Amazon ML Summer School 2026',
      issuer: 'Amazon',
      icon: <FaAmazon />,
      link: '#'
    },
    {
      title: 'Introduction to Large Language Models (LLMs)',
      issuer: 'NPTEL',
      icon: <FaBrain />,
      link: 'https://www.linkedin.com/posts/yogaazhaki-saravanan_nptel-llm-generativeai-share-7460691341891719168-lyLv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZlYMMBLGtVOCQZ6PvQmHcRksAhstD5xsY'
    },
    {
      title: 'Data Analytics with Python',
      issuer: 'NPTEL',
      icon: <FaPython />,
      link: 'https://www.linkedin.com/posts/share-7197896390964895744-jMXz/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZlYMMBLGtVOCQZ6PvQmHcRksAhstD5xsY'
    },
    {
      title: 'Industry 4.0 & IIoT',
      issuer: 'NPTEL',
      icon: <FaIndustry />,
      link: 'https://www.linkedin.com/posts/yogaazhaki-saravanan_industry-40-nptel-ugcPost-7397307845676978176-Swz9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZlYMMBLGtVOCQZ6PvQmHcRksAhstD5xsY'
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      icon: <FaCode />,
      link: 'https://www.linkedin.com/posts/yogaazhaki-saravanan_hiring-opentowork-fresher-share-7422518232122617856-3YV2/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZlYMMBLGtVOCQZ6PvQmHcRksAhstD5xsY'
    },
    {
      title: 'JavaScript Essentials',
      issuer: 'Cisco Networking Academy',
      icon: <FaJsSquare />,
      link: 'https://www.linkedin.com/posts/yogaazhaki-saravanan_javascript-cisconetworkingacademy-webdevelopment-ugcPost-7407838137055551488-D5ew/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZlYMMBLGtVOCQZ6PvQmHcRksAhstD5xsY'
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">05. Certifications</h2>

        <div className="certs-grid">
          {certs.map((cert, idx) => (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              key={idx}
            >
              <div className="cert-icon">
                {cert.icon}
              </div>

              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>

              <FaExternalLinkAlt className="cert-link-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;