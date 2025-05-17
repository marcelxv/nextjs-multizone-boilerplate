"use client";

import React from "react";

type SkillsPageProps = {
  skills: string[];
};

const SSRTesting: React.FC<SkillsPageProps> = ({ skills }) => {
  return (
    <div>
      <h1 data-testid="heading">Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SSRTesting;
