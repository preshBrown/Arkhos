import React from "react";
import classes from "./InlineImageSection.module.css";
import DivMotion, { XAxisRight } from "../Motion/DivMotion";
import { MotionLeft } from "../Motion/ImageSlidesMotion/ImageSlidesMotion";

const InlineImageSection = (props) => {
  return (
    <section style={{ marginTop: "40px", marginBottom: "48px" }}>
      <div className={classes.weAreContentWrapper}>
        {props.header && (
          <header className={classes.WeAreHeader}>
            <div className={classes.Bar}></div>
            <h2>{props.header}</h2>
          </header>
        )}

        <div className={classes.ItemsWrapper}>
          <article className={classes.imageContainer}>
            <MotionLeft delay={0.1}>
              <div className={classes.Background}>
                <div className={classes.imageWrapper}>
                  <img src={props.img} alt="description" />
                </div>
              </div>
            </MotionLeft>
          </article>

          <article className={classes.Description}>
            
            {props.content}
            {/* <Button className={classes.Description_Btn} to={props.path}>
              Read More
            </Button> */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default InlineImageSection;
