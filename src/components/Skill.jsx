import React from 'react';
import './Skill.css'; 

const Skill = ({ name, icon }) => {
  return (
    <div className="skill">
      <img src={icon} alt={name} className="skill-icon" />
    </div>
  );
};

export default Skill;
