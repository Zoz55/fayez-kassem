import React from 'react';

import certificatesData from './../../public/data/certificates.json' // import the JSON data

const Certificates = () => (
  <ul className='list-disc pl-8'>
    {certificatesData.map((certificate, index) => (
      <li key={index}>
        <a href={certificate.link}>{certificate.title}</a>
      </li>
    ))}
  </ul>
);

export default Certificates;