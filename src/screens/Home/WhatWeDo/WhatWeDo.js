import React from "react";

import display from "./what we do.jpg";
import classes from "./WhatWeDo.module.css";
import Button from "../../../components/Interfaces/Button/Button";
import { XAxisRight } from "../../../components/Motion/DivMotion";
import Reveal from "../../../components/Motion/Reveal/Reveal";
import { MotionRight } from "../../../components/Motion/ImageSlidesMotion/ImageSlidesMotion";

const WhatWeDo = (props) => {
  return (
    <section style={{ marginTop: "30px", marginBottom: "40px" }}>
      <div className={classes.weAreContentWrapper}>
        <header className={classes.WeAreHeader}>
          <div className={classes.Bar}></div>
          <h2>What we do</h2>
        </header>

        <div className={classes.ItemsWrapper}>
          <article className={classes.Description}>
            <Reveal cover>
            <p>
              {" "}
              Arkhos Oil & Gas Ltd offers a comprehensive range of services
              tailored to the needs of the oil and gas industry. With a deep
              understanding of the industry's unique challenges, we deliver
              top-notch solutions that span across various sectors:
            </p>
            </Reveal>
            <Reveal cover>
            <Button className={classes.Description_Btn} to={props.path}>
              Read More
            </Button>
            </Reveal>
          </article>

          <article className={classes.imageContainer}>
            <MotionRight delay={0.1}>
            <div className={classes.Background}>
              <div className={classes.imageWrapper}>
                <img src={display} alt="description" />
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

export default WhatWeDo;
