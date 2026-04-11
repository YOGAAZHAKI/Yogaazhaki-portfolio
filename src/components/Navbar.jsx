import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = scrolled + '%';

      // Active section highlight
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="scroll-progress"></div>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo" onClick={() => scrollTo('hero')}>
            Yogaazhaki<span>.</span>
          </div>
          
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => scrollTo(link.id)}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`line ${menuOpen ? 'line1' : ''}`}></div>
            <div className={`line ${menuOpen ? 'line2' : ''}`}></div>
            <div className={`line ${menuOpen ? 'line3' : ''}`}></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
