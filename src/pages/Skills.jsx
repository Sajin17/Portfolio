import React from 'react';
import Skill from '../components/Skill';
import HTML5 from '../assets/html.svg'
import CSS3 from '../assets/css.svg'
import JS from '../assets/js.svg'
import Rt from '../assets/rct.svg'
import Fb from '../assets/fbs.svg'
import SQL from '../assets/sql.png'
import py from '../assets/python.svg'
import java from '../assets/java.svg'
import './Skills.css';

const Skills = () => {
  const skills = [
    {name: 'HTML5', icon: HTML5},
    {name: 'CSS3', icon: CSS3},
    {name: 'JavaScript', icon: JS},
    { name: 'React', icon: Rt},
    {name: 'Firebase', icon: Fb},
    {name: 'SQL', icon: SQL},
    {name: 'Python', icon: py},
    {name: 'Java', icon: java},
  ];

  return (
    <div className="container">
    <h2 className="heading">Tech Stack</h2>
    <div className="skills-container">
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} icon={skill.icon} />
      ))}
    </div>
    </div>
  );
};

export default Skills;

