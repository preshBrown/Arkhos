import React from "react";

import classes from "./ReverseImageSection.module.css";
import { XAxisRight } from "../Motion/DivMotion";
import { MotionRight } from "../Motion/ImageSlidesMotion/ImageSlidesMotion";

const ReverseImageSection = (props) => {
  return (
    <section style={{ marginTop: "45px", marginBottom: "40px" }}>
      <div className={classes.weAreContentWrapper}>
        {props.header && (
          <header className={classes.WeAreHeader}>
            <div className={classes.Bar}></div>
            <h2>{props.header}</h2>
          </header>
        )}

        <div className={classes.ItemsWrapper}>
          <article className={classes.Description}>
            {props.content}
            {/* <Button className={classes.Description_Btn} to={props.path}>
            Read More
          </Button> */}
          </article>

          <article className={classes.imageContainer}>
            <MotionRight delay={0.1}>
              <div className={classes.Background}>
                <div className={classes.imageWrapper}>
                  <img src={props.img} alt="description" />
                </div>
              </div>
            </MotionRight>
          </article>
          <div class={classes.clearfix}></div>
        </div>
      </div>
    </section>
  );
};

export default ReverseImageSection;
