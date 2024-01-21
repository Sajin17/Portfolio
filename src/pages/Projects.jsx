import React from 'react';
import Project from '../components/Project'; 
import './Projects.css';

const Projects = ({ data }) => {
  return (
    <div className="portfolio">
      {data.map((project, index) => (
        <Project key={index} index={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
