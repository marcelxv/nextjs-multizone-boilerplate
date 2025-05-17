"use client";

import React from "react";

type TempPageProps = {
  skills: string[];
};

const TempTesting: React.FC<TempPageProps> = ({ skills }) => {
  return (
    <div>
      <h1 data-testid="heading">Temp Test</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default TempTesting;
