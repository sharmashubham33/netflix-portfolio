import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import { useNavigate } from 'react-router-dom';
import netflixSound from './assets/netflix-sound.mp3';

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isClicked) return;
    const audio = new Audio(netflixSound);
    audio.play().catch(err => console.error("Audio play error:", err));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handleClick}>
      <div className={`netflix-logo-text ${isClicked ? 'animate' : ''}`}>
        SHUBHAM
      </div>
      {!isClicked && <p className="click-hint">Click anywhere to enter</p>}
    </div>
  );
};

export default NetflixTitle;
