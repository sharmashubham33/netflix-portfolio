import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  avatarUrl: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, avatarUrl, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <div className="image-container">
        <img src={avatarUrl} alt={`${name} profile`} className="profile-image" />
      </div>
      <h3 className="profile-name">{name}</h3>
    </div>
  );
};

export default ProfileCard;
