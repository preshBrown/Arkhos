import React from "react";

import classes from "./ReverseContainer.module.css";
import Button from "../../../Interfaces/Button/Button";
import Reveal from "../../../Motion/Reveal/Reveal";
import { XAxisRight } from "../../../Motion/DivMotion";
import { MotionRight } from "../../../Motion/ImageSlidesMotion/ImageSlidesMotion";

const ReverseContainer = (props) => {
  return (
    <section className={classes.ReconstructContainerWrapper}>
      <article className={classes.ReconstructContainer}>
      <MotionRight delay={0.1}>
        <div className={classes.ReconstructImageWrapper}>
          <img src={props.img} alt="closing" />
        </div>
        </MotionRight>

        <div className={classes.ReconstructInfo}>
          <h2>
            <Reveal cover>
              {props.header}
            </Reveal>
          </h2>
          <p>
            <Reveal cover>
              {props.desc}
            </Reveal>
          </p>

            {props.btnContent && (
          <Reveal>
              <Button
                clicked={props.clicked}
                className={classes.ReconstructInfoBtn}
              >
                {props.btnContent}
              </Button>
           </Reveal>
            )}
        </div>
      </article>
    </section>
  );
};

export default ReverseContainer;
