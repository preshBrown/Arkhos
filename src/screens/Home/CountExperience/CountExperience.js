import React, { useEffect, useState } from "react";
import classes from "./CountExperience.module.css";
import CountCard from "./CountCard";

const experience = [
  { id: 1, count: 10, description: "Years of experience" },
  { id: 2, count: 1480, description: "Project completed" },
  { id: 3, count: 760, description: "Satisfied client" },
  { id: 4, count: 75, description: "Active Workers" },
  { id: 5, count: 45, description: "Subcontractors" },
];

const CountExperience = (props) => (
  <section className={classes.ExperienceContainer}>
    {experience.map((exp) => (
      <CountCard  
      key={exp.id}
      count={exp.count}
      description={exp.description}
       />
    ))}
  </section>
);

export default CountExperience;
