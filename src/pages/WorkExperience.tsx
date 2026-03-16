import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { experiences } from '../data/portfolio';

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={{
              background: '#1e1e1e',
              color: '#e6e6e6',
              borderTop: item.type === 'work' ? '3px solid #e50914' : '3px solid #ff69b4',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #1e1e1e',
            }}
            date={item.period}
            iconStyle={
              item.type === "work"
                ? { background: '#e50914', color: '#fff' }
                : { background: '#ff69b4', color: '#fff' }
            }
            icon={item.type === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700 }}>
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: '#e50914', fontSize: '0.95rem', fontWeight: 500, marginTop: '4px' }}>
              {item.organization} — {item.location}
            </h4>
            {item.technologies && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '12px 0' }}>
                {item.technologies.map((tech, i) => (
                  <span key={i} style={{
                    background: 'rgba(229, 9, 20, 0.15)',
                    color: '#e50914',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
            <ul style={{ paddingLeft: '16px', margin: '8px 0 0', listStyle: 'none' }}>
              {item.highlights.map((h, i) => (
                <li key={i} style={{
                  color: '#b3b3b3',
                  fontSize: '0.83rem',
                  lineHeight: '1.6',
                  padding: '3px 0',
                  paddingLeft: '14px',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: '#e50914',
                    fontWeight: 'bold',
                  }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#46d369', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
