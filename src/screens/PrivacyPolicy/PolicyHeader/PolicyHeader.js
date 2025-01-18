import React from "react";
import Button from "../../../components/Interfaces/Button/Button";

import classes from "./PolicyHeader.module.css";
import Reveal from "../../../components/Motion/Reveal/Reveal";

const PolicyHeader = (props) => {
  return (
    <section className={classes.PolicyHeader}>
      <article className={classes.PolicyHeaderWrapper}>
        <div className={classes.PolicyHeaderContents}>
          <h2>
            <Reveal cover>{props.heading}</Reveal>
          </h2>
          <small>
            <Reveal cover>{props.intro}</Reveal>
          </small>
          <Reveal cover className={classes.PolicyHeaderNavigations}>
            <Button
              clicked={props.getStarted}
              W-100
              className={classes.GetStartedBtn}
            >
              Get Started
            </Button>{" "}
            <Button Danger className={classes.LernMoreLink} to={props.link}>
              Learn More
            </Button>
          </Reveal>
        </div>
      </article>

      <article className={classes.Png}>
        <div className={classes.PngWrapper}>
          <img src={props.img} alt={props.alt} />
        </div>
      </article>
    </section>
  );
};

export default PolicyHeader;
