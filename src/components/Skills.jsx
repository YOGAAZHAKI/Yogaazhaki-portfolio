import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'SQL']
    },
    {
      title: 'Web',
      skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'ML',
      skills: ['NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Streamlit']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter Notebook']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">02. My Toolkit</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-group" key={index}>
              <h3 className="group-title">
                <span className="scribble-underline">{category.title}</span>
              </h3>
              <div className="chips-wrapper">
                {category.skills.map((skill, idx) => (
                  <div className="skill-chip" key={idx} style={{ 
                    animationDelay: `${(index * 0.1) + (idx * 0.05)}s`,
                    transform: `rotate(${Math.random() * 4 - 2}deg)`
                  }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
