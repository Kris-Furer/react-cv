import React from 'react';

const Job = ({ title, company, period, responsibilities }) => (
  <div className="job">
    <h3>{title}</h3>
    <h4>{company} ({period})</h4>
    <ul>
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

export default Job;
