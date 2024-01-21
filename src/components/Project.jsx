import React from 'react';
import './Project.css';

const Project = ({ title, description, image, demoLink, codeLink, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`project-container ${isEven ? 'even' : 'odd'}`}>
      <div className="project-card">
        <div className={`project-image-container ${isEven ? 'left' : 'right'}`}>
          <img src={image} alt={title} className="project-image" />
        </div>
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
        </div>
      </div>
      <div className="project-links">
        {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>}
        {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>}
      </div>
    </div>
  );
};

export default Project;
