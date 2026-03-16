import React from 'react';
import './Projects.css';
import { projects } from '../data/portfolio';
import { FaAws, FaPython, FaSlack } from 'react-icons/fa';
import { SiPrometheus, SiGrafana, SiGithubactions, SiOpenai, SiKubernetes } from 'react-icons/si';

const techIcons: Record<string, React.ReactNode> = {
  "Azure OpenAI": <SiOpenai />,
  "RAG": <SiOpenai />,
  "Prometheus": <SiPrometheus />,
  "Alertmanager": <SiPrometheus />,
  "Slack Bot": <FaSlack />,
  "Vector DB": <FaAws />,
  "Python": <FaPython />,
  "GitHub Actions": <SiGithubactions />,
  "Grafana": <SiGrafana />,
  "Go": <FaPython />,
  "Kubernetes": <SiKubernetes />,
  "Loki": <SiGrafana />,
  "OpenTelemetry": <SiPrometheus />,
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <div className="project-details">
              <p>{project.description}</p>
              <div className="tech-used">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
                  </span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
