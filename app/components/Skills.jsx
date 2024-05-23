import React from 'react';
import skillsData from './../../public/data/skills.json'

const Skills = () => (
  <ul className='list-disc pl-8'>
    {skillsData.map((skill, index) => (
      <li key={index}>
        <span className='font-semibold'>{skill.type}: </span> 
        {Array.isArray(skill.items) ? skill.items.join(', ') : ''}
      .</li>
    ))}
  </ul>
);

export default Skills;