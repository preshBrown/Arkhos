import React from "react";
import ProjectCards from "./ProjectCards/ProjectCards";
import classes from "./ProjectHighlight.module.css";

const ProjectHighlight = (props) => {

  return (
    <ul className={classes.ProjectHighlight}>
      {props.projectData.map((proj) => (
        <ProjectCards description={proj.description} header={proj.header} img={proj.img} />
      ))}
    </ul>
  );
};

export default ProjectHighlight;
