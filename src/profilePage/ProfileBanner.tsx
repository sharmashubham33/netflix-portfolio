import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { profile } from '../data/portfolio';
import netflixSound from '../assets/netflix-sound.mp3';

const ProfileBanner: React.FC = () => {
  const playNetflixSound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(err => console.error("Audio play error:", err));
  };

  const handleResumeClick = () => {
    playNetflixSound();
    setTimeout(() => {
      window.open(profile.resumeUrl, '_blank');
    }, 800);
  };

  const handleLinkedinClick = () => {
    window.open(profile.linkedin, '_blank');
  };

  const handleGithubClick = () => {
    window.open(profile.github, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline">{profile.name}</h1>
        <p className="banner-tagline">{profile.tagline}</p>
        <p className="banner-description">{profile.summary}</p>
        <div className="banner-buttons">
          <PlayButton onClick={handleResumeClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
          <MoreInfoButton onClick={handleGithubClick} label="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
