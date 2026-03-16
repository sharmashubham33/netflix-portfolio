import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'hiring manager' | 'engineer' | 'visitor';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<ProfileType, { title: string; imgSrc: string; link: string }[]> = {
  recruiter: [
    { title: "Projects", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
  ],
  "hiring manager": [
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
  ],
  engineer: [
    { title: "Experience", imgSrc: "https://picsum.photos/id/1026/300/200", link: "/work-experience" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
  ],
  visitor: [
    { title: "Skills", imgSrc: "https://picsum.photos/id/1025/300/200", link: "/skills" },
    { title: "Certifications", imgSrc: "https://picsum.photos/id/1028/300/200", link: "/certifications" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
  ],
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const items = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {items.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="cw-overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
