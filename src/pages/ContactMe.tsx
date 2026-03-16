import React from 'react';
import './ContactMe.css';
import profileImg from '../assets/profile.jpg';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profileImg} alt={profile.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{profile.name}</h3>
          <p className="badge-title">{profile.tagline}</p>
          <p className="badge-description">{profile.summary}</p>
          <p className="badge-company">{profile.location}</p>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="badge-link">
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${profile.email}`} className="contact-link">{profile.email}</a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${profile.phone}`} className="contact-link">{profile.phone}</a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">github.com/sharmashubham33</a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>

      <div className="contact-cta">
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
