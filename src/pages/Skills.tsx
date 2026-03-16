import React from 'react';
import './Skills.css';
import { skillCategories } from '../data/portfolio';
import { FaAws, FaPython, FaDatabase, FaShieldAlt, FaRobot, FaLinux, FaCode, FaJenkins } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiGrafana } from 'react-icons/si';

const categoryIcons: Record<string, React.ReactNode> = {
  "Cloud Platforms": <FaAws />,
  "Containers & Orchestration": <SiKubernetes />,
  "IaC & Configuration": <SiTerraform />,
  "CI/CD & GitOps": <FaJenkins />,
  "Monitoring & Observability": <SiGrafana />,
  "Security & Compliance": <FaShieldAlt />,
  "AI & Automation": <FaRobot />,
  "Programming & Scripting": <FaPython />,
  "Databases & Messaging": <FaDatabase />,
  "OS & Networking": <FaLinux />,
};

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      {skillCategories.map((cat) => (
        <div key={cat.category} className="skill-category">
          <h3 className="category-title">{cat.category}</h3>
          <div className="skills-grid">
            {cat.skills.map((skill) => (
              <div key={skill} className="skill-card">
                <div className="icon">{categoryIcons[cat.category] || <FaCode />}</div>
                <h3 className="skill-name">
                  {skill.split('').map((letter, i) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter === ' ' ? '\u00A0' : letter}
                    </span>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
