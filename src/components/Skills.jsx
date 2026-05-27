import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Flutter', 'HTML', 'CSS']
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs']
    },
    {
      title: 'ML / AI',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Computer Vision',
        'Generative AI',
        'OpenCV',
        'YOLO',
        'Scikit-Learn',
        'Streamlit',
        'CrewAI'
      ]
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'Docker',
        'Jenkins',
        'CI/CD',
        'Postman',
        'VS Code',
        'PyCharm',
        'Jupyter Notebook',
        'Google Colab',
        'Vercel'
      ]
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
                <span className="scribble-underline">
                  {category.title}
                </span>
              </h3>

              <div className="chips-wrapper">
                {category.skills.map((skill, idx) => (
                  <div
                    className="skill-chip"
                    key={idx}
                    style={{
                      animationDelay: `${(index * 0.1) + (idx * 0.05)}s`,
                      transform: `rotate(${Math.random() * 4 - 2}deg)`
                    }}
                  >
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