import React from "react";
import classes from "./ProjectCards.module.css";
import ScrollBaseZoom from "../../Motion/ScrollBaseZoom/ScrollBaseZoom";

const ProjectCards = (props) => {
  return (
    <ScrollBaseZoom className={classes.ProjectCards}>
      <div>
        <div className={classes.ProjectCardsImageWrapper}>
          <img src={props.img} alt="highlScrollBaseZoomight" />
        </div>

        <article className={classes.ProjectCardsDescription}>
          <p>
            {" "}
            <h3>{props.header}</h3> <br />
            {props.description}
          </p>
        </article>
      </div>
    </ScrollBaseZoom>
  );
};

export default ProjectCards;
