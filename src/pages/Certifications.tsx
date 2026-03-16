import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaMicrosoft, FaAws, FaGoogle } from 'react-icons/fa';
import { SiMeta } from 'react-icons/si';
import { certifications } from '../data/portfolio';

// Import all cert images
const certImages = import.meta.glob('../assets/certs/*.png', { eager: true, import: 'default' }) as Record<string, string>;

function getCertImage(imageKey: string): string | undefined {
  const path = `../assets/certs/${imageKey}.png`;
  return certImages[path];
}

const issuerIcons: Record<string, React.ReactNode> = {
  Microsoft: <FaMicrosoft />,
  AWS: <FaAws />,
  Google: <FaGoogle />,
  IBM: <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>IBM</span>,
  Meta: <SiMeta />,
  WES: <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>WES</span>,
  Coursera: <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>C</span>,
};

// Group by issuer
const grouped = certifications.reduce((acc, cert) => {
  if (!acc[cert.issuer]) acc[cert.issuer] = [];
  acc[cert.issuer].push(cert);
  return acc;
}, {} as Record<string, typeof certifications>);

const sectionOrder = ["Microsoft", "AWS", "Google", "IBM", "Meta", "WES"];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <h1 className="certs-page-title">Certifications & Credentials</h1>
      <p className="certs-page-subtitle">{certifications.length} verified certifications across cloud, security, and development</p>

      {sectionOrder.map(issuer => {
        const certs = grouped[issuer];
        if (!certs) return null;
        return (
          <div key={issuer} className="cert-section">
            <h2 className="cert-section-title">
              <span className="cert-section-icon">
                {issuerIcons[issuer]}
              </span>
              {issuer}
              <span className="cert-count">{certs.length}</span>
            </h2>
            <div className="certifications-grid">
              {certs.map((cert, index) => {
                const imgSrc = getCertImage(cert.image);
                return (
                  <a
                    href={cert.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-card"
                    style={{ '--delay': `${index * 0.06}s` } as React.CSSProperties}
                  >
                    <div className="certification-content">
                      <div className="certification-logo">
                        {imgSrc ? (
                          <img src={imgSrc} alt={cert.title} />
                        ) : (
                          <span className="cert-badge-fallback">{cert.badge}</span>
                        )}
                      </div>
                      <div className="certification-text">
                        <h3>{cert.title}</h3>
                        {cert.date && <span className="cert-date">Issued {cert.date}</span>}
                      </div>
                    </div>
                    <div className="certification-link-icon">
                      <FaExternalLinkAlt />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Certifications;
