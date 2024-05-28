import React from 'react';
import educationData from './../../public/data/education.json' // import the JSON data

const Education = () => (
  <ul className='pl-4'>
    {educationData.map((education, index) => (
      <li key={index} className='font-semibold'>
        {education.institution}
        {education.details.map((detail, i) => (
          <li className='font-normal' key={i}>• {detail}</li>
        ))}
      </li>
    ))}
  </ul>
);

export default Education;